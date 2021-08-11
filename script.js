document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});
document.querySelectorAll('.area').forEach((area) => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

function dragStart(event) {
    event.currentTarget.classList.add('dragging');
}

function dragEnd(event) {
    event.currentTarget.classList.remove('dragging');
}

function dragOver(event) {
    if(event.currentTarget.querySelector('.item') === null) {
        event.preventDefault();
        event.currentTarget.classList.add('hover');
    }
}

function dragLeave(event) {
    event.currentTarget.classList.remove('hover');
}

function drop(event) {
    event.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    console.log(dragItem, event.currentTarget);
    if(event.currentTarget.querySelector('.item') === null) {
        event.currentTarget.appendChild(dragItem);
    } else {
        console.log('esta preenchida');
    }
}