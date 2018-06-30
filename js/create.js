const addToDo = () => {
    let toDo = document.getElementById('input_todo').value;
    if (toDo.value == null){
        toDo.value = null;
        console.log(toDo);
    }
    else {
        console.log(toDo.value);
    }
}

module.exports = {
    addToDo
};