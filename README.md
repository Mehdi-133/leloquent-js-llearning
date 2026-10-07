# Eloquent JavaScript Learning Workspace

This repository is a learning workspace for *Eloquent JavaScript, Fourth Edition* by Marijn Haverbeke. The local source book is [Eloquent_JavaScript.pdf](./Eloquent_JavaScript.pdf).

The goal is not only to finish the book. The goal is to read code carefully, type and run examples, solve exercises, experiment, explain what was learned, and keep enough context that a future session or another AI tool can continue safely.

## Start here

Every new learning session should read these files in order:

1. [AGENTS.md](./AGENTS.md) - shared rules for Codex, Claude, Cursor, and other assistants.
2. [LEARNING_PLAN.md](./LEARNING_PLAN.md) - the complete 21-chapter roadmap.
3. [PROGRESS.md](./PROGRESS.md) - the long-term progress tracker.
4. [sessions/CURRENT.md](./sessions/CURRENT.md) - the exact handoff from the latest session.
5. The `README.md` inside the current chapter folder.

## Folder structure

```text
.
|-- AGENTS.md                 # Shared instructions for every coding agent
|-- CLAUDE.md                 # Loads the shared instructions in Claude Code
|-- LEARNING_PLAN.md          # Book roadmap and completion criteria
|-- PROGRESS.md               # Persistent learning progress
|-- Eloquent_JavaScript.pdf   # Primary learning source; do not edit
|-- chapters/
|   |-- part-1-language/      # Chapters 1-12
|   |-- part-2-browser/       # Chapters 13-19
|   `-- part-3-node/          # Chapters 20-21
|-- docs/
|   `-- GIT_WORKFLOW.md       # Branch, commit, merge, and tag strategy
|-- notes/
|   |-- GLOSSARY.md           # Concepts explained in the learner's words
|   `-- QUESTIONS.md          # Questions to revisit
|-- playground/               # Small experiments not tied to one exercise
|-- sessions/
|   |-- CURRENT.md            # Current handoff for the next session
|   `-- history/              # Archived handoffs after meaningful milestones
`-- templates/                # Consistent chapter and session files
```

Only the current chapter is scaffolded in detail. A new chapter folder is created from the template when that chapter starts. This avoids dozens of empty folders while keeping the naming and workflow consistent.

## Learning cycle

For each chapter:

1. Read a small section attentively.
2. Type important examples instead of copying them blindly.
3. Predict the result before running the code.
4. Change one thing and observe what changes.
5. Solve the exercises before viewing a full solution.
6. Explain the main ideas in simple words.
7. Run the relevant checks and update the progress and handoff files.

The book itself recommends reading code carefully, writing working solutions, using a real JavaScript interpreter for immediate feedback, and experimenting beyond the exercises. This repository is organized around that advice.

## Challenge review cycle

After every saved challenge attempt:

1. Run syntax, runtime, and behavior checks that fit the challenge.
2. Compare the actual result with every required output.
3. Give a requirement-based score out of 10 and explain lost points.
4. Record the attempt as `Not started`, `In progress`, `Review needed`, or `Complete`.
5. Update the chapter README, `PROGRESS.md`, and `sessions/CURRENT.md`.
6. Sync the verified evaluation to the Notion learning dashboard.

An attempt counts as attempted immediately, but it counts as complete only after all required behavior passes.

## Current position

The current focus is Chapter 4: **Data Structures: Objects and Arrays**, for class presentation preparation. Chapter 1 remains not started. See [the Chapter 4 workspace](./chapters/part-1-language/04-data-structures-objects-arrays/README.md).

## Progress tracking

The repository files are the source of truth. Verified progress is also synchronized to the private [Eloquent JavaScript Learning Hub](https://app.notion.com/p/3f1b01ad599b81bdafe3ed72828af487) inside **Mehdi's Board**. Read [docs/NOTION_SYNC.md](./docs/NOTION_SYNC.md) before updating the Notion trackers.

## Git

Git uses `main` as the default branch and keeps meaningful changes in separate logical commits. Read [docs/GIT_WORKFLOW.md](./docs/GIT_WORKFLOW.md) before creating a checkpoint.
