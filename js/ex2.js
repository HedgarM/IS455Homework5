let myArray = [1,2,3,4,5,6,7,8,9,10];

//Odd Numbers
const isOdd = (num) => {
  return(num % 2 === 0) ? true:false;
}
const oddNumbers = myArray.filter(x => isOdd(x));

//Div by 2 or 5
const divBy2or5 = (num) =>{
  return(num % 2 === 0 || num % 5 === 0) ? true:false;
}
const divsBy2or5 = myArray.filter(x => divBy2or5(x));

//Div by 3 and Squared
const divBy3 = (num) =>{
  return(num % 3 === 0)?true:false;
}
const divBy3AndSquare = myArray.filter(x => divBy3(x)).map(x => x**2);

const divBy5 = (num) =>{
  return(num % 5 === 0)?true:false;
}
const divBy5SquareAndSum = myArray.filter(x => divBy5(x)).map(x => x**2).reduce((sum,x) => sum + x,0);



console.log(oddNumbers);
console.log(divsBy2or5);
console.log(divBy3AndSquare);
console.log(divBy5SquareAndSum);