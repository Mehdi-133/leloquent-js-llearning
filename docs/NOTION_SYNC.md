# Notion Progress Sync

The private [Eloquent JavaScript Learning Hub](https://app.notion.com/p/3f1b01ad599b81bdafe3ed72828af487) lives inside **Mehdi's Board**.

It contains:

- [Eloquent JavaScript Chapters](https://app.notion.com/p/8eebb4f6116b452898066d04c0b7131c) - one row for each of the 21 chapters.
- [Eloquent JavaScript Learning Log](https://app.notion.com/p/3166ff34068c4749bdacc063d74cec8e) - one entry for every meaningful, verified progress change.

## Source of truth

The repository remains the source of truth:

- `PROGRESS.md` stores long-term chapter progress.
- `sessions/CURRENT.md` stores the exact handoff and next step.
- The current chapter `README.md` stores completed sections, exercises, discoveries, and checks.

Notion mirrors these files so the learner can see progress from the dashboard.

## When to sync

Sync Notion after meaningful learning or code work has been completed and verified. Do not create a log entry for wording-only changes or unverified attempts.

During an active connected session:

1. Update the current chapter row when its status, focus, next step, or evidence changes.
2. Add one learning-log entry describing what was completed, verification results, what was learned, the next step, and the Git commit when available.
3. Update the learning hub's current-position summary when the current chapter changes.
4. Fetch the changed Notion item and confirm the saved values.

This is immediate session-based synchronization. It is not a background watcher when Codex is closed. If the Notion connection is unavailable, record the pending sync in `sessions/CURRENT.md` and retry it in the next connected session.

## Safety

- Never store Notion credentials or tokens in the repository.
- Never mark work complete without verification.
- Never overwrite unrelated Notion content.
- Keep the local files and Notion values consistent.
