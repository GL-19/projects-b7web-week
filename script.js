const areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach((area) => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

//items
function dragStart(event) {
    event.currentTarget.classList.add('dragging');
}

function dragEnd(event) {
    event.currentTarget.classList.remove('dragging');
}

//area
function dragOver(event) {
    if (event.currentTarget.querySelector('.item') === null) {
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

    if (event.currentTarget.querySelector('.item') === null) {
        event.currentTarget.appendChild(dragItem);
        updateAreas();
    }
    checkCombination();
}

//neutralArea
function dragOverNeutral(event) {
    event.preventDefault();
    event.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(event) {
    event.currentTarget.classList.remove('hover');
}

function dropNeutral(event) {
    event.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(dragItem);
    updateAreas();
    checkCombination();
}

//Lógica

function updateAreas() {
    document.querySelectorAll('.area').forEach((area) => {
        let item = area.querySelector('.item');
        let areaName = area.getAttribute('data-name');
        if(item !== null) {
            areas[areaName] = item.innerHTML;
        } else {
            areas[areaName] = null;
        } 
    });
}

function checkCombination() {
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').className = 'areas correct';
    } else {
        document.querySelector('.areas').className = 'areas';
    }
}