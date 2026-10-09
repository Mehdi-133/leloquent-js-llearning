# Eloquent JavaScript Learning Journey

> 📚 A beginner-friendly learning repository based on *Eloquent JavaScript, Fourth Edition* by Marijn Haverbeke.

This repository documents a real student journey through JavaScript. It contains book study, school activities, exercises, mistakes, mentor feedback, verified progress, and clear next steps.

The goal is not to present a perfect collection of finished solutions. The goal is to show how understanding grows through reading, prediction, practice, testing, correction, and explanation.

> 🌱 **Main direction:** build strong MERN JavaScript skills from *Eloquent JavaScript*. Every studied concept should connect the book's JavaScript foundation to a practical MongoDB, Express, React, or Node.js use.

## 🧭 Find your way

| I want to... | Start here |
| --- | --- |
| See the learner's current position | [Learning progress](./PROGRESS.md) |
| Follow the complete book roadmap | [Learning plan](./LEARNING_PLAN.md) |
| Study the book chapter by chapter | [Chapter index](./chapters/) |
| Explore presentations, live coding, and briefs | [Learning workstreams](./workstreams/) |
| Continue from the latest session | [Current session handoff](./sessions/CURRENT.md) |
| Review shared JavaScript concepts | [Concept notes](./notes/concepts/) |
| See the available learning tools | [Skills guide](./SKILLS.md) |
| Understand the Git workflow | [Git workflow](./docs/GIT_WORKFLOW.md) |
| Help with this repository using an AI tool | [Shared agent instructions](./AGENTS.md) |

## 📍 Current learning snapshot

**Updated:** 2026-10-09

| Area | Current position | Status |
| --- | --- | --- |
| Book path | Chapter 4 — Data Structures: Objects and Arrays | 🟡 In progress |
| Presentation | JavaScript data structures | 🔁 Visual placement, code corrections, and rehearsal needed |
| Live coding | Hotel filters | ⬜ Practice not started |
| School brief | Sprint 2 — Brief 2, binôme with Maroua | 🟡 Full concept roadmap ready; API baseline verification next |

For verified evidence, open [PROGRESS.md](./PROGRESS.md). For the exact next action, open [sessions/CURRENT.md](./sessions/CURRENT.md).

## 🚀 Clone and explore

### Requirements

- [Git](https://git-scm.com/) to clone and manage the repository.
- [Node.js](https://nodejs.org/) to run JavaScript exercises.
- A code editor such as Visual Studio Code, Cursor, or another editor of your choice.

### Get the repository

```bash
git clone https://github.com/Mehdi-133/leloquent-js-llearning.git
cd leloquent-js-llearning
```

Most basic JavaScript exercises can be checked directly with Node.js:

```bash
node --check path/to/exercise.js
node path/to/exercise.js
```

Some activities may need their own dependencies or setup. Read the nearest `README.md` before running them and follow the instructions documented there.

### Recommended reading order

1. Read [AGENTS.md](./AGENTS.md) if you are using an AI coding assistant.
2. Review the [learning plan](./LEARNING_PLAN.md).
3. Check the [current progress](./PROGRESS.md).
4. Read the [current session handoff](./sessions/CURRENT.md).
5. Open the README inside the active chapter or workstream.

## 🗂️ Repository map

```text
.
|-- README.md                 # Public starting point and navigation
|-- AGENTS.md                 # Shared rules for AI coding assistants
|-- CLAUDE.md                 # Loads the shared rules in Claude Code
|-- SKILLS.md                 # Available learning and project skills
|-- LEARNING_PLAN.md          # Complete 21-chapter roadmap
|-- PROGRESS.md               # Verified student progress dashboard
|-- Eloquent_JavaScript.pdf   # Local learning source; do not edit
|-- chapters/                 # Book-learning path
|   |-- part-1-language/      # Chapters 1-12
|   |-- part-2-browser/       # Chapters 13-19
|   `-- part-3-node/          # Chapters 20-21
|-- workstreams/              # School and activity-specific work
|   |-- presentations/        # Concepts, slides, quizzes, and rehearsal
|   |-- live-coding/          # Planning, attempts, reviews, and evidence
|   |-- sprints/              # Sprint folders containing their briefs
|   `-- briefs/               # Briefs whose sprint is not confirmed yet
|-- notes/                    # Shared concepts, questions, and vocabulary
|-- sessions/                 # Current handoff and milestone history
|-- docs/                     # Repository workflows and integrations
|-- templates/                # Reusable chapter and session structures
`-- playground/               # Small experiments without a chapter home
```

## 🎓 How the learning is organized

### Book chapters

[`chapters/`](./chapters/) follows the 21 chapters of *Eloquent JavaScript*. Only active chapters are scaffolded in detail, which keeps the repository focused and avoids empty folders.

### Student workstreams

[`workstreams/`](./workstreams/) connects JavaScript learning to real student activities:

- 🎤 **Presentations** — concepts, slides, audience exercises, quizzes, and rehearsal.
- 💻 **Live coding** — planning, independent attempts, execution, explanation, and review.
- 📋 **Sprints and briefs** — original brief content, technical concepts, small exercises, mentor feedback, and deliverables.

Book chapters show **what is being learned**. Workstreams show **where that knowledge is being applied**.

### Shared notes

[`notes/concepts/`](./notes/concepts/) contains reusable explanations that help more than one chapter or activity. Activity-specific knowledge stays in its workstream so the context remains clear.

Every concept note includes a short **book foundation → MERN connection**. When a library or service is not directly covered by the book, the note says so and links it only to relevant JavaScript foundations.

## 🔁 Learning workflow

Every learning checkpoint follows the same simple cycle:

1. Read a small section or requirement.
2. Predict the result before running the code.
3. Write or update a focused attempt.
4. Run checks and compare the result with the requirement.
5. Explain what worked, what failed, and why.
6. Record only verified progress and one precise next step.

### Status meanings

| Status | Meaning |
| --- | --- |
| ✅ Complete | The required behavior or understanding was verified |
| 🟡 In progress | Work has started but is not ready for final review |
| 🔁 Review needed | An attempt exists, but specific corrections remain |
| ⬜ Not started | No saved, verified attempt exists yet |

Mistakes are kept visible when they are useful learning evidence. An exercise is never marked complete only because code was written.

## 🤝 Working with the repository

Before changing an area:

1. Read its nearest `README.md`.
2. Check [sessions/CURRENT.md](./sessions/CURRENT.md) for unfinished work.
3. Preserve learner-owned attempts and unrelated changes.
4. Keep the change small and inside the correct chapter or workstream.
5. Run the relevant checks before recording progress.
6. Follow [docs/GIT_WORKFLOW.md](./docs/GIT_WORKFLOW.md) for branches and commits.

The `main` branch should contain understandable, verified checkpoints. Commits and pushes require the learner's approval.

## 📊 Progress and external tools

The files in this repository are the public source of truth:

- [PROGRESS.md](./PROGRESS.md) records long-term verified progress.
- [sessions/CURRENT.md](./sessions/CURRENT.md) provides the latest handoff.
- Chapter and workstream READMEs contain local evidence and next steps.

A private Notion learning hub and Google Calendar may mirror selected tasks, but neither is required to understand, clone, or continue the public repository. Integration details are documented in [docs/NOTION_SYNC.md](./docs/NOTION_SYNC.md).

## 📖 Learning source

The local source book is [`Eloquent_JavaScript.pdf`](./Eloquent_JavaScript.pdf). It is used for chapter order, concepts, and exercises and should not be edited, replaced, or redistributed separately from the repository without checking its original licensing terms.
