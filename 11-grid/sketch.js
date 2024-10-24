// Grid Demo
// Riley Sane
// 10/22/2024


// if hard coding a grid use this :)
// let grid = [[1,0,0,1],
//             [0,1,1,0],
//             [1,0,1,1],
//             [1,1,1,0]];

let grid;
let cellSize;
const GRID_SIZE = 10;

function setup() {
  
  if (windowHeight < windowWidth){
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = height/GRID_SIZE;
  grid = genRandGrid(GRID_SIZE, GRID_SIZE);
}

function windowResized() {
  if (windowHeight < windowWidth){
    resizeCanvas(windowHeight, windowHeight);
  }
  else {
    resizeCanvas(windowWidth, windowWidth);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === 'e') {
    grid = genRandGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === 'r'){
    grid = genEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === 'q') {
    let x = Math.floor(mouseX/cellSize);
    let y = Math.floor(mouseY/cellSize);
    toggleCell(x,y);
    toggleCell(x + 1,y);
    toggleCell(x - 1,y);
    toggleCell(x,y + 1);
    toggleCell(x,y - 1);
    
    
  }
}

function mousePressed() {

}

function toggleCell(x,y) {
  if (x >= 0 && x <= GRID_SIZE && y >= 0 && y <= GRID_SIZE) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
  }
  
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill("bisque");
      }
      else if (grid[y][x] === 0) {
        fill("burlywood");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function genRandGrid(columns, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x =0; x < columns; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function genEmptyGrid(columns, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x =0; x < columns; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}