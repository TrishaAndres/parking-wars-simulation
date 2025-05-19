import React from 'react';

export default function SummaryPanel({ data }) {
  const studentWins = data.filter(d => d.winner === 'Students').length;
  const parkingWins = data.filter(d => d.winner === 'Parking').length;

  return (
    <div className="summary">
      <h2>📊 Month Summary</h2>
      <p>🚗 Parking Wins: <strong>{parkingWins}</strong></p>
      <p>🎓 Student Wins: <strong>{studentWins}</strong></p>
    </div>
  );
}
