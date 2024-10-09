class Sqaure{
  constructor(side)
  {
    this.classSide = side;
    this.perimeter = side * 4;
    this.area = side**2;
    this.diagonal = Math.sqrt(side**2);
  }
  describe(){
    return `Square with side ${this.classSide} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`
  }
}

const mySquare1 = new Sqaure(6);
const mySquare2 = new Sqaure(8);
const mySquare3 = new Sqaure(10);

console.log(mySquare1.describe());
console.log(mySquare2.describe());
console.log(mySquare3.describe());