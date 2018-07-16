const toDoList = [];
let toDo;
const enterInput = () => {
    if(event.keyCode===13){
        let getClass = document.querySelectorAll(".input_todo")[0];
        if(getClass.value.length==0){
            return document.createElement(alert("Input to do"));
        }
        else
        toDo = getClass.value;
        toDoList.push(toDo);
        console.log(toDoList);
        clearValue();
        createToDoDiv();
        createToDo();
        clearCheckBox();
    }
};
const clearValue = () => {
    let getClass = document.querySelectorAll(".input_todo")[0];
    getClass.value = ""
}
const createToDoDiv = () => {
    let getClass = document.querySelectorAll(".todo_box")[0];
    let createDiv = document.createElement("div");
    let newDiv = getClass.appendChild(createDiv);
    newDiv.className = "todo_div";
};
const createToDo = () => {
    let getClass = document.querySelectorAll(".todo_div")[toDoList.length - 1];
    let createDiv = document.createElement("div");
    let newDiv = getClass.appendChild(createDiv);
    newDiv.className = "todo";
    newDiv.innerHTML = toDo;

}

const doneCheckBox = () => {
    for(let i = 0; i < toDoList.length; i++){
        let getClass = document.querySelectorAll(".todo_div")[i];
        let createIcon = document.createElement("i");
        let newIcon = getClass.appendChild(createIcon);
        newIcon.className = "far fa-square";
        newIcon.onclick = done;
    }
};

const done = () => {
    let els = Array.prototype.slice.call( document.getElementsByClassName("far fa-square"), 0);
    let index = els.indexOf(event.currentTarget);
    document.querySelectorAll(".todo")[index].style.fontStyle = "italic";
    document.querySelectorAll(".todo")[index].style.color = "#E9ECEF";
    document.querySelectorAll(".todo")[index].style.setProperty("text-decoration", "line-through");
    clearCheckBox();
};

const clearCheckBox = () => {
    let parentClass = document.querySelectorAll(".todo_div")[0];
    let child = parentClass.childNodes;
    if(child.length == 2){
        for(let i = 0; i < toDoList.length; i++){
            let selectAll = document.querySelectorAll(".todo_div")[i];
            selectAll.removeChild(selectAll.lastChild);
        }
    }
    else return;
};