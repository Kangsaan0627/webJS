const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// toDoList.style.fontSize = '25px';
let TODOS_KEY = [];
const savedToDos = localStorage.getItem("toDos"); // toDo-list 저장소

function removeToDo(event){ // toDo-list 제거 기능
    const removeLi = event.target.parentElement;
    const removedText = removeLi.querySelector("span").innerText; // 해당 li의 span에서 텍스트 가져오기
    removeLi.remove();
    
    // localStorage에서 해당 텍스트를 가진 항목 제거
    TODOS_KEY = TODOS_KEY.filter(item => item !== removedText);
    localStorage.setItem("toDos", JSON.stringify(TODOS_KEY));
}

function paintToDo(newToDo){ // toDo-list에 내용, 제거 버튼 집어넣기
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "제거";
    span.innerText = newToDo

    button.addEventListener("click",removeToDo );

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){ // toDo-list에 입력
    event.preventDefault();  
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    TODOS_KEY.push(newToDo);
    localStorage.setItem("toDos", JSON.stringify(TODOS_KEY));

    paintToDo(newToDo);

}

function getBack(item){ // 기존에 toDo-list 복원
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "제거";
    span.innerText = item;

    button.addEventListener("click",removeToDo );

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    TODOS_KEY.push(item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if( savedToDos !== null){ // 기존의 toDo-list 존재 유무
    const parsedToDos = JSON.parse(savedToDos);
    
    if (Array.isArray(parsedToDos)) {
    parsedToDos.forEach((item) => getBack(item));
    }
}