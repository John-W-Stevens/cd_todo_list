import React, { useState } from 'react';
import './App.css';
import "./bootstrap.css";

import AddElementForm from "./components/addElementForm"
import Element from "./components/Element"

function App() {
  const [elements, setElements] = useState([])

  return (
    <div className="App container">
      <AddElementForm elements = { elements } setElements = { setElements }/>
      
      {elements.map( (element, i) => (
        <Element key={ i } element={ element } elements={ elements } setElements={ setElements } index={ i } />
      ))}

    </div>
  );
}

export default App;
