# 🎙️ Slide-by-Slide Rehearsal Guide

> Use this guide to understand the flow. Explain the ideas naturally instead of memorizing a script.

## Slide 1 — The decision comes before the code

**Main idea:** A data structure is a way to organize values so the program can use them clearly.

**Focus:** Introduce the four questions: Is it a list, one entity, a key-value lookup, or a collection of unique values?

**Transition:** Start with the simplest value and progressively add structure.

## Slide 2 — Data has different shapes

**Main idea:** A simple value stores one fact, an array stores an ordered list, an object describes one entity, and an array of objects represents many entities.

**Understanding check:** Why is a course catalogue usually an array of objects instead of one large object?

**Visual explanation:** Point from a simple value to the ordered collection and then to one structured course. The audience should notice that the data shape becomes richer without changing what each structure is responsible for.

**Transition:** When order and repeated operations matter, an array is the natural choice.

## Slide 3 — Array means ordered collection

**Main idea:** Use an `Array` when you need an ordered list that you will display, traverse, filter, transform, or sort.

**Important distinction:** `filter()` keeps matching items; `find()` returns the first matching item.

**MERN connection:** API endpoints commonly return arrays of course or user objects.

**Visual explanation:** In the [Array diagram](../slides/images/array-ordered-collection.svg), read the cards from index `0` to index `3`. The important clue is that position and order matter.

## Slide 4 — Object means one structured entity

**Main idea:** An `Object` groups named properties that belong to one thing, such as one learner or one course.

**Deeper point:** A `const` object can still be mutated; `const` protects the variable binding, not every property. Object spread creates a shallow copy.

**Visual explanation:** In the [Object diagram](../slides/images/object-structured-entity.svg), one `course` contains named properties. The names describe one entity; they are not positions in a list.

**Transition:** Objects are good records, but frequent lookup by a specific key has a clearer dedicated structure.

## Slide 5 — Map means key to value

**Main idea:** A `Map` directly associates a key with a value, such as `courseId → progress`.

**Deeper point:** `get()` retrieves a value, while `has()` checks whether the key exists. This matters when a stored value could be `0`, `false`, or `undefined`.

**Audience question:** If progress is `0`, does that mean the course is missing? No—use `has()` to know.

**Visual explanation:** In the [Map diagram](../concepts/map-key-value-lookups/images/map-lookup-flow.svg), follow the exact key through the lookup index to its value. Then use the lower row to distinguish storing, retrieving, checking existence, and counting.

## Slide 6 — Set means unique values

**Main idea:** A `Set` automatically keeps only one copy of each primitive value.

**Example:** Convert repeated resource categories into a unique category list with `[...new Set(categories)]`.

**Deeper point:** Objects are compared by identity, so two separate objects with identical properties are still different values in a `Set`.

**Visual explanation:** In the [Set diagram](../concepts/set-unique-values/images/set-uniqueness-flow.svg), five primitive category entries become three unique values. Emphasize that the same visual rule does not compare object properties.

## Slide 7 — The operation is not the structure

**Main idea:** Choose the structure first, then choose the operation: traverse, search, filter, sort, transform, or group.

**Key warning:** `sort()` changes the original array. Copy first with `[...courses].sort(...)` when the source must remain unchanged.

**Visual explanation:** In the [operations chart](../concepts/data-operations/images/data-operations-guide.svg), begin with the result question and move across to the method. Pause on the highlighted `sort()` row because it returns the same mutated array.

**Transition:** Finish by turning all the ideas into one decision framework.

## Slide 8 — Make the choice from the need

**Main idea:** Choose `Array` for an ordered list, `Object` for one entity, `Map` for key-value lookup, and `Set` for unique values.

**Mini-case 1:** Repeated resource categories → `Set`.

**Mini-case 2:** Progress for a precise course ID → `Map`.

**Closing message:** A good data structure makes code easier to read, verify, and maintain.

**Visual explanation:** Ask each question in the [decision framework](../slides/images/data-structure-decision-framework.svg) before revealing its answer. The audience should choose from the need: order, one entity, key lookup, or uniqueness.

## 🧪 Rehearsal checklist

- [ ] Explain each slide without reading its text word for word.
- [ ] Define the data shape before naming the structure.
- [ ] Ask the two mini-cases before showing the answers.
- [ ] Explain `Map.has()` versus `Map.get()` clearly.
- [ ] Mention shallow copying and the mutating behavior of `sort()`.
- [ ] Finish with the four-question decision framework.
- [ ] Explain what the audience should notice in every visual.
