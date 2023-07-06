import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app">
      <div>
        <h2>Calculator</h2>
        <Calculator />
      </div>
      <Quote />
    </div>
  );
}

export default App;
