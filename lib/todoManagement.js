import Todo from './todo.js';

export default function todoMangement() {
  let todos = [];

  function loadTodos(userTodos, runningId) {
    todos = userTodos;
    Todo.runningId = runningId;
  }

  function addTodo(desc) {
    return todos[todos.push(new Todo(undefined, desc)) - 1].id;
  }

  function findTodo(searchId) {
    return todos.find(({ id }) => id === searchId);
  }
  function findTodoIndex(searchId) {
    return todos.findIndex(({ id }) => id === +searchId);
  }

  function removeTodo(removeId) {
    todos.splice(findTodoIndex(removeId), 1);
  }

  function getTodos() {
    return todos;
  }

  function getNumberOfDone() {
    return todos.filter(({ done }) => done).length;
  }
  function getNumberOfNotDone() {
    return todos.filter(({ done }) => !done).length;
  }
  function clearTodo() {
    todos.splice(0, todos.length - 1);
  }
  function setItemToDone(doneId) {
    todos[findTodoIndex(doneId)].setDone(true);
  }
  function getRunningStatic() {
    return Todo.runningId;
  }

  return {
    addTodo,
    findTodo,
    findTodoIndex,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone,
    loadTodos,
    getRunningStatic,
  };
}
