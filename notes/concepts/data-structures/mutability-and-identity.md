# Mutability, References, and Object Identity

> 🧠 **Big idea:** Two variables can share one object, so a change made through one variable can appear through the other.

## 🧊 Immutable and mutable values

- Numbers, strings, and Booleans are immutable. Operations create new values.
- Objects and arrays are mutable. Their properties or elements can change.

## 🔗 Shared references

A variable holding an object contains a reference. Assigning it to another variable copies the reference, not the object.

```js
const course = { progress: 20 };
const sameCourse = course;

sameCourse.progress = 75;
console.log(course.progress); // 75
```

## 🪪 Identity and `const`

- `const` prevents variable reassignment; it does not freeze the object.
- `===` checks object identity, not matching property values.
- Two variables are equal only when they reference the exact same object.

```js
const copiedCourse = { ...course };

console.log(course === sameCourse);  // true
console.log(course === copiedCourse); // false
```

## 📦 Shallow copy

`{ ...course }` creates a new outer object, but nested objects can remain shared.

## 🪆 Copying a nested object

Copy every nested level that must change independently:

```js
const original = {
    trainer: {
        name: "Sara"
    }
};

const safeCopy = {
    ...original,
    trainer: {
        ...original.trainer
    }
};

safeCopy.trainer.name = "Ali";

console.log(original.trainer.name); // "Sara"
console.log(safeCopy.trainer.name); // "Ali"
console.log(original.trainer === safeCopy.trainer); // false
```

The later `trainer` property replaces the shared reference created by `...original`.

## ⚠️ Common trap

Object spread copies only one level. It is not an automatic deep clone.

## 🌐 Web culture

- React updates are easier to detect when state is replaced instead of directly mutated.
- Express middleware can modify a shared request object that later middleware receives.
- Mongoose documents are mutable objects that track changes before `save()`.
- JSON sent over HTTP does not preserve object identity, shared references, or methods.

> ✅ **Remember:** copy every level that must change independently.
