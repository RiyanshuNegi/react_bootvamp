import React from 'react';
import '../App.css';
const Assignment = (props) => {
  const { recipientName, occasion, greeting } = props;

  return (
    <div className="greeting-card">
      <h2>Dear {recipientName},</h2>
      <p>{greeting}</p>
      <p>Wishing you a {occasion}!</p>
    </div>
  );
};


export default Assignment;