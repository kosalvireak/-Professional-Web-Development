function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function clearDefault(a) {
    if (a.defaultValue = a.value) { a.value = "" }
};

function remove() {
}
var id = this.getAttribute('id');
var todos = get_todos();
todos.splice(id, 1);
localStorage.setItem('todo', JSON.stringify(todos));
show();
return false;