# 🧯 Slide Errors and Mistakes

> **Presentation:** JavaScript Data Structures
>
> **Slides checked:** 8
>
> **Current result:** 🟡 4 slides are ready and 4 slides need a small code correction.

## 📊 Quick overview

| Slide | Topic | Result | Action |
| --- | --- | --- | --- |
| 1 | Introduction | ✅ Ready | None |
| 2 | Data shapes | ❌ Syntax error | Fix the object closing characters |
| 3 | Array | ✅ Ready | None |
| 4 | Object and copying | ❌ Syntax error | Replace `]` with `}` |
| 5 | Map | ❌ Multiple syntax errors | Fix the constructor and method calls |
| 6 | Set | ✅ Ready | None |
| 7 | Data operations | ❌ Syntax error | Fix the `filter()` call |
| 8 | Decision framework | ✅ Ready | Reveal answers after asking the group |

## ❌ Slide 2 — Incorrect object ending

### The mistake

The object ends with `);`. An object literal must close with a curly brace.

### ✅ Correct version

```js
const user = {
  id: 1,
  name: "Mehdi",
  role: "learner"
};
```

> 🧠 **Remember:** `{}` defines an object, while `()` is commonly used for function calls.

## ❌ Slide 4 — Array bracket used for an object

### The mistake

The copied object ends with `];`, but it was opened with `{`.

### ✅ Correct version

```js
const updatedLearner = {
  ...learner,
  active: false
};
```

> 🧠 **Remember:** Opening and closing symbols must match: `{}` for objects and `[]` for arrays.

## ❌ Slide 5 — Incorrect `Map` syntax

### The mistakes

- `new Map` must receive its entries inside parentheses.
- Each entry is a two-item array: `[key, value]`.
- `get()` and `has()` are method calls, so they use parentheses—not curly braces.

### ✅ Correct version

```js
const progressByCourse = new Map([
  ["js-101", 75],
  ["node-201", 40]
]);

progressByCourse.get("node-201"); // 40
progressByCourse.has("js-101");  // true
```

> 🧠 **Remember:** `Map` stores `[key, value]` pairs and its methods are called with `()`.

## ❌ Slide 7 — Missing parenthesis in `filter()`

### The mistake

The callback is not fully wrapped inside the `filter()` method call.

### ✅ Correct version

```js
const visibleTitles = courses
  .filter((course) => course.published)
  .map((course) => course.title)
  .sort();
```

> 🧠 **Remember:** Every array method receives its callback inside parentheses.

## 💡 Optional presentation improvement

On slide 8, ask the two mini-cases first and reveal the answers afterward. This turns the final slide into an audience activity instead of showing the solution immediately.

## ✅ Final correction checklist

- [ ] Fix the object ending on slide 2.
- [ ] Fix the copied-object ending on slide 4.
- [ ] Fix the `Map` syntax on slide 5.
- [ ] Fix the `filter()` syntax on slide 7.
- [ ] Export a new PDF from Canva.
- [ ] Check every code block at full-screen size.
- [ ] Replace the old PDF in this folder.

## 🏁 Ready-to-present rule

The presentation is ready when every checklist item is complete and all code examples can be copied into JavaScript without a syntax error.
