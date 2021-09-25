Handlebars.registerHelper("makeDate", function(isoString) {
  const { date, time } = makeDate(isoString);
  return `${date} at ${time}`;
});