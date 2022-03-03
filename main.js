let todos = "";
let template = document.querySelector('#todo-template');
var todoList = [];
let cbutton = document.querySelector('.clear-complete');
cbutton.style.display = "none";
let footer = document.querySelector('footer');
footer.style.display = "none";
let state = "All";
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
        CheckItemsLeft();
        footer.style.display = "";
        
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
        CheckItemsLeft();
        if(CheckAmountOfItems() == 0){
            footer.style.display = "none";
        }
    }
}
function ToggleAll() {
    let ToggleAllCheckbox = document.querySelector('#toggle-all');
    /* let button = document.querySelector('.clear-complete'); */
    ToggleAllCheckbox.onclick = event => {
        
        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');
        if (ListofLi.length > 0) {

            for (let li of ListofLi) {
                let text = li.querySelector('.todo-value');
                let checkbox = li.querySelector('.toggle-item');
                if (ToggleAllCheckbox.checked == true) {

                    if(state == "Active"){
                        li.style.display = "none";
                    }
                    if(state == "All"){
                        li.style.display = "";
                    }
                    checkbox.checked = true;
                    text.style.color = "grey";
                    cbutton.style.display = "";
                }
                if (ToggleAllCheckbox.checked == false) {

                    if(state == "Complete"){
                        li.style.display = "none";
                    }
                    if(state == "All"){
                        li.style.display = "";
                    }
                    checkbox.checked = false;
                    text.style.color = "black";
                    if(CheckCheckedAmount() == 0){
                        cbutton.style.display = "none";
                    }
                }
            }
            CheckItemsLeft();
        }
    }
}
function CheckBox(li) {
    let checkbox = li.querySelector('.toggle-item');
    let text = li.querySelector('.todo-value');
    /* let button = document.querySelector('.clear-complete'); */
    checkbox.onclick = event => {

        if (checkbox.checked == true) {
            /* checkbox.checked = true; */
            if(state == "Active"){
                li.style.display = "none";
            }
            if(state == "All"){
                li.style.display = "";
            }
            text.style.color = "grey";
            cbutton.style.display = "";
        }
        if (checkbox.checked == false) {
            /* checkbox.checked = false; */
            text.style.color = "black";
            if(state == "Complete"){
                li.style.display = "none";
            }
            if(state == "All"){
                li.style.display = "";
            }
            if(CheckCheckedAmount() == 0){
                cbutton.style.display = "none";
            }
        }
        CheckItemsLeft();
    }
}
function RemoveChecked() {
    /* let button = document.querySelector('.clear-complete'); */

    cbutton.onclick = event => {
        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');

        for (let li of ListofLi) {
            let checkbox = li.querySelector('.toggle-item');
            if (checkbox.checked == true) {
                li.remove();
            }
        }
        if(CheckAmountOfItems() == 0){
            footer.style.display = "none";
        }
    }
}
function ShowAll() {
    let button = document.querySelector('.all');
    button.onclick = event => {
        state = "All";
        let ul = document.querySelector('#todo-list');
        let ListofLi = ul.querySelectorAll('li');
        for (let li of ListofLi) {
            /* let checkbox = li.querySelector('.toggle-item'); */
            li.style.display = "";
        }
    }
}
function HydeCompleted() {
    let button = document.querySelector('.active');
    button.onclick = event => {
        state = "Active";
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
        state = "Complete";
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
function CheckItemsLeft() {
    let amountOfItems = 0;
    let itemsLeft = document.querySelector('.items-left');
    let ul = document.querySelector('#todo-list');
    let listOfLi = ul.querySelectorAll('li');

    for (let li of listOfLi) {
        let checkbox = li.querySelector('.toggle-item');
        if (checkbox.checked == false) {
            amountOfItems++;
        }
    }
    itemsLeft.innerHTML = amountOfItems + " item" + ((amountOfItems == 1) ? '' : 's') + " left";
}
function CheckCheckedAmount() {
    let amountOfChecked = 0;
    let ul = document.querySelector('#todo-list');
    let listOfLi = ul.querySelectorAll('li');

    for(let li of listOfLi){
        let checkbox = li.querySelector('.toggle-item');
        if(checkbox.checked == true){
            amountOfChecked++;
        }
    }
    return amountOfChecked;
}
function CheckAmountOfItems(){
    let ul = document.querySelector('#todo-list');
    let listOfLi = ul.querySelectorAll('li');
    return listOfLi.length;
}


