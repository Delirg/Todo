const todoList = document.querySelector('.list-wrapper');
const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('.input__text');

todoForm.addEventListener('submit', formHandler)


function formHandler (event) {
    event.preventDefault();
    

    // получаем значение из input
    const taskText = todoInput.value;

    // создаем тег li с помощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;

    //добавляем элемент на страницу
    todoList.append(newTask);

    //создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    //добавляем событие по клику
    deleteBtn.addEventListener('click', deleteTask);

    // очищаем поле ввода

    todoInput.value = '';

    //фокус ввода
    todoInput.focus();
}

function deleteTask () {
    this.closest('li').remove();
}