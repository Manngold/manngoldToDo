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
};

const checkEvent = () => {
    for (let i = 0; i < toDoList.length; i++){
        let getClass = document.getElementsByClassName("todo")[i];
        let checkBox = document.createElement("input");
        checkBox.type = 'checkbox';
        checkBox.className = "checkbox";
        getClass.appendChild(checkBox);
        
    }  
}

const clear = () => {
    for (let i = 0; i < toDoList.length; i++){
        let getClass = document.getElementsByClassName("checkbox")[i];
        getClass.remove();
    }
}