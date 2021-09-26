import { UserService } from '../services/user.js';

export async function listUsers() {
  const list = document.getElementById('list');
  const source = document.getElementById('item-template').innerHTML;
  const template = Handlebars.compile(source);
  const users = await UserService.list();
  let items = '';

  if (users.length) {
    items = template(users);
    list.innerHTML = items;
  }
  
  if (!users.length) {
    body.innerHTML = 'Seems like there are no users to show';
  }
}