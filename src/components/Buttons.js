import React from 'react';

const Buttons = ({handleNumbers, handleOperator, handleDecimal, handleEvaluate, handleClear}) => (
  <div id="buttons">
    <button className="button" id="clear" value="AC" onClick={handleClear}>AC</button>
    <button className="button" id="divide" value="/" onClick={handleOperator}>÷</button>
    <button className="button" id="multiply" value="*" onClick={handleOperator}>×</button>
    <button className="button" id="one" value="1" onClick={handleNumbers}>1</button>
    <button className="button" id="two" value="2" onClick={handleNumbers}>2</button>
    <button className="button" id="three" value="3" onClick={handleNumbers}>3</button>
    <button className="button" id="subtract" value="-" onClick={handleOperator}>-</button>
    <button className="button" id="four" value="4" onClick={handleNumbers}>4</button>
    <button className="button" id="five" value="5" onClick={handleNumbers}>5</button>
    <button className="button" id="six" value="6" onClick={handleNumbers}>6</button>
    <button className="button" id="add" value="+" onClick={handleOperator}>+</button>
    <button className="button" id="seven" value="7" onClick={handleNumbers}>7</button>
    <button className="button" id="eight" value="8" onClick={handleNumbers}>8</button>
    <button className="button" id="nine" value="9" onClick={handleNumbers}>9</button>
    <button className="button" id="decimal" value="." onClick={handleDecimal}>.</button>
    <button className="button" id="equals" value="=" onClick={handleEvaluate}>=</button>
    <button className="button" id="zero" value="0" onClick={handleNumbers}>0</button>
  </div>
);

export default Buttons ;