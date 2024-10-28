// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 60;
let boardSize = 9;
let tileIsBlack = true;
let grid;
let player = {
  x: boardSize/2 * CELL_SIZE,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genBoard(boardSize, boardSize);
}

function draw() {
  background(220);
  displayBoard();
}



function displayBoard() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("burlywood");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function genBoard(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++) {
    newGrid.push([]);
    for (let x = 0; x < rows; x++) {
      tileIsBlack = !tileIsBlack;
      if (tileIsBlack) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}