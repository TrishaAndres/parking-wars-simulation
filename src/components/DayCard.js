import React from 'react';

export default function DayCard({ date, dayName, tickets, students, winner }) {
  return (
    <div className={`day-card ${winner.toLowerCase()}`}>
      <h3>{dayName}, {date.toLocaleDateString()}</h3>
      <p>Tickets Given: {tickets}</p>
      <p>Students w/o Permits: {students}</p>
      <strong>{winner} won the day 🎉</strong>
    </div>
  );
}
