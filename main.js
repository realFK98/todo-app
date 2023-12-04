import {
  addTodoHandler,
  beforeUnloadHandler,
  loadHandler,
} from './eventHandler/evenContorller.js';
const addBtn = document.getElementById('addBtn');

window.addEventListener('unload', beforeUnloadHandler);
window.addEventListener('load', loadHandler);
addBtn.addEventListener('click', addTodoHandler);
