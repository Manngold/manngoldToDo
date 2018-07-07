const toDoList = [];
let toDo;

const bigBoxCreate = () => {
    let getClass = document.getElementsByClassName('todo_list')[0];
    let giveElement = document.createElement('div');
    let divIn = getClass.appendChild(giveElement);
    return divIn;
};

const smallBoxCreate = () => {
    let getClass = document.getElementsByClassName('todo')[toDoList.length - 1];
    let giveElement = document.createElement('i');
    let divIn = getClass.appendChild(giveElement);
    return divIn;
};

const createBlock = () => {
    let toDoDiv = bigBoxCreate();
    toDoDiv.className = "todo";
    toDoDiv.innerHTML = toDoList[toDoList.length - 1];
    let fixDiv = smallBoxCreate();
    fixDiv.className = "fas fa-edit";
    let deleteDiv = smallBoxCreate();
    deleteDiv.className = "far fa-trash-alt";
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

const editEvent = () => {
    console.log('edit complete');
};

const deleteEvent = () => {
    console.log("delete complete");
};

const editClick = () => {
    let getClass = document.getElementsByClassName('fas fa-edit')[toDoList.length - 1];
    getClass.addEventListener('click', editEvent());
};

const deleteClick = () => {
    let getClass = document.getElementsByClassName('fas fa-trash-alt')[toDoList.length - 1];
    getClass.addEventListener('click', deleteEvent());
};