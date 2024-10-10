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

studentList.forEach((student) => {

  student.scores.forEach((grade,idx) => {
    student.scores[idx] = grade + 5
  })
})

studentList.forEach(student => {
  const sum = student.scores.reduce((grade, idx) => grade + idx, 0);
  const avg = sum / student.scores.length;
  student.scores.push(avg);
});

studentList.forEach(student => {
  console.log(`Full Name (last, first):${student.firstName}, ${student.lastName}\nUpdated scores are: ${student.scores.join(", ")}`);
});