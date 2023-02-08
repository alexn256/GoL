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

let speed = document.querySelector("#volume");
let canvas = document.querySelector(".canvas");

speed.addEventListener("input", () => {
    console.log("speed = " + speed.value);
});

canvas.addEventListener("click", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("Clicked at", x, y);
    drawCell(Math.floor(x / 50), Math.floor(y / 50), canvas.getContext("2d"));
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
    console.log("Clicked at", x, y);
    board[y][x] = true;
    context.fillStyle = "#7678d7"
    context.fillRect(x * 50, y * 50, 50 - 2, 50 - 2);
}

drawGrid(canvas, 50);
