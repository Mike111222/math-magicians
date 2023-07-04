import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="row-div">
        <div className="screen">0</div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <button type="button" className="button btn-clear">AC</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-clear">+/-</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-clear">%</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-operator">÷</button>
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <button type="button" className="button">7</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">8</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">9</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-operator">x</button>
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <button type="button" className="button">4</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">5</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">6</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-operator">-</button>
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <button type="button" className="button">1</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">2</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">3</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-operator">+</button>
        </div>
      </div>
      <div className="row-div">
        <div className="col-6">
          <button type="button" className="button button-zero">0</button>
        </div>
        <div className="col-3">
          <button type="button" className="button">.</button>
        </div>
        <div className="col-3">
          <button type="button" className="button btn-operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
