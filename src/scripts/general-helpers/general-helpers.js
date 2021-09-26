export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

export function parseDate(isoDate) {
  const date = new Date(isoDate);

  try {
    if (!isValidDate(date)) throw new Error("Invalid date");

    const dateString = date.toLocaleDateString({}, 
      {month: '2-digit', day: '2-digit', year: 'numeric'});
    const timeString = date.toLocaleTimeString({}, 
      { hour: '2-digit', minute: '2-digit', hour12: false });

    return { date: dateString, time: timeString };
  } catch(err) {
    console.log(err);
    return { date: '',  time: '' };
  }
};