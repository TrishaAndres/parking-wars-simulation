import React, { useState } from 'react';
import DateInput from './components/DateInput';
import DayCard from './components/DayCard';
import SummaryPanel from './components/SummaryPanel';
import { simulateMonth } from './utils/logic';
import './styles/App.css';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [results, setResults] = useState([]);

  const handleSimulate = () => {
    const outcome = simulateMonth(startDate);
    setResults(outcome);
  };

  return (
    <div className="App">
      <h1>🚫 Parking Wars at Clementine U</h1>
      <DateInput setStartDate={setStartDate} handleSimulate={handleSimulate} />
      <div className="log">
        {results.map((day, idx) => (
          <DayCard key={idx} {...day} />
        ))}
      </div>
      {results.length > 0 && <SummaryPanel data={results} />}
    </div>
  );
}

export default App;
