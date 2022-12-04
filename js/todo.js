const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function sayHello(item) {
    console.log("this is the turn of ", item);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

const arr = [1234, 5454, 223, 122, 45, 6775, 334];

function sexyFilter(item) {return item < 1000}
arr.filter(sexyFilter);