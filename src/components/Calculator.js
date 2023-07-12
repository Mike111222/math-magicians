import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

function Button(props) {
  const { text, className, handleClick } = props;

  return (
    <button type="button" className={`button ${className}`} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
    setDisplayValue(newData.next || newData.operation || newData.total || '0');
  };

  return (
    <div className="calculator">
      <div className="row-div">
        <div className="screen" data-testid="screen">{displayValue}</div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="AC" className="btn-clear" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="+/-" className="btn-clear" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="%" className="btn-clear" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="÷" className="btn-operator" handleClick={handleButtonClick} />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="7" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="8" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="9" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="x" className="btn-operator" handleClick={handleButtonClick} />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="4" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="5" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="6" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="-" className="btn-operator" handleClick={handleButtonClick} />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="1" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="2" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="3" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="+" className="btn-operator" handleClick={handleButtonClick} />
        </div>
      </div>
      <div className="row-div">
        <div className="col-6">
          <Button text="0" className="button-zero" handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="." handleClick={handleButtonClick} />
        </div>
        <div className="col-3">
          <Button text="=" className="btn-operator" handleClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
