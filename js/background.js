const images = ["0.JPG", "1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //element추가

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //HTML body에 추가  