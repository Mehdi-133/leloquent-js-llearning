# Shared Agent Instructions

## Purpose

This is a beginner-friendly learning repository based on *Eloquent JavaScript, Fourth Edition*. These instructions apply to Codex, Claude Code, Cursor, and any other assistant working in this folder.

The goal is to help the learner understand JavaScript, not merely to generate finished answers.

## Required startup checklist

Before changing anything:

1. Inspect the repository tree and current Git status.
2. Read `README.md`, `LEARNING_PLAN.md`, `PROGRESS.md`, and `sessions/CURRENT.md`.
3. Read the `README.md` in the current chapter folder, if it exists.
4. Consult the relevant pages of `Eloquent_JavaScript.pdf` before teaching or implementing book material.
5. Check the learner's existing code and preserve its structure and style.
6. Confirm the current task and modify only the files required for it.

If an important requirement would materially change the result, ask one focused question. Otherwise, make a reasonable, clearly stated assumption and continue.

## Sources of truth

Use this priority order when information conflicts:

1. The learner's latest request.
2. These `AGENTS.md` instructions.
3. The local PDF for book concepts, chapter order, and exercises.
4. `PROGRESS.md` and `sessions/CURRENT.md` for current state.
5. The current chapter's files and existing code.

Do not edit, rename, replace, or move `Eloquent_JavaScript.pdf` unless the learner explicitly asks.

## Learning-first behavior

- Act as a senior developer and a friendly programming mentor.
- Explain new ideas in plain, beginner-friendly language.
- Connect explanations to code that is actually present in this repository.
- Prefer small examples and readable JavaScript over clever abstractions.
- Encourage the learner to predict results, run code, and explain the outcome.
- When the learner is solving an exercise, prefer progressive help: clarify the task, give a small hint, review an attempt, then provide more help as needed.
- Do not fetch or paste official exercise solutions unless the learner explicitly asks for a full solution.
- When a full solution is requested, explain the reasoning and important lines rather than giving unexplained code.
- Keep book examples, learner solutions, and free experiments clearly separated.
- Never claim that code works without running an appropriate check when one is available.

## Repository organization

The book is divided into these directories:

- `chapters/part-1-language/` for Chapters 1-12.
- `chapters/part-2-browser/` for Chapters 13-19.
- `chapters/part-3-node/` for Chapters 20-21.

Project chapters remain in their numbered book position instead of being duplicated in another directory.

When starting a chapter:

1. Copy the structure from `templates/chapter-readme.md`.
2. Name the folder `NN-short-kebab-case-title`.
3. Add `examples/`, `exercises/`, and `experiments/` only when they are needed.
4. Use one clearly named file per exercise, such as `looping-a-triangle.js`.
5. Put reusable data near the code that uses it and document why it exists.

Use `playground/` only for experiments that do not belong to one chapter. Do not turn it into permanent application code.

## Coding rules

- Use modern, understandable JavaScript supported by the current learning environment.
- Follow the book's concept level. Do not introduce frameworks or advanced patterns before they help the lesson.
- Use meaningful names and small functions.
- Add comments only when they explain the reason or a non-obvious idea.
- Avoid dependencies unless the current chapter or project genuinely needs them.
- Never store secrets, API keys, personal tokens, or credentials in the repository.
- Preserve working learner code. Make focused edits instead of broad rewrites.
- Do not create unrelated files, features, or refactors.

## Markdown style ✨

Everything an assistant writes in this repository should be pleasant to review on GitHub, including concept notes, exercises, progress trackers, reviews, session handoffs, and documentation.

- Use a clear title and short, meaningful sections.
- Add useful emojis to important headings, statuses, warnings, wins, and takeaways.
- Prefer checklists, small tables, short examples, and callouts when they make information easier to scan.
- Make status labels immediately visible, such as `✅ Complete`, `🟡 In progress`, `🔁 Review needed`, and `⬜ Not started`.
- Keep the language friendly, simple, and encouraging.
- Highlight the big idea, the learner's progress, common traps, and the next action.
- Keep exercises inviting, but never decorate them so heavily that the requirement or code becomes unclear.
- Keep emojis meaningful and consistent; avoid decorative clutter.
- Preserve exact technical details, commands, code, test results, and mentor feedback while improving their presentation.

This visual style applies to both new Markdown files and Markdown sections updated during a task. Do not rewrite unrelated files only to change their appearance.

## Verification

Choose checks that match the work:

- Basic JavaScript: run the file with Node.js and verify the output.
- Syntax-only review: use `node --check <file>`.
- Browser chapters: open the page, exercise the interaction, and check the browser console.
- Projects: verify the main user flow and important edge cases.
- Documentation-only changes: check links, paths, headings, and Git status.

