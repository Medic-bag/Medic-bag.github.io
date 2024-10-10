// Bubble array object notation
// Riley Sane
// 10/10/2024
//
// - Removing objects from an array

let theBubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 10000000; i++) {
    spawnBubbles();
  }
}

function draw() {
  background(220);
  moveBubblesRandomly();
  displayBubbles();
}

function displayBubbles() {
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b);
    circle(bubble.x, bubble.y, bubble.size);
  }
}

function moveBubblesRandomly() {
  for (let bubble of theBubbles) {
    let choice = random(100);
    if (choice < 50) {
      // move up
      bubble.y -= bubble.speed;
    }
    else if (choice < 65) {
      // move down
      bubble.y += bubble.speed;
    }
    else if (choice < 80) {
      // move right
      bubble.x += bubble.speed;
    }
    else {
      bubble.x -= bubble.speed;
    }
  }
}

function spawnBubbles() {
  let someBubble = {
    x: random(width),
    y: height + random(0, 25),
    speed: random(2,5),
    size: random(20, 40),
    r: random(255),
    g: random(255),
    b: random(255),
  };
  theBubbles.push(someBubble);
}