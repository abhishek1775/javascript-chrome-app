const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) { //event object를 담은 정보를 인수로 받음.
    event.preventDefault(); //event의 기본행동이 발생되지 않도록 함. (submit으로 인한 새로고침 안되게끔)
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit); //JS는 event가 발생하면 function에 event object를 argument로 줌.