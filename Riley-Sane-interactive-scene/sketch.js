// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// make pinball idiot

let dropperX = 250;
let dropperY = 0;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  rect(dropperX, dropperY, 50, 50);
  moveDropper();
  drawPegs();
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
  for (let y = 70; y < height + 120; y += 120) {
    for (let x = 60; x < width; x += 60) {
      circle(x, y , 15);
    }
  }
  for (let y = 130; y < height ; y += 120) {
    for (let x = 90; x < width - 60; x += 60) {
      circle(x, y , 15);
    }
  }
}