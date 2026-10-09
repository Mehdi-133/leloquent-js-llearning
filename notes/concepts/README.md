# Concept Notes

This folder contains reusable review notes that serve more than one activity. Activity-specific concepts live inside their presentation, live-coding, or brief workspace.

## Organization rule

- First check [`workstreams/`](../../workstreams/) to decide whether the concept belongs to a specific activity.
- Use one kebab-case folder here for each shared broad concept.
- Give each concept folder a `README.md` lesson and an `images/` folder following the JWT visual-pack pattern.
- Track every visual in `images/README.md` with its purpose, format, usage location, and verification status.
- Reuse an existing concept folder instead of creating a duplicate.
- Store each discussed subtopic in its own short kebab-case Markdown file.
- Mark an unfinished understanding check as `🟡 In progress` or `🔁 Review needed`; use `✅ Complete` only after the learner explains or applies the concept correctly.
- Match the note length to the concept and the questions discussed during the lesson.
- Follow the Zod note pattern: big idea, short emoji sections, bullet points, common trap, web culture, and one memorable takeaway.
- Consult the relevant local book pages and include a `📖 Eloquent JavaScript foundation` section with the chapter, topic, and printed page range.
- Include a `🧩 MERN connection` section that links the book idea to the relevant MongoDB, Express, React, or Node.js layer.
- If the exact library is not in the book, say that clearly and connect only the underlying JavaScript ideas.
- Start from [`templates/concept-note.md`](../../templates/concept-note.md) for new notes.
- Use only the points, explanations, examples, and warnings needed to review the concept.
- Include a short `Web culture` section connecting the concept to real frontend, backend, API, or database work.
- Use meaningful emojis, short sections, and simple language so every note is easy to scan before a presentation or coding session.
- Explain what each concept image shows and what the learner should understand from it; use exact SVG or Mermaid diagrams for technical flows.
- Update this index whenever a new concept folder is added.
- After a concept is understood, clean and verify its note, then commit and push only the related documentation so it is visible on GitHub.

## Concepts index

| Concept | Notes |
| --- | --- |
| Data structures presentation | [Presentation concepts](../../workstreams/presentations/javascript-data-structures/concepts/) |
| Express validation | [express-validation](./express-validation/) |
| Mongoose | [mongoose](./mongoose/) |
