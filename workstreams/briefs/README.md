# 🗃️ Briefs Awaiting Sprint Placement

This folder temporarily holds briefs whose sprint is not confirmed. Briefs with a known sprint belong under `workstreams/sprints/<sprint-name>/briefs/`.

## 🧭 Learning workflow

For every new brief with a confirmed sprint:

1. Create its workspace inside the correct sprint and save the supplied content under `brief-content/`.
2. Analyze the full brief and inspect the existing project baseline.
3. Separate confirmed requirements from assumptions and optional work.
4. Order the required concepts by dependency and risk.
5. Attach one short understanding exercise and one completion check to every concept.
6. Work through one concept at a time and create its detailed lesson only when study begins.
7. Mark a concept complete only after the exercise, behavior, and learner explanation are verified.

Delivery requirements such as Jira, pull requests, documentation, and Docker remain visible, but they do not replace the JavaScript learning concepts.

## Standard structure

```text
brief-name/
├── README.md       # Scope, status, and next step
├── brief-content/  # Supplied brief and source details
├── brief-analysis/ # Plain-language analysis, diagrams, priorities, and risks
├── concepts/       # Technical concepts used in the brief
├── notes/          # Decisions and explanations
├── exercises/      # Short understanding practice
├── feedback/       # Mentor or reviewer evaluations
└── deliverables/   # Verified outputs
```

## Current briefs

| Brief workspace | Official brief source | Status |
| --- | --- | --- |
| [Brief 3](./brief-3/) | ⬜ Link needed | ✅ Validated; improvement practice remains |

> 🔗 When an official brief is provided, link directly to its stable PDF, Drive file, Notion page, Jira item, or school-platform page. Do not substitute a chat summary for the original brief.
