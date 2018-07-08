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
    let giveElement = document.createElement('div');
    let divIn = getClass.appendChild(giveElement);
    return divIn;
};
const addEdit = () => {
    let getClass = document.getElementsByClassName('edit')[toDoList.length - 1];
    let giveElement = document.createElement('i');
    let editIcon = getClass.appendChild(giveElement);
    editIcon.className = 'fas fa-edit';
    return editIcon;
};

const addDelete = () => {
    let getClass = document.getElementsByClassName('delete')[toDoList.length - 1];
    let giveElement = document.createElement('i');
    let deleteIcon = getClass.appendChild(giveElement);
    deleteIcon.className = "far fa-trash-alt";
    return deleteIcon;
};

const createBlock = () => {
    let toDoDiv = bigBoxCreate();
    toDoDiv.className = "todo";
    toDoDiv.innerHTML = toDoList[toDoList.length - 1];
    let editDiv = smallBoxCreate();
    editDiv.className = "edit";
    addEdit();
    let deleteDiv = smallBoxCreate();
    deleteDiv.className = "delete";
    addDelete();
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
    let getClass = document.getElementsByClassName('todo')[toDoList.length - 1];
    let inputBox = getClass.createElement("input");
    inputBox.ClassName = 'rewrite';
    inputBox.addEventListener('keyup', (event) => {
        if (event.keyCode === 13){
            toDoList[toDoList.length - 1] = document.getElementsByClassName('rewrite')[toDoList.length - 1] 
        };
    });
};

const deleteEvent = () => {
    console.log("delete complete");
};
