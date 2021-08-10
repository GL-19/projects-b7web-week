let currentColorDiv = document.querySelector('.color.active');
let currentColor = currentColorDiv.getAttribute('data-color');
console.log(currentColor, currentColorDiv);

document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', changeCurrentColor);
    console.log(element);
});

function changeCurrentColor(event) {
    currentColorDiv.className = 'color';
    currentColorDiv = event.target;
    currentColorDiv.className = 'color active';
    currentColor = currentColorDiv.getAttribute('data-color');
    console.log(currentColor, currentColorDiv);
}

