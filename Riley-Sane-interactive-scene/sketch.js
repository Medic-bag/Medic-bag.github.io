// Project Title
// Riley Sane
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// make plinko idiot

let shootBall=false;
let ballY=0;
let ballX=0;
let score = 0;
let dropperX = 250;
let dropperY = 0;
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(200);
  stroke(200);
  rect(dropperX, dropperY, 50, 50);
  moveDropper();
  stroke(0);
  drawPegs();
  scoreFuncs();
  ball();
  if (shootBall) {
    ballX= dropperX;
    ballY= dropperY;
    circle(ballX, ballY, 30);
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
  text("2", width / 2, height - 5);
  text("0.5", 60, height - 5);
  text("1.5", 180, height - 5);
  text("1.5", 420, height - 5);
  text("0.5", 540, height - 5);
}

function ball() {
  if (mouseIsPressed) {
    shootBall = true;
  }
}
function collision() {
  //use dist idiot
}