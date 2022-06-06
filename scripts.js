const userInput = document.querySelector('.inputTodo');
const list = document.querySelector('.todoList')
/*const button = userInput.addEventListener('submit', e => {
    e.preventDefault();
    const todo = userInput.add.value;
    console.log(todo);

});//document.querySelector('.todoButton');//
*/
const makeTodo = todo => {
    const html =
        `<li class="list">
        <span> ${todo}</span>
        <i class="fa-regular fa-trash-can"></i>
        </li >
        `;
    list.innerHTML += html;
};


userInput.addEventListener('submit', e => {
    e.preventDefault();
    const todo = userInput.add.value.trim();
    //console.log(todo);
    userInput.reset();

    makeTodo(todo);
});

//delete
list.addEventListener('click', e => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.remove();
    }
});
/*button.addEventListener('click', (e) => {
    e.preventDefault();
    //const todo = userInput.todoInput.value;
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
