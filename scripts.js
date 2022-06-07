const userInput = document.querySelector('.inputTodo');
const list = document.querySelector('.todoList')

//create todo list
const makeTodo = todo => {
    const html =
        `<li class="list">
        <input type="checkbox">
        <span> ${todo}</span>
        <i class="fa-regular fa-trash-can"></i>
        </li >
        `;
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
