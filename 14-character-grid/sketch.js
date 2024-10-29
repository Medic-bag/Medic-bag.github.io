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
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let thePlayer = {
  x: 0,
  y: 0,
};

function setup() {
  
  if (windowHeight < windowWidth){
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = height/GRID_SIZE;
  grid = genRandGrid(GRID_SIZE, GRID_SIZE);

  grid[thePlayer.y][thePlayer.x] = PLAYER;
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
  }
  if (key === 's') {
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  if (key === 'w') {
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  if (key === 'a') {
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
  if (key === 'd') {
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
}

function movePlayer(x,y) {


  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE) {
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    thePlayer.x = x;
    thePlayer.y = y;

    grid[oldY][oldX] = OPEN_TILE;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
  console.log(oldX);
  console.log(oldY);
}


function toggleCell(x,y) {
  if (x >= 0 && x <= GRID_SIZE && y >= 0 && y <= GRID_SIZE) {
    if (grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE) {
      grid[y][x] = OPEN_TILE;
    }
    
  }
  
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === IMPASSIBLE) {
        fill("burlywood");
      }
      else if (grid[y][x] === OPEN_TILE) {
        fill("bisque");
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
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
        newGrid[y].push(IMPASSIBLE);
      }
      else {
        newGrid[y].push(OPEN_TILE);
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
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}