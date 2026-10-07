# Chapter 4 - Data Structures: Objects and Arrays

## Status

In progress - focused preparation for the class presentation.

## Source

- Printed pages: 58-83
- Main topics: arrays, objects, properties, methods, mutability, array loops, destructuring, JSON, and linked lists

## Learning goals

- Choose between an array and an object for a simple problem.
- Add, remove, access, and iterate over array elements.
- Represent one real-world item with an object.
- Build a collection as an array of objects.
- Explain stacks, queues, and linked lists in simple words.

## Work areas

- `exercises/` - learner solutions for the class presentation preparation.
- `examples/` - add only when a book example is studied.
- `experiments/` - add only when a variation is needed to test an idea.

## Completion checklist

- [ ] Read the chapter attentively.
- [ ] Type, predict, and run important examples.
- [ ] Complete the array basics exercise.
- [ ] Complete an object and array-of-objects exercise.
- [ ] Explain stacks and queues in simple words.
- [ ] Attempt the linked-list exercise before viewing a solution.
- [ ] Prepare and rehearse the class presentation.
- [ ] Record questions and vocabulary.
- [ ] Run relevant checks.
- [ ] Update progress and the current handoff.

## Discoveries

- A data structure organizes values according to how a program needs to use them.
- With `reduce()`, the accumulator must start with the correct type and each iteration must return the updated accumulated value.

## Challenge statistics

| Challenge | Status | Score |
| --- | --- | ---: |
| Study session queue | Not started | - |
| Student results report | Not started | - |
| Car statistics API | Review needed | 4/10 |

- Attempted: 1 of 3
- Complete: 0 of 3
- Completion rate: 0%

## Exercises

| Exercise | Status | File | What I learned |
| --- | --- | --- | --- |
| Array basics | Not started | `exercises/01-array-basics.js` | To complete after the exercise |
| Study session queue | Not started | `exercises/02-study-session-queue.js` | To complete after the challenge |
| Student results report | Not started | `exercises/03-student-results-report.js` | To complete after the challenge |
| Car statistics API | Review needed | `exercises/04-car-stats-api.js` | A server and EJS result page were added, but calculation, route, response, and dependency issues remain |

## Verification

All four starter files pass JavaScript syntax checks.

The latest Challenge 04 attempt was reviewed:

- Correct: total cars, total price, and the dataset's average value.
- Needs correction: city counts, most expensive car, missing cheapest car, average rounding, route path, and plain-text response.
- Added: an Express server entry point, an EJS result page, and an npm start script for the challenge.
- Passed: `node --check` for both JavaScript files.
- Runtime blocker: `npm run challenge:04` fails because Express and EJS are not declared or installed.
- Checkpoint: the learner attempt was preserved in local commit `1edbdfe` without marking the exercise complete.

### Challenge 04 evaluation - 4/10

| Requirement | Point | Result |
| --- | ---: | --- |
| Preserve and use the 12-car dataset | 1 | Passed |
| Calculate total cars | 1 | Passed: `12` |
| Calculate total price and average | 1 | Passed: `1909992` and `159166` |
| Count cars by city | 0 | Failed: every city is one too high |
| Find the most expensive car | 0 | Failed: returns Dacia Logan instead of Toyota C-HR |
| Find the cheapest car | 0 | Missing |
| Implement `GET /cars/stats` | 0 | Failed: current path is `/cars/statistics` |
| Return the required plain-text output | 0 | Failed: renders an EJS page instead |
| Organize the solution into readable methods | 1 | Passed |
| Start and run the endpoint | 0 | Failed: Express is not installed |

The next review will replace this score only after rerunning the full requirement checklist.
