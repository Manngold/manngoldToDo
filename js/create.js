const addToDo = () => {
    let toDo = document.getElementById('input_todo').value;
    if (toDo.length == 0){
        console.log("insert value");
    }
    else {
        console.log(toDo);
    }
};