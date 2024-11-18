// fireworks

const NUMBER_OF_FIREWORKS_PER_CLICK = 50;

class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.size = 5;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = 255;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this. size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.opacity -= 3;
  }

  isDead() {
    return this.opacity <= 0;
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let firework of theFireworks) {
    
    if (firework.isDead()) {
      theIndex = theFireworks.indexOf(firework);
      theFireworks.splice(theIndex, 1);
    }
    else {
      firework.update();
      firework.display();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < NUMBER_OF_FIREWORKS_PER_CLICK; i++) {
    let someFirework = new Particle(mouseX, mouseY);
    theFireworks.push(someFirework);
  }
}
