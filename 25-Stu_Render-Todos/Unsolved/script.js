var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// set the text content of the todoList to an empty string
renderTodos();

// todoCountSpan should show the total count of todos on the page
// todoCountSpan.textContent - todos.length;

// Inside of your render function need a for loop 
function renderTodos() {
    // Clear todo list element and update todoCountSpan
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]; //loop over the `todos` array creating an `li` element for each index of the array

        var li = document.createElement("li"); //set the content of the created `li` element to the value of the current array index
        li.textContent = todo;
        todoList.appendChild(li); //the new `li` should be appended to the `ul` provided
        
    }    
}