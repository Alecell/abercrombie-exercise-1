import { initHbsHelpers } from './hbs-helpers/hbs-helpers.js';
import { requestData } from './request.js';

initHbsHelpers();

window.onload = async function() {
  const body = document.getElementById('body');
  const list = document.getElementById('list');

  try {
    const source = document.getElementById('item-template').innerHTML;
    const template = Handlebars.compile(source);
    const users = await requestData();
    let items = '';

    if (users.length) {
      items = template(users);
      list.innerHTML = items;
    } else {
      body.innerHTML = 'Seems like there are no users to show';
    }
  } catch(err) {
    body.innerHTML = 'Something went wrong, try again later or in another browser';
  }
};
