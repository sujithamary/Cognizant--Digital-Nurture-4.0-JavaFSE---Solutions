// src/App.js
import React from 'react';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Event Handling Example App</h1>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
