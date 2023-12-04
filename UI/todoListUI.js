const numberOfDoneEl = document.getElementById('done');
const numberOfNotDoneEl = document.getElementById('notDone');
const todoListEl = document.getElementById('listTodo');

function showTodoItem(newId, newDescription) {
  const html = `
   <div class="todoItem" id=${newId}>
        <p>${newDescription}</p>
        <button>Not done</button>
        <button>remove</button>
   </div>
   `;
  todoListEl.insertAdjacentHTML('beforeend', html);
}

function showNumberOfDone(numberOfDone) {
  const html = `Number of Done: ${numberOfDone}`;
  numberOfDoneEl.innerHTML = html;
}
function showNumberOfNotDone(numberOfNotDone) {
  const html = `Number of Not Done: ${numberOfNotDone}`;
  numberOfNotDoneEl.innerHTML = html;
}

function removeTodoItem(removeId) {
  const itmeTodosEl = document.querySelectorAll('.todoItem');
  const selectEl = Array.from(itmeTodosEl).find((el) => {
    return el.getAttribute('id') === removeId;
  });
  selectEl.remove();
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem };
