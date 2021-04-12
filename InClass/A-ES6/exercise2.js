class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas


class Triangle extends Polygon {
  constructor (height, base) {
    super (height);
    this.name = 'Triangle';
    this.base = base;
  }
    get area () {return (this.base * this.height / 2);}
    sayName() {
      console.log(`Hi, my name is ${this.name} and my area is ${this.area}`)
    }
}

let prism = new Triangle(2, 3)
prism.sayName()


class Circle extends Polygon {
  constructor (height) {
    super (height);
    this.name = 'Circle';
  }
  get area() {
    let radius =this.height / 2
    let r2 = radius * radius;
    return r2 * Math.PI;
  }
  sayName() {
    console.log (`Hi, my name is ${this.name} and my area is ${this.area}`)
    return '' 
  }
}

let round = new Circle (4);
round.sayName()
console.log(round.sayName())