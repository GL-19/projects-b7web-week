let currentColor = 'black';


document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', changeCurrentColor);
    console.log(element);
});

function changeCurrentColor(event) {
    document.querySelector('.color.active').className = 'color';
    event.target.className = 'color active';
    currentColor = event.target.getAttribute('data-color');
    console.log(currentColor,event.target);
}

