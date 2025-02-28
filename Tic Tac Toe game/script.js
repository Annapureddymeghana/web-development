

const board = document.getElementById("board");
const status = document.getElementById("status");
let cells = Array(9).fill(null);
let currentPlayer = "X";
let gameActive = true;

function createBoard() {
    board.innerHTML = "";
    cells.forEach((cell, index) => {
        const button = document.createElement("button");
        button.classList.add("cell");
        button.dataset.index = index;
        button.innerText = cell || "";
        button.onclick = handleClick;
        board.appendChild(button);
    });
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (cells[index] || !gameActive) return;
    
    cells[index] = currentPlayer;
    event.target.innerText = currentPlayer;
    if (checkWinner()) {
        status.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }
    if (!cells.includes(null)) {
        status.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
    });
}

function resetGame() {
    cells = Array(9).fill(null);
    currentPlayer = "X";
    gameActive = true;
    status.innerText = "Player X's Turn";
    createBoard();
}

createBoard();