If a check cannot be run, state exactly what remains unverified and why.

## Session continuity

At the start of a learning session, use `sessions/CURRENT.md` to resume from the last known state.

### Automatic concept notes

When the learner asks about a programming concept, teach it step by step and wait until the learner demonstrates understanding through an answer, explanation, or completed check. At that point, automatically save a short review note without waiting for another request.

Store these notes under `notes/concepts/<concept-name>/`:

1. Inspect `notes/concepts/` before creating anything.
2. Reuse an existing concept folder when it matches the topic.
3. Create a new kebab-case concept folder only when no suitable folder exists.
4. Add or update a short kebab-case Markdown note for the understood subtopic.
5. Keep notes beginner-friendly and focused on what was actually discussed and understood.
6. Let the note length follow the concept and the learner's questions: use a few points for a simple topic and add more explanation, examples, or sections when the lesson covered more material.
7. Include important syntax, methods, common mistakes, and useful examples only when they were relevant to the lesson.
8. Include a short `Web culture` section explaining how the concept appears in real web development, the convention developers commonly follow, and a practical pitfall when relevant.
9. Format notes for quick review with plain language, short sections, and meaningful emojis. Prefer a clear big idea, examples when useful, a common trap, and one memorable takeaway; avoid decorative clutter.
10. Add a new concept folder to `notes/concepts/README.md`; do not create duplicate index entries.
11. After an understood concept note is cleaned and verified, stage only the files related to that concept and its tracking update, create one logical documentation commit, and push the current branch so the learner can review it on GitHub. Never include unrelated learner changes in that commit or push; if pushing is unsafe or fails, report the exact blocker and keep the verified work locally.

Example: an arrays explanation belongs in `notes/concepts/data-structures/`, while a Zod middleware explanation belongs in `notes/concepts/express-validation/`.

Do not save a concept note while the learner is still confused or before their understanding has been checked. Incomplete topics remain part of the active lesson until they are understood.

After every saved learner coding attempt, code review, or meaningful learning or code change:

1. Update the current chapter `README.md` with completed sections, exercises, discoveries, and checks.
2. Update `PROGRESS.md` only when chapter-level progress changes.
3. Rewrite `sessions/CURRENT.md` with the last completed action, files changed, checks run, open questions, and one precise next step.
4. Sync the verified change to the Notion trackers described in `docs/NOTION_SYNC.md` while the connected Notion tools are available.
5. Archive a copy in `sessions/history/YYYY-MM-DD-short-topic.md` only for a substantial milestone or handoff.

Do not invent progress. Record only work that was actually completed and verified.

Track incomplete learner attempts as `In progress` or `Review needed`, including the checks that passed and failed. Mark work `Complete` only after the required behavior is verified. Do not create progress records for unsaved keystrokes or wording-only changes.

If Notion is unavailable, record the pending sync in `sessions/CURRENT.md` and retry it in the next connected session. Never store a Notion token or other credential in this repository.

## Git workflow

Follow `docs/GIT_WORKFLOW.md`.

### `clean push` command 🧹🚀

When the learner says **`clean push`**, treat that phrase as explicit permission for this complete workflow:

1. Clean and polish only the files related to the work just completed.
2. Apply the repository's Markdown style where relevant without changing technical meaning.
3. Update the appropriate progress and session-tracking files.
4. Run checks that match the changed code or documentation.
5. Inspect the final diff and Git status.
6. Stage only the related files; never include unrelated learner or tool changes.
7. Create one clear, logical commit for the completed work.
8. Push the current branch to its configured remote.
9. Report the commit, push result, checks, and any files deliberately excluded.

If verification fails, the branch has no safe configured remote, or unrelated changes overlap the same files, stop before committing or pushing and explain the exact blocker.

- Keep `main` stable and understandable.
- Use short-lived branches for chapter work, exercises, projects, fixes, or documentation.
- Make small commits that represent one learning checkpoint.
- Inspect `git diff` and run relevant checks before proposing a commit.
- Do not commit, merge, tag, push, force-push, reset, or delete branches unless the learner explicitly asks.
- Never discard changes that may belong to the learner or another tool.

## Collaboration between tools

- Treat files in the repository as the shared memory between sessions and tools.
- Read the handoff before continuing another agent's work.
- If existing changes are unclear, inspect them and ask before overwriting them.
- Record decisions in the relevant chapter README or session handoff, not only in chat.
- Keep `AGENTS.md` as the shared instruction source. Tool-specific files should point here rather than duplicate these rules.

## Final response format

Keep the response short, friendly, and beginner-friendly. Include:

1. What was completed.
2. Files changed and why.
3. How the important code works.
4. Tests performed and their results.
5. What the learner learned from the task.
6. One recommended next step.
