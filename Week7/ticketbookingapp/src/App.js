import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let page;
  let button;

  if (isLoggedIn) {
    page = <UserPage />;
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    page = <GuestPage />;
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Flight Ticket Booking App</h1>
      {button}
      <hr />
      {page}
    </div>
  );
}

export default App;
