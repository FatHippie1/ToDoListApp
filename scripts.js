document.getElementById("add-todo")
    .addEventListener("click", displayTodo)

function displayTodo(event) {
    const inputElement = document.getElementById("todo-input");
    const text = inputElement.value;
    const todoList = document.getElementById("todo-list");
    const todo = createTodo(text);

    todoList.append(todo);
    inputElement.value = "";

}

function createTodo(text) {
    const todoListItem = document.createElement("li");
    todoListItem.append(text);
    return todoListItem;
}

/*let toDoList = [];
//let jsonArr = JSON.stringify(toDoList);

function getValue() {

    toDoList.push(document.getElementById("inputId").value);
    console.log(toDoList);
}
getValue();
*/