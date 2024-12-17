let form = document.querySelector('#addForm');
let itemsList = document.querySelector('#items');

form.addEventListener('submit', addItem);
function addItem(e) {
  e.preventDefault();

  let newIteminput = document.querySelector('#newItemText');
  let newItemtext = newIteminput.value;

  let newElement = document.createElement('li');
  newElement.className = 'list-group-item';

  let newTextNode = document.createTextNode(newItemtext);
  newElement.appendChild(newTextNode);

  let deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('Удалить'));
  deleteBtn.className = 'btn btn-light btn-sm float-right';
  deleteBtn.dataset.action = 'delete';

  newElement.appendChild(deleteBtn);

  itemsList.prepend(newElement);

  newIteminput.value = '';
}
