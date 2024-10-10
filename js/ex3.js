//Use the student results tutorial as a template.

//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = [];
let lastNameFirstChar = '';
//I made the smallest variable's value 101 because I need the initital condition to set the first checked value to be the smallest, if I set the variable's value to zero then the returned value will always be zero. I wasn't sure of what other method to use.
let smallest = 101;
//Same explanation as above but vice versa for the initial check if the current iterated value is larger than the previous.
let largest = 0;
let gradesMin = 0;
let gradesMax = 0;
for (const student of studentList){
  lastNameFirstChar = student.lastName.substring(0,1);
  if(lastNameFirstChar === "C"){
    for(const score of student.scores){
      if(score < smallest)
      {
        smallest = score;
      }
      gradesMin = smallest;
    }
    for(const score of student.scores){
      if(score > largest)
      {
        largest = score;
      }
      gradesMax = largest;
    }
    const avgScore = student.scores.reduce((sum,num) => sum + num) / student.scores.length;
    cLastNameResults.push({
      firstName:student.lastName,
      lastName:student.lastName,
      minGrade:gradesMin,
      maxGrade:gradesMax,
      scoreAvg:avgScore.toFixed(2)
    });
  }
}

//Output
console.log(cLastNameResults);
