const board = [];

let speed = document.querySelector("#volume");
let canvas = document.querySelector(".canvas");

speed.addEventListener("input", () => {
  console.log("speed = " + speed.value);
});

function drawGrid(canvas, cell) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  for (let y = 1; y <= height; y += cell) {
    for (let x = 1; x <= width; x += cell) {
      context.fillStyle = "#76D7C4";
      context.fillRect(y, x, cell - 2, cell - 2);
    }
  }
}

drawGrid(canvas, 50);
