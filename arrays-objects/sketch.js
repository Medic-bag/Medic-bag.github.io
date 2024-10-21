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
let score = 10;
let scoreGiven = false;
let lives = 4;
let speed = 3;
let gameOver = false;
let highScore = 0;

function setup() {
  createCanvas(400, windowHeight);

  //spawns a ball every second
  window.setInterval(spawnBall, 500);
}

function draw() {
  if (gameOver === false) {
    background(220);
    makeCircles();
    getHarder();
    ballsMove();
    displayBalls();
    killBalls();
    pressButtons();
    setHS();
    displayText();
    endGame();
  }
  else {
    drawEndScreen();
  }
}

// get harder
function getHarder() {
  if (score % 1000 === 0) {
    score += 10;
    speed += 1;
  }
}

// sets highscore when needed
function setHS() {
  if (highScore < score) {
    highScore = score;
  }
}

// draws everything needed for the game over screen
function drawEndScreen() {
  background(220);
  rect(100, windowHeight/2 - 25, 200, 50);
  text('haha you suck. click to restart.', 125, windowHeight/2);
  restartGame();
}

// restarts the game when you click on the game over screen
function restartGame() {
  if (mouseIsPressed) {
    lives = 4;
    score = 0;
    speed = 3;
    gameOver = false;
    balls = [];
  }
}

// ends the game when your lives reach 0
function endGame() {
  if (lives < 1) {
    gameOver = true;
  }
}

// displays the text for the score, highscore, and lives
function displayText() {
  text('SCORE: ' + score, 10, 20);
  text('LIVES: ' + lives, 10, 40 );
  text('HS: ' + highScore, 10, 60);
}

// gives the player score if they press the correct button when a ball is in one of the circles
function pressButtons() {
  if (keyIsPressed) {

    
    if (key === 'a') {
      for (let ball of balls) {
        let theDist = dist(farLeftCircle.x, farLeftCircle.y, ball.x, ball.y);
        let theIndex = balls.indexOf(ball);

        // checks if score has been given yet for a key press to disable holding down keys
        if (scoreGiven === false) {
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
            scoreGiven = true;
          }
        }
          
      }
    }


    if (key === 's') {
      for (let ball of balls) {
        let theDist = dist(leftCircle.x, leftCircle.y, ball.x, ball.y);
        let theIndex = balls.indexOf(ball);
        if (scoreGiven === false) {
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
            scoreGiven = true;
          }
        }
      }
    }
      
    if (key === 'd') {
      for (let ball of balls) {
        let theDist = dist(rightCircle.x, rightCircle.y, ball.x, ball.y);
        let theIndex = balls.indexOf(ball);
        if (scoreGiven === false) {
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
            scoreGiven = true;
          }
        }
      }
    }

    if (key === 'f') {
      for (let ball of balls) {
        let theDist = dist(farRightCircle.x, farRightCircle.y, ball.x, ball.y);
        let theIndex = balls.indexOf(ball);
        if (scoreGiven === false) {
          if (theDist <= 20) {
            balls.splice(theIndex, 1);
            score += 10;
            scoreGiven = true;
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
    if (dist(ball.x, ball.y + 15, ball.x, windowHeight) < speed + 1) {
      console.log("death");
      let theIndex = balls.indexOf(ball);
      balls.splice(theIndex, 1);
      lives -= 1;
    }
  }
}

// moves the balls
function ballsMove() {
  for (let ball of balls) {
    ball.y += speed;
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