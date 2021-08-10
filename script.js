//Initial data
let currentColor = 'black';

let canvas = document.getElementById('tela');
let context = canvas.getContext('2d');

let isDrawing = false;

let initialCoordinateX = 0;
let initialCoordinateY = 0;

//Events
document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', setCurrentColor);
});
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', stopDrawing);
document.querySelector('.clear').addEventListener('click', clearCanvas);

//Functions
function setCurrentColor(event) {
    document.querySelector('.color.active').className = 'color';
    event.target.className = 'color active';
    currentColor = event.target.getAttribute('data-color');
}

function startDrawing(event) {
    isDrawing = true;
    initialCoordinateX = event.pageX - canvas.offsetLeft;
    initialCoordinateY = event.pageY - canvas.offsetTop;
}

function drawing(event) {
    if (isDrawing) {
        let finalCoordinateX = event.pageX - canvas.offsetLeft;
        let finalCoordinateY = event.pageY - canvas.offsetTop;

        context.beginPath();
        context.lineWidth = 5;
        context.lineJoin = 'round';
        context.moveTo(initialCoordinateX, initialCoordinateY);
        context.lineTo(finalCoordinateX, finalCoordinateY);
        context.closePath();
        context.strokeStyle = currentColor;
        context.stroke();

        initialCoordinateX = finalCoordinateX;
        initialCoordinateY = finalCoordinateY;
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 800, 400);
}

