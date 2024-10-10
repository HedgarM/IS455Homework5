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
let smallest;

for (const student of studentList){
  lastNameFirstChar = student.lastName.substring(0,1);
  if(lastNameFirstChar === "C"){
    let gradesMin = 0;
    for(const score of student.scores){
      if(student.scores < smallest)
      {
        smallest = student.scores
      }
      gradesMin = smallest;
    }
    cLastNameResults.push({
      firstName:student.lastName,
      lastName:student.lastName,
      minGrade:gradesMin
    });
  }
}

//Output
console.log(cLastNameResults);
