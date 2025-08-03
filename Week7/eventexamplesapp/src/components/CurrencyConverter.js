// src/components/CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = () => {
    const result = parseFloat(rupees) / 90; // Example conversion rate
    setEuros(result.toFixed(2));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Currency Converter (INR to EUR)</h2>
      <input
        type="number"
        placeholder="Enter INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>EUR: €{euros}</p>
    </div>
  );
};

export default CurrencyConverter;
