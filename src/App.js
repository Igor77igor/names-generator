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
      const doubleMessage = "NAME ALREADY EXIST, ENTER NEW NAME";
      setDoubleName(doubleMessage);
    }

  const emptyField=()=>
    {
    setDoubleName('');    
    const message = "EMPTY FIELD ENTERED";
    setEmptyValue(message);
    }
    
  
  const handleClick = () => {
    
    fetch('https://randomuser.me/api')
      .then(res => {
        return res.json();
      })
      .then(data => {

        const bottunUser = data.results;
        setIsLoading(false);

        bottunUser.forEach(user => {
          const value = user.name.first.toUpperCase();                    
          const id = user.cell;
          
          if (justNames.includes(value)) 
          {
            searchDoubleName();  
          }

          else 
          {
            const buttonPerson =
            {
              id,
              value                            
            };
            putNameToUserlist(buttonPerson); 
          }

        });
      });

    setIsLoading(true);

  }


  const handleChange = (e) => 
  {
    setInputName(e.target.value);   
    setDoubleName('');
    setEmptyValue('');
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    if (inputName) 
      {
             
        if (justNames.includes(inputName.toUpperCase())) 
          {
          searchDoubleName();          
          }

          else
          {
            const inputPerson =
              {
              id: (Math.floor(Math.random() * 1000)).toString(),
              value: inputName.toUpperCase()
              };

            putNameToUserlist(inputPerson);             
          }

          setInputName('');

      }

    else 
    {
    emptyField()      
    }

  }

  const deleteName = (id)=>{
    const filteredUserlist = userlist.filter(user=>
      {
        return user.id!==id
      })

    setUserlist(filteredUserlist);
  }  

  return (   
     <div className="App">       
        <Button handleClick={handleClick} isLoading={isLoading}></Button>
        <List deleteName={deleteName} userlist={userlist} setUserlist={setUserlist} doubleName={doubleName} emptyValue={emptyValue}></List>
        <Input handleChange={handleChange} handleSubmit={handleSubmit} inputName={inputName}></Input>        
    </div >
  );
}

export default App;
