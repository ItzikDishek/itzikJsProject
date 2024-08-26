let blockSize = 25;
let total_row = 20; // total row number
let total_col = 20; // total column number
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0; // speed of snake in x coordinate.
let speedY = 0; // speed of Snake in Y coordinate.
let snakeBody = [];
let foodX;
let foodY;
let gameOver = false;

// New variables for lives and disqualifications
let lives = 3;
let disqualifications = 0;

window.onload = function () {
    board = document.getElementById("screen");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection); // for movements

    // Set snake speed
    setInterval(update, 1500 / 10);
}

function update() {
    if (gameOver) {
        return;
    }

    // Background of the game
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, board.width, board.height);
    context.strokeStyle = "darkgreen";
    context.beginPath();
    context.strokeRect(0, 0, board.width, board.height);
    context.lineWidth = 5;

    // Set food color and position
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    // Body of snake will grow
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize; // updating Snake position in X coordinate.
    snakeY += speedY * blockSize; // updating Snake position in Y coordinate.
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX >= total_col * blockSize || snakeY < 0 || snakeY >= total_row * blockSize) {
        // Out of bound condition
        handleGameOver();
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            // Snake eats own body
            handleGameOver();
        }
    }
}

function handleGameOver() {
    disqualifications++;
    if (disqualifications >= 3) {
        alert("Game Over, Try Again!");
        resetGame();
    } else {
        alert("You have " + (3 - disqualifications) + " lives left.");
        resetSnake();
    }
}

function resetGame() {
    lives = 3;
    disqualifications = 0;
    resetSnake();
}

function resetSnake() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    placeFood();
    gameOver = false;
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    } else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * total_col) * blockSize;
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}