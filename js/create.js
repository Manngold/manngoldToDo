const toDoList = [];
let toDo;

const createBlock = () => {
    let getId = document.getElementById('todo_list');
    let giveElement = document.createElement('div');
    let createBlock = getId.appendChild(giveElement);
    createBlock.innerHTML = toDoList[toDoList.length - 1];
};

const addList = () => {
    toDoList.push(toDo);
    console.log(toDoList);
    createBlock();
};

const clickAdd = () => {
    document.getElementById('input_todo').addEventListener("click", addList());
};
const addToDo = () => {
    toDo = document.getElementById('input_todo').value;
    if (toDo.length == 0){
        return document.createElement(alert("insert value!"));
    }
    else {
        clickAdd();
    }
};


