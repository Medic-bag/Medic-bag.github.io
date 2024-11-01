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
const BLACK = 1;
const WHITE = 0;
const PLAYER = 2;
const ENEMY = 3;
let thePlayer = {
  x: 4,
  y: 7,
};
let playersTurn = true;
let enemies = [];
let gameState = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genBoard(boardSize, boardSize);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  genEnemies();
  
}


function draw() {
  if (!isGameOver()) {
    background(220);
    displayBoard();
    enemyMove();
  }
  else {
    endScreen();
  }
}

function mousePressed() {
  if (playersTurn) {
    let xPos = Math.floor(mouseX/CELL_SIZE);
    let yPos = Math.floor(mouseY/CELL_SIZE);
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (yPos === thePlayer.y + i && xPos === thePlayer.x + j && (xPos !== thePlayer.x || yPos !== thePlayer.y) && xPos < 9 && yPos < 9) {
          thePlayer.x = xPos;
          thePlayer.y = yPos;
          grid[thePlayer.y][thePlayer.x] = PLAYER;
          if (grid[oldY][oldX + 1] === BLACK || grid[oldY][oldX - 1] === BLACK) {
            grid[oldY][oldX] = WHITE;
          }
          else {
            grid[oldY][oldX] = BLACK;
          }
          playersTurn = false;
        }
      }
    }
  }
}

function keyPressed() {
  if (key === "a") {
    let xPos = Math.floor(mouseX/CELL_SIZE);
    let yPos = Math.floor(mouseY/CELL_SIZE);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (yPos === thePlayer.y + i && xPos === thePlayer.x + j && (xPos !== thePlayer.x || yPos !== thePlayer.y) && xPos < 9 && yPos < 9) {
          if (grid[yPos][xPos + 1] === BLACK || grid[yPos][xPos - 1] === BLACK || grid[yPos + 1][xPos] === BLACK || grid[yPos - 1][xPos === BLACK]) {
            grid[yPos][xPos] = WHITE;
          }
          if (grid[yPos][xPos + 1] === WHITE || grid[yPos][xPos - 1] === WHITE || grid[yPos + 1][xPos] === WHITE || grid[yPos - 1][xPos === WHITE]) {
            grid[yPos][xPos] = BLACK;
          }
        }
      }
    }
  }
  
}

function endScreen() {
  fill("white");
  square(0, 0, CELL_SIZE*boardSize);
  fill("red");
  text("refresh to restart", 240, 240);
}

function isGameOver() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (grid[i][j] === PLAYER) {
        return false;
      }
    }
  }
  return true;
}

function displayBoard() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (grid[y][x] === BLACK) {
        fill("black");
      }
      else if (grid[y][x] === WHITE) {
        fill("white");
      }
      else if (grid[y][x] === PLAYER) {
        fill("salmon");
      }
      else if (grid[y][x] === ENEMY) {
        fill("red");
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

function genEnemies() {
  for (let l = 0; l < 3; l++) {
    let randX = genRandPos();
    let randY = genRandPos();
    grid[randY][randX] = ENEMY;
    let someEnemy = {
      x: randX,
      y: randY,
    };
    enemies.push(someEnemy);
  }
}

function genRandPos() {
  let randPos = Math.floor(random(9));
  return randPos;
}

function enemyMove() {
  if (playersTurn === false) {
    for (let enemy of enemies) {
      let enemyOldX = enemy.x;
      let enemyOldY = enemy.y;

      if (thePlayer.x - enemy.x < 0) {
        enemy.x -= 1;
      }
      else if (thePlayer.x - enemy.x > 0) {
        enemy.x += 1;
      }
      if (thePlayer.y - enemy.y < 0) {
        enemy.y -= 1;
      }
      else if (thePlayer.y - enemy.y > 0) {
        enemy.y += 1;
      }

      grid[enemy.y][enemy.x] = ENEMY;
      if (grid[enemyOldY][enemyOldX + 1] === BLACK || grid[enemyOldY][enemyOldX - 1] === BLACK) {
        grid[enemyOldY][enemyOldX] = WHITE;
      }
      else {
        grid[enemyOldY][enemyOldX] = BLACK;
      }
    }
    playersTurn = true;
  }
}