const toDoList = [];
let toDo;

const bigBoxCreate = () => {
    let getId = document.getElementById('todo_list');
    let giveElement = document.createElement('div');
    let divIn = getId.appendChild(giveElement);
    return divIn;
};

const smallBoxCreate = () => {
    let getClass = document.getElementById('todo');
    let giveElement = document.createElement('div');
    let divIn = getClass.appendChild(giveElement);
    return divIn;
};

const createBlock = () => {
    let toDoDiv = bigBoxCreate();
    toDoDiv.id = "todo";
    toDoDiv.innerHTML = toDoList[toDoList.length - 1];
    let fixDiv = smallBoxCreate();
    fixDiv.id = "rewrite";
    let deleteDiv = smallBoxCreate();
    deleteDiv.id = "delete";

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


