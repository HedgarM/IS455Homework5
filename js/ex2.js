let myArray = [1,2,3,4,5,6,7,8,9,10];

//Odd Numbers
const isOdd = (num) => {
  return(num % 2 === 0) ? true:false;
}
const oddNumbers = myArray.filter(x => isOdd(x));

const divBy2or5 = (num) =>{
  return(num % 2 === 0 || num % 5 === 0) ? true:false;
}
const divsBy2or5 = myArray.filter(x => divBy2or5(x));

console.log(oddNumbers);
console.log(divsBy2or5);
