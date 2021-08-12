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
})
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
    let areaIdentifier = event.currentTarget.getAttribute('data-name');

    if (event.currentTarget.querySelector('.item') === null) {
        event.currentTarget.appendChild(dragItem);

        areas[areaIdentifier] = dragItem.innerHTML;
        console.log(areas);
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

    for(let identifier in areas) {
        if (areas[identifier] === dragItem.innerHTML) {
            areas[identifier] = null;
        }
    }
    checkCombination();
}

function checkCombination() {
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').className = 'areas correct';
    } else {
        document.querySelector('.areas').className = 'areas';
    }
}
