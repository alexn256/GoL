let speed = document.querySelector("#volume");
let canvas = document.querySelector(".canvas");
let startBtn = document.querySelector("#start");

const cell = 25;

const rows = canvas.offsetWidth / cell;
const cols = canvas.offsetHeight / cell;

let board = Array.from({ length: cols }, () => new Array(rows).fill(false));

const alive = "#CBE724";
const dead = "#1A2026";
const pause = false;

speed.addEventListener("input", () => {
  console.log("speed = " + speed.value);
});

startBtn.addEventListener("click", () => {
  if (pause) {
    stopAction();
    pause = false;
  } else {
    repeatAction(0.5);
    pause = true;
  }
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

function nextGen(grid) {
  const nextGen = Array.from({ length: cols }, () =>
    new Array(rows).fill(false)
  );
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      let count = 0;
      const alive = grid[y][x];
      // up
      let tY = y === 0 ? grid.length - 1 : y - 1;
      if (grid[tY][x]) {
        count += 1;
      }
      // down
      tY = y === grid.length - 1 ? 0 : y + 1;
      if (grid[tY][x]) {
        count += 1;
      }
      //left
      let tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[y][tX]) {
        count += 1;
      }
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[y][tX]) {
        count += 1;
      }
      // up + left
      tY = y === 0 ? grid.length - 1 : y - 1;
      tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      // up + right
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      // down + left
      tY = y === grid.length - 1 ? 0 : y + 1;
      tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      // down + right
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      //death or life
      if (alive && (count === 2 || count === 3)) {
        nextGen[y][x] = true;
      } else if (!alive && count === 3) {
        nextGen[y][x] = true;
      }
    }
  }
  return nextGen;
}

function update() {
  board = nextGen(board);
  drawGrid(canvas, cell);
}

let intervalId;

function repeatAction(n) {
  intervalId = setInterval(update, n * 1000);
}

function stopAction() {
  clearInterval(intervalId);
}

drawGrid(canvas, cell);
