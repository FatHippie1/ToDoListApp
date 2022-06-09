const userInput = document.querySelector('.inputTodo');
const list = document.querySelector('.todoList')

//create todo list
const makeTodo = todo => {
    const html =
        `<li class=" list">
         <input class="col-1" type="radio">
         <span class="col-10"> ${todo}</span>
         <i class="col-1 fa-regular fa-trash-can"></i>
         </li >
         `
        /*`<table>
            <tr>
                <th>Completed</th>
                <th>To Do</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>${todo}</td>
                <td><i class="fa-regular fa-trash-can"></i></td>
            </tr>
            </table>
          `*/

        ;
    list.innerHTML += html;
};

//create todo from user input
userInput.addEventListener('submit', e => {
    e.preventDefault();
    const todo = userInput.add.value.trim();
    userInput.reset();

    makeTodo(todo);
});

//delete todo from list
list.addEventListener('click', e => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.remove();
    }
});
