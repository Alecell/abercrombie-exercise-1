export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

export function parseDate(rawDate) {
  const date = new Date(rawDate);

  try {
    if (!isValidDate(date)) throw new Error("Invalid date");

    const dateString = date.toLocaleDateString('en-US', 
      { month: '2-digit', day: '2-digit', year: 'numeric' });
    const timeString = date.toLocaleTimeString('en-US', 
      { hour: '2-digit', minute: '2-digit', hour12: false });

    return { date: dateString, time: timeString };
  } catch(err) {
    return { date: '',  time: '' };
  }
};
