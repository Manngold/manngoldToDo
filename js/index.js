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

const checkBox = () => {
    for(let i = 0; i < toDoList.length; i++){
        let getClass = document.querySelectorAll(".todo_div")[i];
        let createIcon = document.createElement("i");
        let newIcon = getClass.appendChild(createIcon);
        newIcon.className = "far fa-square";
        newIcon.onclick = done;   
    }
}

const done = () => {
    let els = Array.prototype.slice.call( document.getElementsByClassName("far fa-square"), 0);
    let index = els.indexOf(event.currentTarget);
    document.getElementsByClassName("todo")[index].style.fontStyle = "italic";
    document.getElementsByClassName("todo")[index].style.color = "#E9ECEF";
    document.getElementsByClassName("todo")[index].style.setProperty("text-decoration", "line-through");
};
// const doneEvent = () => {
//     document.addEventListener("DOMContentLoaded", () => {
//         document.querySelectorAll(".checkbox").onchange=done;
//     });
//     let done = (event) => {
//         if(!event.target){alert("Check Checkbox")}
//         else{
//             document.
//         }
//     }
// }

// const clearCheckBox = () => {
//     for (let i = 0; i < toDoList.length; i++){
//         let getClass = document.getElementsByClassName("checkbox")[i];
//         getClass.remove();
//     }
// }