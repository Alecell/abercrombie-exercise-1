import { listUsers } from './core/list-users.js';
import { toggleData } from './core/toggle-data.js';
import { hbsHelpers } from './helpers/hbs/hbs.js';

hbsHelpers.init();

window.onload = function() {
  listUsers.init();
  toggleData.init();

};
