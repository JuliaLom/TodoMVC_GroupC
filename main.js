let todos = "";
let template = document.querySelector('#todo-template');
var todoList;
start();

function start() {

    template.remove();
    setSearchForm();
    ToggleAll();
}

function setSearchForm() {
    let form = document.querySelector('#form');
    let newTodos = document.querySelector('#new-todos');

    form.onsubmit = function (event) {
        event.preventDefault();
            todos = newTodos.value; //global
            addTodos();
            form.reset();
    }
}
function addTodos() {

    todoList = document.querySelector('#todo-list');
    let li = template.content.firstElementChild.cloneNode(true);
    li.querySelector('.todo-value').textContent = todos;
    todoList.append(li);
    removeTodos(li);
}
function removeTodos(li) {
    let todoRemove = li.querySelector('.todo-remove');
    todoRemove.onclick = function (event) {
        li.remove();
    }
}
function ToggleAll() {
    let ToggleAllCheckbox = document.querySelector('#toggle-all');

    ToggleAllCheckbox.onclick = event => {
        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');
        if (ListofLi.length > 0) {

            for (let li of ListofLi) {

                if (ToggleAllCheckbox.checked == true) {

                    let checkbox = li.querySelector('.toggle-item');
                    checkbox.checked = true;
                }
                if (ToggleAllCheckbox.checked == false) {

                    let checkbox = li.querySelector('.toggle-item');
                    checkbox.checked = false;
                }
            }
        }

    }

}