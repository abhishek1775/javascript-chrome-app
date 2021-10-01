const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); //5초가 지날 때마다 sayHello()실행.