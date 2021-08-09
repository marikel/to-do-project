//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoOption = document.querySelector(".filter-todo");

//functions
const addtodo = function (event) {
  event.preventDefault();
  if (todoInput.value !== "") {
    //add a div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //add Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add complete btn
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "<i class ='fas fa-check' ></i>";
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    //trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = "<i class ='fas fa-trash' ></i>";
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
};

const deleteCheck = function (event) {
  console.log(event.target);
  const item = event.target;
  //delete todo
  if (item.classList.contains("trash-btn")) {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;

    todo.classList.toggle("completed");
  }
};

const filterTodo = function (e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
};

const saveLocalTodos = function (todo) {};

//Event Listeners

todoBtn.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);
todoOption.addEventListener("click", filterTodo);
