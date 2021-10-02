const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0"); //Number을 String으로 바꾼뒤, 두자리가 안되면 앞을 "0"으로 채움.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);