// Arrays and Object Notation
// Riley Sane
// 10/08/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// make guitar hero idiot

let balls = [];
let farLeftCircle;
let farRightCircle;
let RightCircle;
let LeftCircle;
let score = 0;
let scoreGiven = false;



function setup() {
  createCanvas(400, windowHeight);

  //spawns a ball every second
  window.setInterval(spawnBall, 500);
}

function draw() {
  background(220);
  makeCircles();
  ballsMove();
  displayBalls();
  killBalls();
  pressButtons();
  displayText();
}

// displays the text for the score and lives
function displayText() {
  text(score, 10, 20);
  text(keyIsPressed, 10, 40);
}

// gives the player score if they press the correct button when a ball is in one of the circles
function pressButtons() {
  if (keyIsPressed) {

    if (scoreGiven === !true) {
      if (key === 'a') {
        for (let ball of balls) {
          let theDist = dist(farLeftCircle.x, farLeftCircle.y, ball.x, ball.y);
          let theIndex = balls.indexOf(ball);
          
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
            scoreGiven === true;
          }
          
          
        }
      }


      if (key === 's') {
        for (let ball of balls) {
          let theDist = dist(leftCircle.x, leftCircle.y, ball.x, ball.y);
          let theIndex = balls.indexOf(ball);
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
          }
        }
      }
      
      if (key === 'd') {
        for (let ball of balls) {
          let theDist = dist(rightCircle.x, rightCircle.y, ball.x, ball.y);
          let theIndex = balls.indexOf(ball);
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
          }
        }
      }

      if (key === 'f') {
        for (let ball of balls) {
          let theDist = dist(farRightCircle.x, farRightCircle.y, ball.x, ball.y);
          let theIndex = balls.indexOf(ball);
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
          }
        }
      }
    }
  }
  else {
    scoreGiven = false;
  }

}

// removes balls when they hit the bottom of the screen
function killBalls() {
  for (let ball of balls) {
    if (dist(ball.x, ball.y + 15, ball.x, windowHeight) === 0) {
      let theIndex = balls.indexOf(ball);
      balls.splice(theIndex, 1);
    }
  }
}

// moves the balls
function ballsMove() {
  for (let ball of balls) {
    ball.y += 3;
  }
}

// creates the buttons that the player controls
function makeCircles() {
  farLeftCircle = {
    x: 80,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(farLeftCircle.x, farLeftCircle.y, farLeftCircle.radius);
  text('A', farLeftCircle.x - 5, farLeftCircle.y + 5);

  farRightCircle = {
    x: 320,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(farRightCircle.x, farRightCircle.y, farRightCircle.radius);
  text('F', farRightCircle.x - 5, farRightCircle.y + 5);

  rightCircle = {
    x: 240,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(rightCircle.x, rightCircle.y, rightCircle.radius);
  text('D', rightCircle.x - 5, rightCircle.y + 5);

  leftCircle = {
    x: 160,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(leftCircle.x, leftCircle.y, leftCircle.radius);
  text('S', leftCircle.x - 5, leftCircle.y + 5);
}

// creates each balls x, y, and radius
function spawnBall() {
  let someBall = {
    x: randBallX(),
    y: 0,
    radius: 30,
  };
  balls.push(someBall);
}

// draws the balls on the canvas
function displayBalls() {
  for (let ball of balls) {
    circle(ball.x, ball.y, ball.radius);
  }
}

// randomizes which button the balls will spawn above
function randBallX() {
  let rndNum = random(0, 4);
  if (rndNum <=1) {
    return 80;
  }
  else if (rndNum <=2) {
    return 160;
  }
  else if (rndNum <= 3) {
    return 240;
  }
  else {
    return 320;
  }
}