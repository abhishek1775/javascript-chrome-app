const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", onLoginBtnClick);