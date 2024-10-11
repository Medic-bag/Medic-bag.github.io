// Arrays and Object Notation
// Riley Sane
// 10/08/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// make guitar hero idiot

let balls = [];

function setup() {
  createCanvas(400, windowHeight);

  // window.setInterval(spawnBall, 500)
}

function draw() {
  background(220);
  makeCircles();
  
  
}

function makeCircles() {
  let farLeftCircle = {
    x: 80,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(farLeftCircle.x, farLeftCircle.y, farLeftCircle.radius);
  
  let farRightCircle = {
    x: 320,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(farRightCircle.x, farRightCircle.y, farRightCircle.radius);

  let RightCircle = {
    x: 240,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(RightCircle.x, RightCircle.y, RightCircle.radius);

  let LeftCircle = {
    x: 160,
    y: windowHeight - 100,
    radius: 40,
  };
  circle(LeftCircle.x, LeftCircle.y, LeftCircle.radius);
}

function spawnBall() {
  let someBall = {
    x: randBallX(),
    y: windowHeight + 30,
  };
}

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