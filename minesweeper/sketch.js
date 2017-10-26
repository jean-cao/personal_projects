function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i]= new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let w = 40;

function setup() {
  createCanvas(401, 401);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
    grid[i][j]= new Cell(i, j, w);
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
    grid[i][j].countMines();
    }
  }
}

function gameOver() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].revealed = true;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
        if (grid[i][j].mine)
          gameOver();
      }
    }
  }
}

function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
