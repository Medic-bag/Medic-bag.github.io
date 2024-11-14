// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x,y,theColor) {
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.radius = 5;
    this.color = theColor;
  }

  display() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    //fill(r,g,b);
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    // up
    if (choice < 25) {
      if (this.y > this.radius) {
        this.y -= this.speed;
      }
    }
    // down
    else if (choice < 50) {
      if (this.y < height - this.radius) {
        this.y += this.speed;
      }
    }
    // left
    else if (choice < 75) {
      if (this.x > this.radius) {
        this.x -= this.speed;
      }
    }
    else {
      if (this.x < width - this.radius)  {
        this.x += this.speed;
      }
    }
  }
}

let walkerArray = [];
let brentPeterson;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let winston = new Walker(width/2, height/2, "red");
  walkerArray.push(winston);
}



function draw() {
  noStroke();
  for (let thewalker of walkerArray) {
    thewalker.display();
    thewalker.move();
  }

}

function mousePressed() {
  let randColor = color(random(255), random(255), random(255));
  let walker = new Walker(mouseX, mouseY, randColor);
  walkerArray.push(walker);
}