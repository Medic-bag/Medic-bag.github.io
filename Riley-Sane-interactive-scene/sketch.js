// Plinko
// Riley Sane
// Tuesday October 1st
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//defines all variables used
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
  // places text on the canvas displaying various information
  text(score, 20, 20)
  text("use left and right to move", 20 , 40)
  text("use left click to spawn ball", 20, 60)
  // checks to see if a ball should be on screen, if so draws the ball
  if (ballSpawn === true) {
    circle(ballX, ballY, 15);
    // Gives the ball gravity
    ySpeed = ySpeed + gravity;
    ballY = ballY + ySpeed;
    // bounces the ball in the correct direction when it collides with a wall
    if (ballX - 7 === 0) {
      
      goLeft = false;
      goRight = true;
    }
    else if (ballX + 7 === 600) {
      goRight = false;
      goLeft = true;
    }
    // uses variables from the ball() function to move left or right at a constant rate as needed
    if (goLeft) {
      ballX -= 1;
      
    }
    if (goRight) {
      ballX += 1;
      
    }
  }
  // deletes the ball when it reaches one of the score blocks and gives the proper amount of score to the player
  if (ballY >= 600-20 && ballSpawn === true) {
    gravity = 0.1;
    ySpeed = 0;
    //gives a certain amount of points depending on which score block the ball lands on
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
    //deletes the ball when it hits a score block
    ballSpawn = false;
  }
}
// function that moves the dropper left when pressing left arrow and right when pressing right arrow
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
// creates the pegs the ball is to bounce off of
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
// creates the score blocks at the bottom of the screen
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
  // spawns a ball at the dropper when no other ball is on screen and when left click is pressed
  if (ballSpawn === false) {
    if (mouseIsPressed) {
      ballSpawn = true;
      ballX = dropperX + 25;
      ballY = dropperY + 25;
      
    }
  }
  // bounces the ball when it hits a peg left if it hits the left half of a peg and right if it hits the right side of a peg
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
    // calculates where each peg is
    for (let y = 150; y < height ; y += 120) {
      for (let x = 60; x < width - 30; x += 60) {
        pegX = x;
        pegY = y;
        // asks if the ball is colliding with the peg, if so, bounces the ball
        if (dist(pegX, pegY, ballX, ballY) <= 15) {
          ySpeed = -ySpeed
          //determines the direction that the ball bounces
          if (pegX - ballX >= 0) {
            direction = 2;
          }
          else {
            direction = 0.5;
          }
          //updates two variables to tell the ball to move left or right in the draw() loop
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