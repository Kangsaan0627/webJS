const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "제거";

    li.appendChild(span);
    span.innerText = newToDo
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);