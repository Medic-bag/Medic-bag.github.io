// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 20;
let grid;
let rows;
let cols;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = math.floor(height/CELL_SIZE);
  rows = math.floor(width/CELL_SIZE);
  grid = genRandGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < cols; y++) {
    if (grid[y][x] === 1) {
      fill("black");
    }
    else if (grid[y][x] === 0) {
      fill("white");
    }
    square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
}

function genRandGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++) {
    newGrid.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}