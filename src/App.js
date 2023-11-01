import './App.css';
import logoSoria from './images/soria-logo.png';
import Boton from './components/button.js';
import INPUT from './components/input';
import  Botonclear  from './components/buttonclear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const[input, setInput] = useState('0')

  const addINPUT = val =>{
    setInput(input + val);
  }
  
  const calculateResult = () => {
    if (input) {
    setInput(evaluate(input));
  } else {
    alert ("Please insert a correct Value");
  } 
  }


  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logoSoria}
        className='logo-img'
        alt='Logo de soria' 
        />
      </div>
      <div className='calculator-container'>
        <INPUT input={input}/>
        <div className='column'>
          <Boton manageClick={addINPUT}>7</Boton>
          <Boton manageClick={addINPUT}>8</Boton>
          <Boton manageClick={addINPUT}>9</Boton>
          <Boton manageClick={addINPUT}>/</Boton>
          
        </div>
        <div className='column'>
        <Boton manageClick={addINPUT}>4</Boton>
        <Boton manageClick={addINPUT}>5</Boton>
        <Boton manageClick={addINPUT}>6</Boton>
        <Boton manageClick={addINPUT}>+</Boton>
        </div>
        <div className='column'>
        <Boton manageClick={addINPUT}>1</Boton>
        <Boton manageClick={addINPUT}>2</Boton>
        <Boton manageClick={addINPUT}>3</Boton>
        <Boton manageClick={addINPUT}>-</Boton>
        </div>
        <div className='column'>
        <Boton manageClick={addINPUT}>.</Boton>
        <Boton manageClick={addINPUT}>0</Boton>
        <Boton manageClick={addINPUT}>*</Boton>
        
        <Boton manageClick={calculateResult}>=</Boton>
        </div>
        <div className='column'>
        <Botonclear manageClear={() => setInput('')}>
          Clear
        </Botonclear>
        </div>

      </div>
    </div>
  );
}

export default App;

