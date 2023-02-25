const board = Array.from({length: 15}, () => new Array(15).fill(false));

const cell = 50;
const alive = '#7678d7';
const dead = '#76D7C4';

let speed = document.querySelector("#volume");
let canvas = document.querySelector(".canvas");
let startBtn = document.querySelector("#start");

speed.addEventListener("input", () => {
    console.log("speed = " + speed.value);
});

startBtn.addEventListener("click", () => {
    repeatAction(2);
});

canvas.addEventListener("click", (event) => {
    const x = Math.floor(event.offsetX / cell);
    const y = Math.floor(event.offsetY / cell);
    if (board[y][x]) {
        drawCell(x, y, canvas.getContext("2d"), dead);
        board[y][x] = false;
    } else {
        drawCell(x, y, canvas.getContext("2d"), alive);
        board[y][x] = true;
    }
});

function drawGrid(canvas, cell) {
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    for (let y = 0; y < height / cell; y += 1) {
        for (let x = 0; x < width / cell; x += 1) {
            if (board[y][x]) {
                context.fillStyle = alive;
            } else {
                context.fillStyle = dead;
            }
            context.fillRect(x * cell, y * cell, cell - 2, cell - 2);
        }
    }
}

function drawCell(x, y, context, color) {
    board[y][x] = true;
    context.fillStyle = color;
    context.fillRect(x * cell, y * cell, cell - 2, cell - 2);
}

function updateCell(x, y) {
    let count = 0;
    if (y === 0) {
        if (board[board.length - 1][x]) {
            count += 1;
        }
        if (board[y + 1][x]) {
            count += 1;
        }
        if (x === 0) {
            if (board[y][board[y].length - 1]) {
                count += 1;
            }
            if (board[board.length - 1][board[y].length - 1]) {
                count += 1;
            }
            if (board[y + 1][board[y].length - 1]) {
                count += 1;
            }
        } else if (x === board[y].length - 1) {

        } else {

        }
    } else if (y === board.length - 1) {
    } else {
    }

    if (count === 2 || count === 3) {
    } else {
        board[y][x] = false;
    }
}

let a = false;

function eval() {
    console.log("eveal");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    for (let y = 0; y < height / cell; y += 1) {
        for (let x = 0; x < width / cell; x += 1) {
            if (board[y][x] && !a) {
                context.fillStyle = "#7678d7";
                console.log(a);
            } else {
                context.fillStyle = "#76D7C4";
            }
            context.fillRect(x * cell, y * cell, cell - 2, cell - 2);
        }
    }
}

let intervalId;

function repeatAction(n) {
    intervalId = setInterval(eval, n * 1000);
}

function stopAction() {
    clearInterval(intervalId);
}

drawGrid(canvas, cell);
