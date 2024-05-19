function todoList() {
    // console.log("trryyu");
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => viewTodoList(data));
}

function viewTodoList(todos){
    // console.log(todos)
    const divContainer = document.getElementById('div-container');
    for(const todo of todos) {
        // console.log(todo);
        const createElement = document.createElement('div');
        createElement.classList.add('div-element')
        createElement.innerHTML = `
            <h4>ID: ${todo.id}</h4>
            <h5>Title: ${todo.title}</h5>
            <p>Status: ${todo.completed === true? "Yes - complete": "No - incomplete"}</p>
        `
        divContainer.appendChild(createElement);
    }
}
todoList();