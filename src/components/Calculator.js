import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Button(props) {
  const { text, className } = props;

  return (
    <button type="button" className={`button ${className}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

function Calculator() {
  return (
    <div className="calculator">
      <div className="row-div">
        <div className="screen">0</div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="AC" className="btn-clear" />
        </div>
        <div className="col-3">
          <Button text="+/-" className="btn-clear" />
        </div>
        <div className="col-3">
          <Button text="%" className="btn-clear" />
        </div>
        <div className="col-3">
          <Button text="÷" className="btn-operator" />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="7" />
        </div>
        <div className="col-3">
          <Button text="8" />
        </div>
        <div className="col-3">
          <Button text="9" />
        </div>
        <div className="col-3">
          <Button text="x" className="btn-operator" />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="4" />
        </div>
        <div className="col-3">
          <Button text="5" />
        </div>
        <div className="col-3">
          <Button text="6" />
        </div>
        <div className="col-3">
          <Button text="-" className="btn-operator" />
        </div>
      </div>
      <div className="row-div">
        <div className="col-3">
          <Button text="1" />
        </div>
        <div className="col-3">
          <Button text="2" />
        </div>
        <div className="col-3">
          <Button text="3" />
        </div>
        <div className="col-3">
          <Button text="+" className="btn-operator" />
        </div>
      </div>
      <div className="row-div">
        <div className="col-6">
          <Button text="0" className="button-zero" />
        </div>
        <div className="col-3">
          <Button text="." />
        </div>
        <div className="col-3">
          <Button text="=" className="btn-operator" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
