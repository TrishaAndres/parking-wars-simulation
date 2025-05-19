export function getDayOfWeek(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  }
  
  function calculateTickets() {
    const r = Math.random() * 100;
    if (r < 35) return 0;
    if (r < 65) return 9;
    if (r < 95) return 1;
    return 12;
  }
  
  function calculateStudents() {
    const r = Math.random() * 100;
    if (r < 50) return 3;
    if (r < 85) return 1;
    return 6;
  }
  
  export function simulateMonth(start) {
    const results = [];
    const currentDate = new Date(start);
  
    while (currentDate.getMonth() === new Date(start).getMonth()) {
      const day = currentDate.getDay();
      if (day !== 0 && day !== 6) {
        const tickets = calculateTickets();
        const students = calculateStudents();
        const result = {
          date: new Date(currentDate),
          dayName: getDayOfWeek(currentDate),
          tickets,
          students,
          winner: students >= tickets ? 'Students' : 'Parking'
        };
        results.push(result);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return results;
  }
  