const userInput = document.getElementById('inputTodo');
//const button = document.querySelector('button');

userInput.addEventListener('submit', e => {
    e.preventDefault();
    const todo = userInput.inputTodo.value;
    console.log(todo);

});


/*button.addEventListener('click', (e) => {
    e.preventDefault();
    const todo = userInput.todoInput.value;
    console.log(todo);
});
*/

//userInput.value = 'ninjas are not awesome.'
//console.log(userInput);
//console.log(button);
//function inputToDo()














/*function displayTodo() {
    const inputElement = document.getElementById("todo-input");
    const text = inputElement.value;
    const todoList = document.getElementById("todo-list");
    const todo = createTodo(text);

    todoList.append(todo);
    inputElement.value = "";

}

function createTodo(text) {
    const todoListItem = document.createElement("li");
    const todoListItemDelete = document.createElement("button");
    todoListItemDelete.className = 'btn btn-success btn-sm float-right delete col-2 '
    todoListItemDelete.appendChild(document.createTextNode('Delete'))

    //todoListItemDelete.setAttribute("id", "deleteButton");
    //todoListItemDelete.innerText = "Delete";



    todoListItem.append(text, todoListItemDelete);

    return todoListItem;
}

document.getElementById("add-todo")
    .addEventListener("click", displayTodo)
    */
