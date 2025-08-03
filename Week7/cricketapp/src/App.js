// src/App.js
import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const flag = true; // Toggle between true and false

  return (
    <div className="App">
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
