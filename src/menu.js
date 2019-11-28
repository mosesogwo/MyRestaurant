const menuList = () => {
  const newDiv = document.createElement('div');
  const title = document.createElement('h4');
  title.innerText = 'Menu';
  title.classList.add('text-center', 'mr-5');
  newDiv.appendChild(title);
  const list = document.createElement('ul');
  list.classList.add('list-group', 'w-25', 'ml-auto', 'mr-auto');

  for (let i = 0; i < 6; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-start', 'align-items-right');
    list.appendChild(listItem);
  }

  const items = list.querySelectorAll('.list-group-item');
  items[0].innerHTML = 'Food Item One';
  items[1].innerHTML = 'Food Item Two';
  items[2].innerHTML = 'Food Item Three';
  items[3].innerHTML = 'Food Item Four';
  items[4].innerHTML = 'Food Item Five';
  items[5].innerHTML = 'Food Item Six';

  newDiv.appendChild(list);
  return newDiv;
};

export default menuList;
