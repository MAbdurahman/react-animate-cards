/*===========================================
            App.js
===========================================*/
import React, { useState } from 'react';
import Form from './components/Form';
import Heading from './components/Heading';
import ListContainer from './components/ListContainer';

let count = 3;

const App = () => {

  //**************** Hook State Values ****************//
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {id: 1, text: 'It takes a wise man to discover a wise man - Diogenes'},
    {id: 2, text: 'There is nothing permanent except change - Heraclitus'}
  ]);

//**************** Functionality ****************//
const handleSubmit = e => {
  e.preventDefault();
  setItems([...items, {id: count, text: value}]);
  setValue('');
  count++;

};

  return (
    <>
    <Heading/>
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

