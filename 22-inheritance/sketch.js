// Project Title

//parent class
class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  //Common display options
  display() {
    noStroke();
    fill(this.color);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  // override display
  display() {
    super.display();
    circle(this.x, this.y, this.radius * 2);
  }
}

class Square extends Shape {
  constructor(x, y, color, length) {
    super(x, y, color);
    this.length = length;
  }

  display() {
    super.display ();
    square(this.x, this.y, this.length);
  }
}

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Make 10 shapes
  for (let i = 0; i < 10; i++) {
    if (random(100) < 50) {
      let someCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255)), random(20, 50));
      theShapes.push(someCircle);
    }
    else {
      let someSquare = new Square(random(width), random(height), color(random(255), random(255), random(255)), random(20, 50));
      theShapes.push(someSquare);
    }
  }
}

function draw() {
  background(0);

  for (let aShape of theShapes) {
    aShape.move();
    aShape.display();
  }
}

function mousePressed() {
  for (let i = 0; i < 10; i++) {
    if (random(100) < 50) {
      let someCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255)), random(20, 50));
      theShapes.push(someCircle);
    }
    else {
      let someSquare = new Square(random(width), random(height), color(random(255), random(255), random(255)), random(20, 50));
      theShapes.push(someSquare);
    }
  }
}