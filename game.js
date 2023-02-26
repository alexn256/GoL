const board = Array.from({ length: 15 }, () => new Array(15).fill(false));

const cell = 50;
const alive = "#7678d7";
const dead = "#76D7C4";

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
  // up
  let tY = y === 0 ? board.length - 1 : y - 1;
  if (board[tY][x]) {
    count += 1;
  }
  // down
  tY = y === board.length - 1 ? 0 : y + 1;
  if (board[tY][x]) {
    count += 1;
  }
  //left
  let tX = x === 0 ? board[y].length - 1 : x - 1;
  if (board[y][tX]) {
    count += 1;
  }
  tX = x === board[y].length - 1 ? 0 : x + 1;
  if (board[y][tX]) {
    count += 1;
  }
  // up + left
  tY = y === 0 ? board.length - 1 : y - 1;
  tX = x === 0 ? board[y].length - 1 : x - 1;
  if (board[tY][tX]) {
    count += 1;
  }
  // up + right
  tX = x === board[y].length - 1 ? 0 : x + 1;
  if (board[tY][tX]) {
    count += 1;
  }
  // down + left
  tY = y === board.length - 1 ? 0 : y + 1;
  tX = x === 0 ? board[y].length - 1 : x - 1;
  if (board[tY][tX]) {
    count += 1;
  }
  // down + right
  tX = x === board[y].length - 1 ? 0 : x + 1;
  if (board[tY][tX]) {
    count += 1;
  }
  //death or life
  if ((count < 2 || count > 3) && board[y][x]) {
    board[y][x] = false;
  } else if (count > 3 && !board[y][x]) {
    board[y][x] = true;
  }
}

function eval() {
  console.log("eveal");
}

let intervalId;

function repeatAction(n) {
  intervalId = setInterval(eval, n * 1000);
}

function stopAction() {
  clearInterval(intervalId);
}

drawGrid(canvas, cell);
