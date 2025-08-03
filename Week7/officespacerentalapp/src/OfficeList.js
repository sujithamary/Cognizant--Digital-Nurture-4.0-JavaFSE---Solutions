// src/OfficeList.js
import React from 'react';
import officeImg from './officespace.jpg'; // adjust path if image is placed elsewhere

const OfficeList = () => {
  const heading = <h1>Office Space Rental Listings</h1>;

  const offices = [
    { name: "Tech Park", rent: 45000, address: "Bangalore" },
    { name: "Cyber Hub", rent: 75000, address: "Gurgaon" },
    { name: "Startup Space", rent: 60000, address: "Hyderabad" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}
      <img src={officeImg} alt="Office" style={{ width: "100%", marginBottom: "20px" }} />
      {offices.map((office, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
