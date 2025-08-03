// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const team = ["Virat", "Rohit", "Dhoni", "Rahul", "Hardik", "Shami"];
  const oddPlayers = team.filter((_, index) => index % 2 !== 0);
  const evenPlayers = team.filter((_, index) => index % 2 === 0);

  const T20players = ["Gill", "Suryakumar", "Ishan"];
  const RanjiTrophy = ["Pujara", "Rahane"];
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>{allPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
