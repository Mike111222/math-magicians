import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-right bg-secondary mt-3 screen">0</div>
      </div>
      <div className="row no-gutters">
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">AC</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">+/-</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">%</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-warning btn-xxl btn-block">÷</button>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">7</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">8</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">9</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-warning btn-xxl btn-block">x</button>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">4</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">5</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">6</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-warning btn-xxl btn-block">-</button>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">1</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">2</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">3</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-warning btn-xxl btn-block">+</button>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-6">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">0</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-secondary btn-xxl btn-block btn-offwhite">.</button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-warning btn-xxl btn-block">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
