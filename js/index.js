const toDoList = [];
let toDo;

const enterInput = () => {
    if(event.keyCode===13){
        let getClass = document.getElementsByClassName("input_todo")[0];
        if(getClass.value.length==0){
            return document.createElement(alert("Input to do"));
        }
        else
        toDo = getClass.value;
        toDoList.push(toDo);
        console.log(toDoList);
        clearValue();
        createToDo();
    }
};
const clearValue = () => {
    let getClass = document.getElementsByClassName("input_todo")[0];
    getClass.value = ""
}
const createToDo = () => {
    let getClass = document.getElementsByClassName("todo_box")[0];
    let createDiv = document.createElement("div")
    let newDiv = getClass.appendChild(createDiv);
    newDiv.innerHTML = toDoList[toDoList.length - 1];
    newDiv.className = "todo"
    createInnerBox();
}
const createInnerBox = () => {
    let divType = ["doOrNot", "editIcon", "deleteIcon"];
    for (let i = 0; i < 3; i++){
        let getClass = document.getElementsByClassName("todo")[toDoList.length - 1];
        let createDiv = document.createElement("div");
        let newDiv = getClass.appendChild(createDiv);
        newDiv.className = divType[i];
    }
}