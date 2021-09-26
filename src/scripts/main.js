window.onload = async function() {
  const source = document.getElementById('item-template').innerHTML;
  const list = document.getElementById('list');
  const template = Handlebars.compile(source);
  const users = await requestData;
  let $items = [];

  if (users.length) {
    $items = template(users);
    list.innerHTML = $items;
  } else {
    list.innerHTML = 'Something went wrong with the API, try again later';
  }
};
