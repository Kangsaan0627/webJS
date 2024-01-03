const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USER_NAME_KEY = localStorage.getItem("username");
const HIDDEN_CLASSNAME = "hidden";

function onLogInSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const name = loginInput.value;

    // username이 저장되어 있지 않아 새로 저장해야 하는 경우.
    localStorage.setItem("username", name);
    greeting.innerText = `Hello ${USER_NAME_KEY}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

if(localStorage.getItem("username") !== null){
    //  이미 username이 저장되어 있는 경우.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${USER_NAME_KEY}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

loginForm.addEventListener("submit", onLogInSubmit);
