//Initial data
let currentColor = 'black';

let canvas = document.getElementById('tela');
let context = canvas.getContext('2d');

let isDrawing = false;

let coordinateX = 0;
let coordinateY = 0;

//Events
document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', setCurrentColor);
});
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', stopDrawing);
document.querySelector('.clear').addEventListener('click', resetCanvas);

//Functions
function setCurrentColor(event) {
    document.querySelector('.color.active').className = 'color';
    event.target.className = 'color active';
    currentColor = event.target.getAttribute('data-color');
}

function startDrawing(event) {
    isDrawing = true;
    coordinateX = event.pageX - canvas.offsetLeft;
    coordinateY = event.pageY - canvas.offsetTop;
}

function drawing(event) {
    if(isDrawing) {
        coordinateX = event.pageX - canvas.offsetLeft;
        coordinateY = event.pageY - canvas.offsetTop;

        context.fillStyle = currentColor;
        context.fillRect(coordinateX, coordinateY, 10, 10);
        /*
        context.beginPath();
        context.lineWidth = 5;
        context.lineJoin = 'round';
        context.moveTo(coordinateX, coordinateX);
        */
    }
}

function stopDrawing() {
    isDrawing = false;
}

function resetCanvas(event) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 800, 400);
}