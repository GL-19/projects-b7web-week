//Initial parameters
const gameBoard = {
    a1: null, a2: null, a3: null,
    b1: null, b2: null, b3: null,
    c1: null, c2: null, c3: null
};

let isPlaying = false;
let playerTurn = '';
let resultMessage = '';
resetGame();

//Game Events
document.querySelector('.reset').addEventListener('click', resetGame);
document.querySelectorAll('.item').forEach((element) => {
    element.addEventListener('click', writeInSquare);
});

//Functions
function resetGame() {
    playerTurn = Math.random() < 0.5 ? 'X' : 'O';
    resultMessage = '';
    isPlaying = true;
    for(let square in gameBoard) {
        gameBoard[square] = null;
    }
    renderGameBoard();
    renderGameInfo();
}

function writeInSquare(event) {
    square = event.target.id;
    if(!gameBoard[square] && isPlaying) {
        gameBoard[square] = playerTurn;
        renderGameBoard();
        checkWinningCondition('X');
        checkWinningCondition('O');
        checkDrawCodition();
        changePlayerTurn();
        renderGameInfo();
    }
}

function renderGameBoard() {
    for(let square in gameBoard) {
        document.getElementById(square).innerHTML = gameBoard[square];
    }
}

function renderGameInfo() {
    document.querySelector(".vez").innerHTML = playerTurn;
    document.querySelector(".resultado").innerHTML = resultMessage;
}

function changePlayerTurn() {
    if(playerTurn === 'X' && isPlaying) {
        playerTurn = 'O';
    } else if (playerTurn === 'O' && isPlaying) {
        playerTurn = 'X';
    }
}

function checkWinningCondition(playerSymbol) {
    if(gameBoard.a1 === playerSymbol && gameBoard.a2 === playerSymbol && gameBoard.a3 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.b1 === playerSymbol && gameBoard.b2 === playerSymbol && gameBoard.b3 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.c1 === playerSymbol && gameBoard.c2 === playerSymbol && gameBoard.c3 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.a1 === playerSymbol && gameBoard.b1 === playerSymbol && gameBoard.c1 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.a2 === playerSymbol && gameBoard.b2 ===playerSymbol && gameBoard.c2 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.a3 === playerSymbol && gameBoard.b3 === playerSymbol && gameBoard.c3 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.a1 === playerSymbol && gameBoard.b2 === playerSymbol && gameBoard.c3 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
    if(gameBoard.a3 === playerSymbol && gameBoard.b2 === playerSymbol && gameBoard.c1 === playerSymbol) {
        isPlaying = false;
        resultMessage = `Vitória de ${playerSymbol}`;
    }
}

function checkDrawCodition() {
    let thereAreNullSquares = false
    for(let square in gameBoard) {
        if(!gameBoard[square]) {
            thereAreNullSquares = true;
        } 
    }
    if(!thereAreNullSquares && isPlaying) {
        isPlaying = false;
        resultMessage = 'Empate';
    }
}