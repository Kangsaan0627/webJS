const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const bgImg = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);