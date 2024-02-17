var todoList = document.getElementById('todoList');
var inputTodo = document.getElementById("inputTodo");
var addTodoBtn = document.getElementById("addTodo");
var updateTodoBtn = document.getElementById("updateTodo");

var currentEditTodo = null;

function addTodo() {
    var todoText = inputTodo.value.trim();
    
    if (todoText === "") {
        alert("Please enter a todo");
        return;
    }

    var todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'todoItem');
    todoList.appendChild(todoItem);

    var textElement = document.createElement('p');
    textElement.innerHTML = todoText;
    todoItem.appendChild(textElement);

    var deleteButton = createButton("Delete", 'deleteBtn', deleteTodo);
    var editButton = createButton("Edit", 'editBtn', editTodo);

    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);

    inputTodo.value = "";
}

function updateTodo() {
    if (currentEditTodo) {
        var updatedText = inputTodo.value.trim();

        if (updatedText === "") {
            alert("Please enter a todo");
            return;
        }

        currentEditTodo.querySelector('p').innerHTML = updatedText;
        currentEditTodo = null;
        inputTodo.value = "";
    } else {
        alert("No todo selected for update");
    }
}

function deleteTodo() {
    var todoItem = this.parentElement;
    todoList.removeChild(todoItem);
}

function editTodo() {
    var todoItem = this.parentElement;
    var todoText = todoItem.querySelector('p').innerHTML;

    inputTodo.value = todoText;
    currentEditTodo = todoItem;
}

function createButton(text, className, clickHandler) {
    var button = document.createElement("button");
    button.setAttribute('class', className);
    button.innerHTML = text;
    button.addEventListener('click', clickHandler);
    return button;
}