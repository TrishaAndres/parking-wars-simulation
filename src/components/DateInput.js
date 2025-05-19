import React from 'react';

export default function DateInput({ setStartDate, handleSimulate }) {
  return (
    <div className="date-input">
      <label>Select a start date:</label>
      <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
      <button onClick={handleSimulate}>Start Simulation</button>
    </div>
  );
}
