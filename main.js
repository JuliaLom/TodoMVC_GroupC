let todos = "";
let template = document.querySelector('#todo-template');
var todoList = [];
start();

function start() {

    template.remove();
    setSearchForm();
    ToggleAll();
    RemoveChecked();
    ShowAll();
    HydeCompleted();
    HydeActive();
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
    CheckBox(li);
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
                let text = li.querySelector('.todo-value');
                let checkbox = li.querySelector('.toggle-item');
                if (ToggleAllCheckbox.checked == true) {

                    checkbox.checked = true;
                    text.style.color = "grey";
                }
                if (ToggleAllCheckbox.checked == false) {

                    checkbox.checked = false;
                    text.style.color = "black";
                }
            }
        }
    }
}
function CheckBox(li) {
    let checkbox = li.querySelector('.toggle-item');
    let text = li.querySelector('.todo-value');
    checkbox.onclick = event => {

        if (checkbox.checked == true) {
            checkbox.checked = true;
            text.style.color = "grey";
        }
        if (checkbox.checked == false) {
            checkbox.checked = false;
            text.style.color = "black";
        }
    }
}
function RemoveChecked() {
    let button = document.querySelector('.clear-complete');

    button.onclick = event => {
        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');

        for (let li of ListofLi) {
            let checkbox = li.querySelector('.toggle-item');
            if (checkbox.checked == true) {
                li.remove();
            }
        }
    }
}
function ShowAll() {
    let button = document.querySelector('.all');
    button.onclick = event => {

        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');
        for (let li of ListofLi) {
            let checkbox = li.querySelector('.toggle-item');
            li.style.display = "";
        }
    }
}
function HydeCompleted() {
    let button = document.querySelector('.active');
    button.onclick = event => {

        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');
        for (let li of ListofLi) {
            let checkbox = li.querySelector('.toggle-item');
            if (checkbox.checked == true) {
                li.style.display = "none";
            }
            if (checkbox.checked == false) {
                li.style.display = "";
            }
        }
    }
}
function HydeActive() {
    let button = document.querySelector('.complete');
    button.onclick = event => {

        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');

        for (let li of ListofLi) {
            let checkbox = li.querySelector('.toggle-item');
            if (checkbox.checked == false) {
                li.style.display = "none";
            }
            if (checkbox.checked == true) {
                li.style.display = "";
            }
        }
    }
}

