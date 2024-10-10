// Arrays and Object Notation
// Riley Sane
// 10/08/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// make guitar her idiot

function setup() {
  createCanvas(400, windowHeight);
  makeCircles();
}

function draw() {
  background(220);
  circle(fartLeftCircle.x, fartLeftCircle.y, fartLeftCircle.radius);
}

function makeCircles() {
  let fartLeftCircle = {
    x: 100 - 20,
    y: windowHeight - 100,
    radius: 40,
  };
}