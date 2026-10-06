// Challenge 03 - Student results report
//
// Difficulty: two steps above 01-array-basics.js
// Goal: practice nested arrays, objects, functions, loops, mutation,
// comparisons, and JSON.
//
// Rules:
// - Write the solution yourself below the TODO comments.
// - Use for...of loops. Do not use map, filter, reduce, or sort yet.
// - Do not hard-code the winning student's name.
// - Predict the answers before running the file.

const students = [
  { name: "Amina", scores: [14, 16, 12] },
  { name: "Youssef", scores: [8, 11, 10] },
  { name: "Salma", scores: [17, 18, 16] },
];

// Predictions before running the program:
// 1. Which student do you expect to have the highest average?
// Answer:
//
// 2. Which students do you expect to pass with an average of 10 or more?
// Answer:
//
// 3. How many properties will each student object have after the update?
// Answer:
//
// 4. What type of value will JSON.stringify(students) return?
// Answer:

// Tasks:
// 1. Create a calculateAverage(scores) function.
//    It must add the scores with a loop and return their average.
// 2. Loop over the students.
// 3. Add an average property to every student.
// 4. Add a passed property. It is true when the average is 10 or more.
// 5. Find the student with the highest average without using sort().
// 6. Build a passedStudentNames array using a loop and push().
// 7. Display every student in this format:
//    Student name - average: 00.00 - PASS or FAIL
//    Show averages with two decimal places by using toFixed(2).
// 8. Display the top student's name and average.
// 9. Convert the students array to JSON with JSON.stringify().
// 10. Convert that JSON string back to an array with JSON.parse().
// 11. Prove the restored data works by displaying the first student's name.

// Write your code below this line.
