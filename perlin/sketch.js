// Perlin Noise Ball
// Riley Sane
// 10/07/2024

let x;
let y;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);

  x = noise(time) * width;
  y = noise(time + 50) * height;
  circle(x, y, 40);
  time += 0.01;
}
