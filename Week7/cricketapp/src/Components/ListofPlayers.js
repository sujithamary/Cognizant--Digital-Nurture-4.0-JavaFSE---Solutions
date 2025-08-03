// src/components/ListofPlayers.js
import React from 'react';

const players = [
  { name: "Virat", score: 90 },
  { name: "Rohit", score: 85 },
  { name: "Dhoni", score: 95 },
  { name: "Rahul", score: 65 },
  { name: "Hardik", score: 55 },
  { name: "Shami", score: 75 },
  { name: "Bumrah", score: 80 },
  { name: "Ashwin", score: 60 },
  { name: "Jadeja", score: 78 },
  { name: "Iyer", score: 50 },
  { name: "Gill", score: 88 },
];

const ListofPlayers = () => {
  const topPlayers = players.filter(p => p.score >= 70);

  return (
    <div>
      <h2>Top Players (Score ≥ 70)</h2>
      <ul>
        {topPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
