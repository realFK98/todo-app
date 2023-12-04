import todoMangement from '../lib/todoManagement.js';
const todosM = todoMangement();
const inputEl = document.querySelector('#addTodo > input');
import {
  showNumberOfDone,
  showNumberOfNotDone,
  showTodoItem,
  removeTodoItem,
} from '../UI/todoListUI.js';
function notDoneButtonHandler({ target }) {
  target.textContent = 'Done';
  const todo = target.parentElement;
  todo.style.backgroundColor = 'green';
  todo.style.color = 'white';

  todosM.setItemToDone(todo.getAttribute('id'));

  showNumberOfDone(todosM.getNumberOfDone());
  showNumberOfNotDone(todosM.getNumberOfNotDone());
}
function removeButtonHandler({ target }) {
  const todo = target.parentElement;
  const idTodo = todo.getAttribute('id');
  todosM.removeTodo(idTodo);
  removeTodoItem(idTodo);

  showNumberOfDone(todosM.getNumberOfDone());
  showNumberOfNotDone(todosM.getNumberOfNotDone());
}
function loadHandler() {
  showNumberOfDone(todosM.getNumberOfDone());
  showNumberOfNotDone(todosM.getNumberOfNotDone());
  const request = localStorage.getItem('todos');
  if (!request) return;
  const getTodos = JSON.parse(request);
  const runningId = localStorage.getItem('runningId');
  todosM.loadTodos(getTodos, runningId);
  const todos = todosM.getTodos();
  todos.forEach(({ id, description, done }) => {
    showTodoItem(id, description);
    const nodeitem = document.getElementById(`${id}`);
    const [notDone, remove] = nodeitem.querySelectorAll('button');
    remove.addEventListener('click', removeButtonHandler);
    notDone.addEventListener('click', notDoneButtonHandler);
    if (done) {
      notDone.textContent = 'Done';
      nodeitem.style.backgroundColor = 'green';
      nodeitem.style.color = 'white';
    }
    showNumberOfDone(todosM.getNumberOfDone());
    showNumberOfNotDone(todosM.getNumberOfNotDone());
  });
}

function beforeUnloadHandler(event) {
  event.preventDefault();
  const TodosJSON = JSON.stringify(todosM.getTodos());
  localStorage.setItem('todos', TodosJSON);
  localStorage.setItem('runningId', todosM.getRunningStatic());
}

function addTodoHandler() {
  const descriptionInput = inputEl.value;
  if (!descriptionInput) return;
  const id = todosM.addTodo(descriptionInput);
  showTodoItem(id, descriptionInput);
  const newItemEl = document.getElementById(`${id}`);
  const [notDone, remove] = newItemEl.querySelectorAll('button');
  remove.addEventListener('click', removeButtonHandler);
  notDone.addEventListener('click', notDoneButtonHandler);

  showNumberOfDone(todosM.getNumberOfDone());
  showNumberOfNotDone(todosM.getNumberOfNotDone());
}

export { addTodoHandler, beforeUnloadHandler, loadHandler };
