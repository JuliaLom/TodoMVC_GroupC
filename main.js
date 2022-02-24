let todos = "";
let template = document.querySelector('#todo-template');
start();
function start(){
    template.remove();
    setSearchForm();
}

function setSearchForm() {
    let form = document.querySelector('#form');
    let newTodos = document.querySelector('#new-todos');

    form.onsubmit = function (event) {
        event.preventDefault();
        todos = newTodos.value; //global
        addTodos()
    }
}
function addTodos() {
    let todoList = document.querySelector('#todo-list');
    let li = template.content.firstElementChild.cloneNode(true);
    li.querySelector('.todo-value').textContent = todosItem;
    todoList.append(li);
}