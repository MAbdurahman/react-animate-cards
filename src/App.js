/*===========================================
            App.js
===========================================*/
import React, { useState } from 'react';
import Form from './components/Form';
import Heading from './components/Heading';
import ListContainer from './components/ListContainer';
import Alert from './components/Alert';

let count = 1;

const App = () => {

  //**************** Hook State Values ****************//
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({isShowing:false});

//**************** Functionality ****************//
const handleAlert = ({text}) => {
  setAlert({isShowing:true, text:'Please enter a message!'});
  setTimeout(() => {
    setAlert({isShowing:false});
  }, 3000);
};


const handleSubmit = e => {
  e.preventDefault();
  if (!value) {
    handleAlert({text:'Please enter a message!'});

  } else {
    setItems([...items, { id: count, text: value }]);
    setValue('');
    setAlert('');
    count++;
  }

};

  return (
    <>
    <Heading/>
      {alert.isShowing && <Alert text={alert.text} />}
    <main className="container">
      <section className="row justify-content-center mt-3">
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
      </section>
      <section className="row justify-content-center mt-2">
        <ListContainer items={items}/>
      </section>
    </main>
    </>
  );
};

export default App;

