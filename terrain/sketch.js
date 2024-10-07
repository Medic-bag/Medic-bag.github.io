// terrain generation
// Riley Sane 
// 10/07/2024

let terrain = [];
const NUMBER_OF_RECTS = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let widthOfRect = width/NUMBER_OF_RECTS;
  generateTerrain(widthOfRect);
  
}

function draw() {
  background(220);

  for (let someRect of terrain) {
    noStroke;
    fill(0, 255, 0);
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}
function generateTerrain() {
  let time = 0;
  let deltaTime = 0.01;
  for (let x = 0; x < width; x += widthOfRect) {
    let theHeight = noise(time) * height;
    let someRect = spawnRectangle(x, theHeight, widthOfRect);
    terrain.push( someRect );
    time += deltaTime;
  }
}
function spawnRectangle(leftSide, rectHeight, rectWidth) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}