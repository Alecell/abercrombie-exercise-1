async function init() {
  const source = document.getElementById('item-template').innerHTML;
  const list = document.getElementById('list');
  const template = Handlebars.compile(source);
  const users = await requestData;

  $items = template(users);

  list.innerHTML = $items;
}

window.onload = init;
