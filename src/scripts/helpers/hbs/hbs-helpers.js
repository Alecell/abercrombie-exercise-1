import { parseDate } from '../general/general-helpers.js';

export function creationDate(isoString, fallbackMessage) {
  const { date, time } = parseDate(isoString);
  let content = `${date} at ${time}`;

  if (!date || !time) content = fallbackMessage;

  return content;
}

export function initHbsHelpers() {
  Handlebars.registerHelper("creationDate", creationDate);
}
