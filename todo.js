const inputBox = document.getElementById('input-box');
const taskList = document.getElementById('task-List');

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveList();
}
taskList.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveList();
    }
    else if(ev.target.tagName === 'SPAN') {
        let div = ev.target.parentNode;
        div.remove();
        saveList();
    }
}, false);

function saveList() {
    localStorage.setItem('list', taskList.innerHTML);
}

function loadList() {
    taskList.innerHTML = localStorage.getItem('list');
}
loadList();


