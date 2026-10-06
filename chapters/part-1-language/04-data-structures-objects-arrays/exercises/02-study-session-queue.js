// Challenge 02 - Study session queue
//
// Difficulty: one step above 01-array-basics.js
// Goal: practice arrays of objects, queue methods, object mutation,
// conditions, and totals with a for...of loop.
//
// Rules:
// - Write the solution yourself below the TODO comments.
// - Use for...of loops. Do not use map, filter, reduce, or sort yet.
// - Predict the answers before running the file.

const studyQueue = [
  { topic: "Arrays", minutes: 25, completed: false },
  { topic: "Objects", minutes: 35, completed: false },
  { topic: "Loops", minutes: 20, completed: true },
];

// Predictions before running the program:
// 1. Which topic is first before any change?
// Answer:
//
// 2. Which topic will be removed after the urgent session is added?
// Answer:
//
// 3. How many sessions will remain at the end?
// Answer:
//
// 4. What will the total unfinished study time be?
// Answer:

// Tasks:
// 1. Display the topic of the first session.
// 2. Add this session to the end of the queue:
//    { topic: "JSON", minutes: 30, completed: false }
// 3. Add this urgent session to the start of the queue:
//    { topic: "Object review", minutes: 15, completed: false }
// 4. Remove the first session with shift() and save it in a variable.
// 5. Display the removed session's topic.
// 6. Find the "Objects" session with a for...of loop and mark it completed.
// 7. Calculate the total minutes for sessions that are not completed.
// 8. Display every remaining session in this format:
//    [DONE] Loops - 20 minutes
//    [TODO] Arrays - 25 minutes
// 9. Display the number of remaining sessions and unfinished minutes.

// Write your code below this line.
