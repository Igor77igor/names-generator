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
  
  const justNames = userlist.map(user => user.value)


  const putNameToUserlist=(nameForList)=>
    {
      setUserlist([...userlist, nameForList]);
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

        let names = data.results;
        console.log(data.results)
        setIsLoading(false);

        names.forEach(name => {
          let value = name.name.first.toUpperCase();
          console.log('first name je:', value);
          
          let id = name.cell;
          console.log('id je:', id);

          if (justNames.includes(value)) 
          {
            searchDoubleName();  
          }

          else 
          {

            const person =
            {
              id,
              value
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
        
        if (justNames.includes(inputName.toUpperCase())) 
          {
          searchDoubleName();          
          }

          else
          {
            console.log('e target value od handlesubmita je:', inputName);

            const person2 =
              {
              id: (Math.floor(Math.random() * 1000)).toString(),
              value: inputName.toUpperCase()
              };

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

  return (   
     <div className="App">       
        <Button handleClick={handleClick} isLoading={isLoading}></Button>
        <List userlist={userlist} setUserlist={setUserlist} doubleName={doubleName} emptyValue={emptyValue}></List>
        <Input handleChange={handleChange}    handleSubmit={handleSubmit}  inputName={inputName}></Input>
    </div >
  );
}

export default App;
