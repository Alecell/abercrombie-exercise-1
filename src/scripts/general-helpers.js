function makeDate(isoDate) {
  const date = new Date(isoDate);

  const dateString = date.toLocaleDateString({}, 
    {month: '2-digit', day: '2-digit', year: 'numeric'});
  const timeString = date.toLocaleTimeString({}, 
    { hour: '2-digit', minute: '2-digit', hour12: false });

  return {
    date: dateString, 
    time: timeString,
  }
};