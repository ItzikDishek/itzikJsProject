const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById('status');
const resetButton = document.getElementById('reset');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X'; // X starts first
let gameActive = true;
let playerScore = 0;
let computerScore = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'D'; // D for tie
}

function updateStatus(message) {
    statusDiv.textContent = message;
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');
    if (board[cellIndex] || !gameActive) return;

    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        if (winner === 'D') {
            updateStatus("It's a draw!");
        } else {
            updateStatus(`${winner} wins this game!`);
            if (winner === 'X') {
                playerScore++;
            } else {
                computerScore++;
            }
            updateScore();
        }
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer === 'O') {
        computerMove();
    }
}

function computerMove() {
    const availableCells = board.map((value, index) => value === '' ? index : null).filter(index => index !== null);
    if (availableCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    board[availableCells[randomIndex]] = 'O';
    cells[availableCells[randomIndex]].textContent = 'O';

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        if (winner === 'D') {
            updateStatus("It's a tie!");
        } else {
            updateStatus(`${winner} wins this game!`);
            if (winner === 'X') {
                playerScore++;
            } else {
                computerScore++;
            }
            updateScore();
        }
        return;
    }

    currentPlayer = 'X';
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    updateStatus('');
}

function updateScore() {
    statusDiv.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
    if (playerScore === 3) {
        updateStatus("Player wins the series! Score is reset.");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        updateStatus("Computer wins the series! Score is reset.");
        playerScore = 0;
        computerScore = 0;
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

updateScore();