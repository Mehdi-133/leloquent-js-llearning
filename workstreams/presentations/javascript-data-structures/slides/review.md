# 🔎 Presentation Deck Review

> **Deck:** JavaScript Data Structures
>
> **Slides:** 8
>
> **Status:** 🔁 Review needed before presenting

## 🌟 What already works well

- The yellow, cream, charcoal, and white palette feels professional and consistent.
- Each slide has a clear title and a strong visual hierarchy.
- Dark code cards make the JavaScript examples easy to identify.
- The examples connect data structures to realistic MERN data.
- The final decision framework gives the audience a useful mental model.

## 🛠️ Required code corrections

### Slide 2 — Object

Replace the incorrect closing characters with a closing brace and semicolon:

```js
const user = {
  id: 1,
  name: "Mehdi",
  role: "learner"
};
```

### Slide 4 — Object copy

The copied object must close with `}` instead of `]`:

```js
const updatedLearner = {
  ...learner,
  active: false
};
```

### Slide 5 — Map

`Map` receives an array of key-value pairs, and method calls use parentheses:

```js
const progressByCourse = new Map([
  ["js-101", 75],
  ["node-201", 40]
]);

progressByCourse.get("node-201"); // 40
progressByCourse.has("js-101");  // true
```

### Slide 7 — Method chaining

The callback passed to `filter()` must be inside parentheses:

```js
const visibleTitles = courses
  .filter((course) => course.published)
  .map((course) => course.title)
  .sort();
```

## 💡 Optional presentation improvements

- On slide 8, ask each mini-case before revealing its answer.
- Keep the examples on screen while explaining the data shape, not every symbol.
- Export the corrected deck and inspect every code block at full-screen size.

## ✅ Definition of ready

The deck is ready when the four code corrections are applied, the corrected PDF is exported, and one complete rehearsal fits the available presentation time.
