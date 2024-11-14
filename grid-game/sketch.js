// SWAGALICOUS GRID GAME 
// Riley Sane
// Friday, nov 15th, 2024 
//
// Extra for Experts:
// made a competent AI for the enemies
// Chase sucks at this game

let level = 1;
let scoreNeeded = 20;
let score = 0;
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
  y: 5,
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
    levelUp();
    respawnEnemies();
    drawText();
  }
  else {
    endScreen();
  }
}

// increases the level aka amount of enemies and the xp needed to level up
function levelUp() {
  if (score >= scoreNeeded) {
    score += 10;
    level++;
    scoreNeeded = scoreNeeded * (enemies.length + 1);
  }
}


function drawText() {
  fill("black");
  text ("XP: " + score + "/" + scoreNeeded, 560, 100);
  text ("Level: " + level, 560, 150);
  text ("Press the A key on an enemy next to you to kill it.", 560, 200);
  text ("Press mouse button 1 on an adjacent tile to move to it.", 560, 250);
}

// respawns the enemies if there are none left
function respawnEnemies() {
  if (enemies.length === 0) {
    genEnemies();
  }
}

// moves the player when they click on any adjacent tiles
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
          
          // checks if the tile that is being left should be black or white
          if (oldX % 2 === oldY % 2) {
            grid[oldY][oldX] = WHITE;
          }
          else {
            grid[oldY][oldX] = BLACK;
          }
          grid[thePlayer.y][thePlayer.x] = PLAYER;
          playersTurn = false;
        }
      }
    }
  }
}

// killas an enemy in a adjacent tile if you hover over it with the mouse and press the A key
function keyPressed() {
  if (key === "a") {
    let xPos = Math.floor(mouseX/CELL_SIZE);
    let yPos = Math.floor(mouseY/CELL_SIZE);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (yPos === thePlayer.y + i && xPos === thePlayer.x + j && (xPos !== thePlayer.x || yPos !== thePlayer.y) && xPos < 9 && yPos < 9) {
          if (xPos % 2 === yPos % 2) {
            grid[yPos][xPos] = WHITE;
          }
          else {
            grid[yPos][xPos] = BLACK;
          }
        }
      }
      for (let enemy of enemies) {
        if (dist(enemy.x, enemy.y, xPos, yPos) === 0)  {
          let theIndex = enemies.indexOf(enemy);
          enemies.splice(theIndex, 1);
          score += 10;
          playersTurn = false;
        }
      }
    }
  }

}

// displays the end screen if you die
function endScreen() {
  fill("white");
  square(0, 0, CELL_SIZE*boardSize);
  fill("red");
  text("refresh to restart", 240, 240);
}

// checks if an enemy collides with the player, if so end the game
function isGameOver() {
  for (let enemy of enemies) {
    if (enemy.x === thePlayer.x && enemy.y === thePlayer.y) {
      return true;
    }
  }
  return false;
}

// displays the board, player, and enemies according to the grid
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

// creates the checkerboard
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

// generates enemies (amount is equal to the level) with  random X and Y values
function genEnemies() {
  for (let l = 0; l < level; l++) {
    let randX = genRandPos();
    let randY = genRandPos();
    if (randX === thePlayer.x && randY === thePlayer.y) {
      randX = genRandPos();
      randY = genRandPos();
    }
    grid[randY][randX] = ENEMY;
    let someEnemy = {
      x: randX,
      y: randY,
    };
    enemies.push(someEnemy);
  }
}

// chooses a random positon in the grid for the generation of the enemies
function genRandPos() {
  let randPos = Math.floor(random(9));
  return randPos;
}

// moves the enemies towards the player in the most optimal way
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

      if (enemyOldX % 2 === enemyOldY % 2) {
        grid[enemyOldY][enemyOldX] = WHITE;
      }
      else {
        grid[enemyOldY][enemyOldX] = BLACK;
      }
      
      grid[enemy.y][enemy.x] = ENEMY;

    }
    playersTurn = true;
  }
}