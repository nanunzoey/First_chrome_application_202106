const images = [
    "0.jpg",
    "1.jpeg",
    "2.jpg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.id = 'img-background';
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);