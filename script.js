var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);
console.log(canvas.height);
var ctx = canvas.getContext("2d");
let squareX;
let squareY;

const squareWidth = 300;
const squareHeight = 300;

random = (max) => {
    return Math.floor(Math.random() * max);
}

generateSquare = (mouseX, mouseY) => {
    ctx.fillStyle = 'green';
    squareX = random(700);
    squareY = random(500);
    if((mouseX >= squareX && mouseY <= squareX + squareWidth) || (mouseY >= squareY && mouseY <= squareY + squareHeight))
        generateSquare(mouseX, mouseY);
    else
        ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
}

mouseMove = (e) => {
    if((e.x >= squareX && e.x <= squareX + squareWidth) || (e.y >= squareY && e.y <= squareY + squareHeight)) {
        console.log("e.x = " + e.x + "; e.y = " + e.y + "; squareX = " + squareX + "; squareY = " + squareY);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        generateSquare();
    }
}

generateSquare();


document.addEventListener("mousemove", mouseMove);