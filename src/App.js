import React, { useState } from "react";
import "./App.css";

import * as math from "mathjs"



const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
   
    const isOperator = ['+', '-', '*', '/'].includes(value);
  const lastCharIsOperator = ['+', '-', '*', '/'].includes(input.slice(-1));
  const lastNumber = input.split(/[\+\-\*\/]/).pop();

    if ((isOperator && lastCharIsOperator && value !== '-') || (value === '.' && lastNumber.includes('.'))) {
      return;
    }

    if (value === '0' && input === '0') {
      return;
    }

    setInput((prevInput) => prevInput + value);
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };


  const handleCalculate = () => {
    try {

      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
     
      setInput('Error');
    }
  };

  const handleClear = () => {
   
    setInput('');
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {input || '0'}
      </div>
      <div className="buttons">
      <button id="clear" onClick={handleClear}>AC</button>
        <button id="divide" onClick={() => handleButtonClick('/')}>/</button>
        <button id="multiply" onClick={() => handleButtonClick('*')}>*</button>
        <button id="subtract" onClick={() => handleButtonClick('-')}>-</button>
        <button id="seven" onClick={() => handleButtonClick('7')}>7</button>
        <button id="eight" onClick={() => handleButtonClick('8')}>8</button>
        <button id="nine" onClick={() => handleButtonClick('9')}>9</button>
        <button id="add" onClick={() => handleButtonClick('+')}>+</button>
        <button id="four" onClick={() => handleButtonClick('4')}>4</button>
        <button id="five" onClick={() => handleButtonClick('5')}>5</button>
        <button id="six" onClick={() => handleButtonClick('6')}>6</button>
        <button id="delete" onClick={handleDelete}>←</button>
        <button id="one" onClick={() => handleButtonClick('1')}>1</button>
        <button id="two" onClick={() => handleButtonClick('2')}>2</button>
        <button id="three" onClick={() => handleButtonClick('3')}>3</button>
        <button id="equals" onClick={handleCalculate}>=</button>
        <button id="decimal" onClick={() => handleButtonClick('.')}>.</button>
        <button id="zero" onClick={() => handleButtonClick('0')}>0</button>
      </div>
    </div>
  );
};

export default App;
