# Git Workflow

This repository uses a simple workflow designed for one learner working with several AI tools. It keeps history understandable without adding unnecessary process.

## Repository state

- Default branch: `main`
- `main` should contain understandable, verified checkpoints.
- The repository is initialized, but agents must not create commits or push without the learner's explicit request.

## Branch strategy

Create one short-lived branch for a focused unit of work:

| Work | Branch example |
| --- | --- |
| A complete chapter | `learn/chapter-01-values-types-operators` |
| One larger exercise | `exercise/chapter-02-looping-triangle` |
| A project chapter | `project/chapter-07-robot` |
| Documentation | `docs/learning-workflow` |
| A correction | `fix/chapter-03-recursion-example` |

Do not create a branch for every tiny edit. Keep closely related examples, notes, and exercises on the same chapter branch.

## Commit strategy

Each commit should represent one meaningful, working learning checkpoint. Good examples:

```text
docs: create learning workspace
learn(ch01): add number and operator experiments
exercise(ch02): solve looping triangle
test(ch07): verify robot route behavior
fix(ch03): correct recursion base case
```

Before a commit:

1. Review `git status` and `git diff`.
2. Run the checks that match the changed files.
3. Confirm no secret, generated output, or unrelated file is included.
4. Update the chapter notes or handoff when the checkpoint changes learning progress.
5. Ask the learner before committing.

## Merge strategy

- Merge a chapter or project branch only after its completion checklist is satisfied.
- Prefer a normal merge for a full chapter or project so its boundary remains visible in history.
- A tiny documentation or correction branch may be fast-forwarded.
- Resolve conflicts by understanding both versions. Never overwrite another tool's or the learner's work blindly.
- Delete a merged local branch only after the learner asks or approves it.

## Milestone tags

Annotated tags can mark important achievements:

```text
part-1-complete
part-2-complete
book-complete
```

Create a tag only after the learner confirms that milestone.

## Remote repositories

When a GitHub or other remote is added:

- Push feature branches before opening a pull request.
- Use a pull request for projects or large chapter work when review would help.
- Never force-push shared work unless the learner explicitly requests it and understands the effect.
- Do not commit secrets, `.env` files, dependencies, build output, or temporary files.

## Recovery rule

If work from another session is present, inspect it first. Do not use destructive commands such as `git reset --hard` or discard files unless the learner explicitly identifies what may be removed.
