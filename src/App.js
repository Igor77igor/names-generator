import Button from './Button'
import List from './List'
import Input from './Input'
import { useState } from 'react';

function App() {
  

  const [userlist, setUserlist] = useState([]);

  const [inputName, setInputName] = useState("");

  const [doubleName, setDoubleName] = useState("");
  const [emptyValue, setEmptyValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [justNamesList, setJustNamesList] = useState([]);


  const putNameToUserlist=(nameForList)=>
    {
      setUserlist([...userlist, nameForList]);
    }


  const putNameToNameslist=(justNameForList)=>
    {
      setJustNamesList([...justNamesList, justNameForList.toUpperCase()]);
    }


  const searchDoubleName=()=>
    {
      console.log("ime vec postoji");
      const doubleMessage = "IME VEC POSTOJI, UNIJETI NOVO IME";
      setDoubleName(doubleMessage);
    }

  const emptyField=()=>
    {
    console.log('prazno polje');
      const message = "UNESENO JE PRAZNO POLJE";
      setEmptyValue(message);
    }
    
  
  const handleClick = () => {
    console.log("botun kliknut");  

    fetch('https://randomuser.me/api')
      .then(res => {
        return res.json();
      })
      .then(data => {

        let ime = data.results;
        setIsLoading(false);

        ime.forEach(ime => {
          let mojeIme = ime.name.first.toUpperCase();
          console.log('first name je:', mojeIme);

          putNameToNameslist(mojeIme); 
          
          let id1 = ime.cell;
          console.log('id je:', id1);


          if (justNamesList.includes(mojeIme.toUpperCase())) 
          {
          searchDoubleName();  
          }

          else 
          {

            let person =
            {
              id: id1,

              value: mojeIme.toUpperCase()
            };

            putNameToUserlist(person); 

          }

        });
      });

    setIsLoading(true);

  }


  const handleChange = (e) => 
  {
    console.log('utipkano'); 
    setInputName(e.target.value);   
    setDoubleName('');
    setEmptyValue('');
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    if (inputName) 
      {
        console.log("input name postoji");
        
        if (justNamesList.includes(inputName.toUpperCase())) 
          {
          searchDoubleName();          
          }

          else
          {
            console.log('e target value od handlesubmita je:', inputName);

            let person2 =
              {
              id: (Math.floor(Math.random() * 1000)).toString(),
              value: inputName.toUpperCase()
              };

            putNameToNameslist(inputName); 
            putNameToUserlist(person2);             
          }

          setInputName('');

      }

    else 
    {
    emptyField()      
    }

  }

  console.log("userlist od svega:", userlist);
  console.log("just names:", justNamesList);
  

  return (   
     <div className="App">       
        <Button handleClick={handleClick} isLoading={isLoading}></Button>
        <List userlist={userlist} setUserlist={setUserlist} doubleName={doubleName} emptyValue={emptyValue}></List>
        <Input handleChange={handleChange}    handleSubmit={handleSubmit}  inputName={inputName}></Input>
    </div >
  );
}

export default App;
