// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let highestClick = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highest")) {
    highestClick = getItem("highest");
  }
}

function draw() {
  background(0);
  displayClicks();
  displayHighest();
}

function mousePressed() {
  x += 1;
  if (highestClick < x) {
    highestClick = x;
    storeItem("highest", highestClick);
  }
}

function displayClicks() {
  fill("white");
  textSize(50);
  text(x, width/2 - 25, height/2);
}

function displayHighest() {
  fill("white");
  textSize(50);
  text(highestClick, width/2 - 25, height/2 + 70);
}