import { parseDate } from '../general/general.js';

export function creationDate(isoString, fallbackMessage) {
  const { date, time } = parseDate(isoString);
  let content = `${date} at ${time}`;

  if (!date || !time) content = fallbackMessage;

  return content;
}

export const hbsHelpers = (function() {
  function init() {
    Handlebars.registerHelper("creationDate", creationDate);
  }

  return {
    init,
  }
})();
