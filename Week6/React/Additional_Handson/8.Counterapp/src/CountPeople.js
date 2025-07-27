// src/CountPeople.js
import React, { Component } from 'react';
import './CountPeople.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>People Counter</h1>
        <div className="count">
          <p><b>People Entered:</b> {this.state.entrycount}</p>
          <p><b>People Exited:</b> {this.state.exitcount}</p>
        </div>
        <div className="buttons">
          <button onClick={this.UpdateEntry}>Login</button>
          <button onClick={this.UpdateExit}>Exit</button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
