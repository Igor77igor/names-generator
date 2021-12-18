import './App.css';
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

          setJustNamesList([...justNamesList, mojeIme.toUpperCase()]);

          let id1 = ime.cell;
          console.log('id je:', id1);


          if (justNamesList.includes(mojeIme.toUpperCase())) {

            const doubleMessage = "IME VEC POSTOJI, UNIJETI NOVO IME";
            setDoubleName(doubleMessage);

            console.log('IME POSTOJI VEC');

          }

          else {

            let person =
            {
              id: id1,

              value: mojeIme.toUpperCase()
            };

            setUserlist([...userlist, person]);

          }

        });
      });

    setIsLoading(true);

  }


  const handleChange = (e) => {
    console.log('utipkano'); 
    setInputName(e.target.value);   
    setDoubleName('');
    setEmptyValue('');
  };

  const handleSubmit = (e) => {
    console.log('UIPKANO NESTO')
    e.preventDefault();

    if (inputName) {
      console.log("input name postoji");

      // userlist.forEach(user => {
      //   if (inputName === user.value)
      //   {
      //     console.log('UNEŠENO JE ISTO IME')
      //   const doubleMessage = "IME VEC POSTOJI, UNIJETI NOVO IME";
      //   setDoubleName(doubleMessage);
      // }

      if (justNamesList.includes(inputName.toUpperCase())) {
        console.log("ime vec postoji");

        const doubleMessage = "IME VEC POSTOJI, UNIJETI NOVO IME";
        setDoubleName(doubleMessage);

        console.log('Double name je sada:', doubleMessage);
      }

      else {
        console.log('e target value od handlesubmita je:', inputName);

        let person2 =
        {
          id: (Math.floor(Math.random() * 1000)).toString(),

          value: inputName.toUpperCase()
        };

        setUserlist([...userlist, person2]);
        setJustNamesList([...justNamesList, inputName.toUpperCase()]);

      }

      setInputName('');

    }

    else {
      console.log('prazno polje');
      const message = "UNESENO JE PRAZNO POLJE";
      setEmptyValue(message);

    }

  }

  console.log("userlist od svega:", userlist);
  console.log("just names:", justNamesList);


  

  return (   
     <div className="App">

            <div className="container">

                <header className="text-center text-light my-4">
                <h1 className="mb-4">NAME GENERATOR</h1>

                </header>

                <Button handleClick={handleClick} isLoading={isLoading}></Button>

                <List userlist={userlist} doubleName={doubleName} emptyValue={emptyValue}></List>

                <Input handleChange={handleChange}    handleSubmit={handleSubmit}  inputName={inputName}></Input>

                    

            </div>

    </div >


  );
}

export default App;
