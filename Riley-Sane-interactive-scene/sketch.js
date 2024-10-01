// Plinko
// Riley Sane
// Tuesday October 1st
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let goLeft = true;
let goRight = true;
let direction = 1;
let pegX = 0;
let pegY = 0;
let ySpeed = 0;
let gravity = 0.1;
let ballX = 0;
let ballY = 0;
let ballSpawn = false;
let score = 1;
let dropperX = 250;
let dropperY = 0;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(200);
  
  rect(dropperX, dropperY, 50, 50);
  moveDropper();
  
  drawPegs();
  scoreFuncs();
  ball();
  text(score, 20, 20)
  text("use left and right to move", 20 , 40)
  text("use left click to spawn ball", 20, 60)
  if (ballSpawn === true) {
    circle(ballX, ballY, 15);
    ySpeed = ySpeed + gravity;
    ballY = ballY + ySpeed;
    if (ballX - 7 === 0) {
      
      goLeft = false;
      goRight = true;
    }
    else if (ballX + 7 === 600) {
      goRight = false;
      goLeft = true;
    }
    if (goLeft) {
      ballX -= 1;
      
    }
    if (goRight) {
      ballX += 1;
      
    }
  }
  if (ballY >= 600-20 && ballSpawn === true) {
    gravity = 0.1;
    ySpeed = 0;
    if (ballX < 120) {
      score = score * 0.5;
    }
    else if (ballX < 240) {
      score = score * 1.5
    }
    else if (ballX < 360) {
      score = score * 5;
    }
    else if (ballX < 480) {
      score = score * 1.5;
    }
    else {
      score = score * 0.5;
      
    }
    ballSpawn = false;
  }

  

}

function moveDropper() {
  if (dropperX >= 0) {
    if (keyIsDown(37)) {
      dropperX = dropperX - 4;
    }
  }
  if (dropperX + 50 <= 600) {
    if (keyIsDown(39)) {
      dropperX = dropperX + 4;
    }
  }
}

function drawPegs() {
  for (let y = 90; y < height - 120; y += 120) {
    for (let x = 30; x < width; x += 60) {
      circle(x, y , 15);
    }
  }
  for (let y = 150; y < height ; y += 120) {
    for (let x = 60; x < width - 30; x += 60) {
      circle(x, y , 15);
    }
  }
}

function scoreFuncs() {
  for (let x = 0; x < width; x += width/5) {
    rect(x, height - 20, width/5, 20);
  }
  text("5", width / 2, height - 5);
  text("0.5", 60, height - 5);
  text("1.5", 180, height - 5);
  text("1.5", 420, height - 5);
  text("0.5", 540, height - 5);
}

function ball() {
  if (ballSpawn === false) {
    if (mouseIsPressed) {
      ballSpawn = true;
      ballX = dropperX + 25;
      ballY = dropperY + 25;
      
    }
  }
    for (let y = 90; y < height - 120; y += 120) {
      for (let x = 30; x < width; x += 60) {
        
        pegX = x;
        pegY = y;
        if (dist(pegX, pegY, ballX, ballY) <= 15) {
          ySpeed = -ySpeed
          if (pegX - ballX >= 0) {
            direction = 2;
          }
          else {
            direction = 0.5;
          }
          
          if (direction > 1) {
              goRight = false;
              goLeft = true;
            
          }
          else {
            goLeft = false;
            goRight = true;
            
          }
          
        }
      }
    }
    for (let y = 150; y < height ; y += 120) {
      for (let x = 60; x < width - 30; x += 60) {
        pegX = x;
        pegY = y;
        if (dist(pegX, pegY, ballX, ballY) <= 15) {
          ySpeed = -ySpeed
          if (pegX - ballX >= 0) {
            direction = 2;
          }
          else {
            direction = 0.5;
          }
          if (direction > 1) {
              goRight = false;
              goLeft = true;
            
          }
          else {
              goLeft = false;
              goRight = true;
            
          }
        }
      }
    }
    

}