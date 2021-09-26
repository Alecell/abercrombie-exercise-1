import { parseDate } from '../general-helpers/general-helpers.js';

export function makeDate(isoString) {
  const { date, time } = parseDate(isoString);
  let content = `${date} at ${time}`;

  if (!date || !time) content = 'Missing creation date';

  return content;
}

export function initHbsHelpers() {
  Handlebars.registerHelper("makeDate", makeDate);
}
