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
function reset() {
    playerTurn = Math.random() < 0.5 ? 'X' : 'O';
    message = '';
    playing = true;
    for(let square in gameBoard) {
        gameBoard[square] = '';
    }
    
    renderGameBoard();
    renderInfo();
}

function renderGameBoard() {
    for(let square in gameBoard) {
        document.getElementById(square).innerHTML = gameBoard[square];
    }
}

function renderInfo() {
    document.querySelector(".vez").innerHTML = playerTurn;
    document.querySelector(".resultado").innerHTML = message;
}

function changePlayerTurn() {
    if(playerTurn === 'X' && playing) {
        playerTurn = 'O';
    } else if (playerTurn === 'O' && playing) {
        playerTurn = 'X';
    }
}

function writeOnSquare(element) {
    squarePosition = element.id;
    if(!gameBoard[squarePosition] && playing) {
        gameBoard[squarePosition] = playerTurn;
        renderGameBoard();
        checkWinningCondition('X');
        checkWinningCondition('O');
        changePlayerTurn();
        renderInfo();
    }
}

function checkWinningCondition(player) {
    if(gameBoard.a1 === player && gameBoard.a2 === player && gameBoard.a3 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.b1 === player && gameBoard.b2 === player && gameBoard.b3 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.c1 === player && gameBoard.c2 === player && gameBoard.c3 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.a1 === player && gameBoard.b1 === player && gameBoard.c1 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.a2 === player && gameBoard.b2 ===player && gameBoard.c2 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.a3 === player && gameBoard.b3 === player && gameBoard.c3 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.a1 === player && gameBoard.b2 === player && gameBoard.c3 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
    if(gameBoard.a3 === player && gameBoard.b2 === player && gameBoard.c1 === player) {
        playing = false;
        message = `Vitória de ${player}`;
    }
}
