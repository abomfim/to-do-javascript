var ulElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tasks = JSON.parse(localStorage.getItem('taskList')) || [];

function render() {
    ulElement.innerHTML = '';
    for(task of tasks) {
        var taskElement = document.createElement('li');
        var tastText = document.createTextNode(task);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'remove('+tasks.indexOf(task)+')');
        
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);
        
        taskElement.appendChild(tastText);
        taskElement.appendChild(linkElement);
        ulElement.appendChild(taskElement);
    }
}

render();

function add(){
    tasks.push(inputElement.value);
    inputElement.value = '';
    render();
    saveToStorage();
}

buttonElement.onclick = add;

function remove(taskPosition) {
    tasks.splice(taskPosition, 1);
    render();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}