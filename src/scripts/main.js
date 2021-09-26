import { listUsers } from './core/list-users.js';
import { initHbsHelpers } from './helpers/hbs/hbs-helpers.js';

initHbsHelpers();

window.onload = function() {
  const body = document.getElementById('body');
  
  try {
    listUsers();
  } catch(err) {
    body.innerHTML = 'Something went wrong, try again later or in another browser';
  }
};
