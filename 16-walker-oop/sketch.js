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
      this.y -= this.speed;
    }
    // down
    else if (choice < 50) {
      this.y += this.speed;
    }
    // left
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}

let winston;
let radia;
let brentPeterson;

function setup() {
  createCanvas(windowWidth, windowHeight);
  winston = new Walker(width/2, height/2, "red");
  radia = new Walker(width/2, height/2, "blue");
  brentPeterson = new Walker(width/2, height/2, "burlywood");
}



function draw() {
  noStroke();
  winston.display();
  winston.move();
  radia.display();
  radia.move();
  brentPeterson.display();
  brentPeterson.move();
  brentPeterson.move();
  brentPeterson.move();
}
