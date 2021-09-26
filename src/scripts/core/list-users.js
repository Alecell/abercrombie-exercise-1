import { UserService } from '../services/user.js';

export const listUsers = (function() {
  /**
   * I was in doubt if the "unordered list" was only the tag
   * or if it was to shuffle the items too
   */
  function shuffle(list) {
    return list.sort(() => Math.random() - 0.5);
  }

  async function init() {
    const app = document.getElementById('app');
    const $list = document.getElementById('list');
    const $source = document.getElementById('item-template').innerHTML;

    try {
      const template = Handlebars.compile($source);
      const users = await UserService.list();
      let items = '';

      if (users.length) {
        items = template(shuffle(users));
        $list.innerHTML = items;
      }
      
      if (!users.length) {
        app.innerHTML = 'Seems like there are no users to show';
      }
    } catch(err) {
      app.innerHTML = 'Something went wrong, try again later or in another browser';
    }
  }

  return {
    init,
  }
})();