const toDoList = [];
let toDo;
const addToDo = () => {
    toDo = document.getElementById('input_todo').value;
    if (toDo.length == 0){
        return document.createElement(alert("insert value!"));
    }
    else {
        clickAdd();
    }
};

const addList = () => {
    toDoList.push(toDo);
    console.log(toDoList)
};

const clickAdd = () => {
    document.getElementById('input_todo').addEventListener("click", addList());
};


