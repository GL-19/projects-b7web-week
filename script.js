//Initial Data
const gameBoard = {
    a1: null, a2: null, a3: null,
    b1: null, b2: null, b3: null,
    c1: null, c2: null, c3: null
}

let playerTurn = '';
let message = '';
let playing = false;

reset();

//Events
document.querySelector('.reset').addEventListener('click', reset);


//Functions
function changePlayerTurn() {
    if(playerTurn === 'X') {
        playerTurn = 'O';
    } else if (playerTurn === 'O') {
        playerTurn = 'X';
    }
}

function reset() {
    playerTurn = Math.random() < 0.5 ? 'X' : 'O';
    message = '';
    playing = true;
    for(let square in gameBoard) {
        gameBoard[square] = '';
    }
    
    renderGameBoard();
   // renderInfo();
}

function renderGameBoard() {
    for(let square in gameBoard) {
        document.getElementById(square).innerHTML = '';
    }
}

function writeOnSquare(element) {
    element.innerHTML = playerTurn;
    changePlayerTurn();
}