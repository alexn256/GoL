// temp solution
const board = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
];

const cell = 50;

let speed = document.querySelector("#volume");
let canvas = document.querySelector(".canvas");

speed.addEventListener("input", () => {
    console.log("speed = " + speed.value);
});

canvas.addEventListener("click", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    drawCell(Math.floor(x / cell), Math.floor(y / cell), canvas.getContext("2d"));
});

function drawGrid(canvas, cell) {
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    for (let y = 0; y < height / cell; y += 1) {
        for (let x = 0; x < width / cell; x += 1) {
            if (board[y][x]) {
                context.fillStyle = "#7678d7"
            } else {
                context.fillStyle = "#76D7C4";
            }
            context.fillRect(x * cell, y * cell, cell - 2, cell - 2);
        }
    }
}

function drawCell(x, y, context) {
    board[y][x] = true;
    context.fillStyle = "#7678d7"
    context.fillRect(x * cell, y * cell, cell - 2, cell - 2);
}

function updateCell(x, y) {
    if (y === 0) {
        if (x === 0) {

        } else if (x === board[y].length -1) {

        } else {

        }
    } else if (y === board.length - 1) {

    } else {

    }
}

function engine() {

}

drawGrid(canvas, cell);
