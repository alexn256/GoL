const speed = document.querySelector("#volume");
const canvas = document.querySelector(".canvas");
const startBtn = document.querySelector("#start");
const count = document.querySelector(".gen");

const cell = 25;
const rows = canvas.offsetWidth / cell;
const cols = canvas.offsetHeight / cell;

let board = Array.from({ length: cols }, () => new Array(rows).fill(false));

const alive = "#CBE724";
const dead = "#1A2026";

let pause = false;
let genCount = 0;
let activeCells = 0;

speed.addEventListener("input", () => {
  if (pause && activeCells > 0) {
    stopAction();
    repeatAction(speed.value);
  }
});

startBtn.addEventListener("click", () => {
  let title = "Start";
  if (pause) {
    stopAction();
    pause = false;
  } else {
    if (activeCells > 0) {
      repeatAction(speed.value);
      pause = true;
      title = "Stop";
    }
  }
  console.log(pause);
  startBtn.textContent = title;
});

canvas.addEventListener("click", (event) => {
  const x = Math.floor(event.offsetX / cell);
  const y = Math.floor(event.offsetY / cell);
  let state;
  if (board[y][x]) {
    state = dead;
    drawCell(x, y, canvas.getContext("2d"), dead);
    board[y][x] = false;
    activeCells -= 1;
  } else {
    state = alive;
    drawCell(x, y, canvas.getContext("2d"), alive);
    board[y][x] = true;
    activeCells += 1;
  }
});

function drawGrid(canvas, cell) {
  const context = canvas.getContext("2d");
  for (let y = 0; y < cols; y += 1) {
    for (let x = 0; x < rows; x += 1) {
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
      let tY = y === 0 ? grid.length - 1 : y - 1;
      if (grid[tY][x]) {
        count += 1;
      }
      tY = y === grid.length - 1 ? 0 : y + 1;
      if (grid[tY][x]) {
        count += 1;
      }
      let tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[y][tX]) {
        count += 1;
      }
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[y][tX]) {
        count += 1;
      }
      tY = y === 0 ? grid.length - 1 : y - 1;
      tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      tY = y === grid.length - 1 ? 0 : y + 1;
      tX = x === 0 ? grid[y].length - 1 : x - 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      tX = x === grid[y].length - 1 ? 0 : x + 1;
      if (grid[tY][tX]) {
        count += 1;
      }
      if (alive && (count === 2 || count === 3)) {
        nextGen[y][x] = true;
        activeCells += 1;
      } else if (!alive && count === 3) {
        nextGen[y][x] = true;
        activeCells += 1;
      } else if (alive) {
        activeCells -= 1;
      }
    }
  }
  return nextGen;
}

function update() {
  board = nextGen(board);
  drawGrid(canvas, cell);
  genCount += 1;
  count.textContent = "Generation: " + `00000000${genCount}`.slice(-9);
  console.log(activeCells);
  if (activeCells < 1) {
    stopAction();
  }
}

let intervalId;

function repeatAction(speed) {
  intervalId = setInterval(update, (1 / (2 * speed)) * 1000);
}

function stopAction() {
  clearInterval(intervalId);
}

drawGrid(canvas, cell);
