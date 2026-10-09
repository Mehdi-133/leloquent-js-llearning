# 🧠 Brief 2 Concept Roadmap

> 🟡 **Rule:** study one concept at a time. A roadmap entry becomes complete only after Mehdi explains it, completes its exercise, and verifies the required behavior.

## 🧭 Required learning order

| # | Concept | Why the brief needs it | Focused exercise | Current status |
| ---: | --- | --- | --- | --- |
| 1 | API takeover and non-regression | New work must preserve the existing catalog and start from a stable base | [Build and run a baseline smoke-test matrix](../exercises/api-takeover-non-regression.md) for setup, seed, and catalog routes | 🟡 In progress: prediction is next |
| 2 | API contracts, validation, and error flow | Every endpoint needs validated input, consistent JSON, and correct HTTP status codes | Define one response/error matrix and verify it on an existing route | ⬜ Not started |
| 3 | Password authentication and account state | Login must compare a hash safely and reject suspended accounts without leaking details | Test valid, unknown-user, wrong-password, and suspended-user login cases | 🟡 In progress: code exists; behavior check pending |
| 4 | JWT identity and authentication middleware | Private routes need a verified Bearer token and a trusted user identity | Protect a profile endpoint and test missing, malformed, invalid, expired, and valid tokens | 🟡 [JWT lesson ready](./jwt-authentication/); middleware not started |
| 5 | Role authorization and resource ownership | Learners, trainers, and admins have different rights; trainers are limited to their own courses | Create an access matrix, then protect one trainer-owned route | ⬜ Not started |
| 6 | LMS domain modeling, relationships, and ordering | Courses, modules, resources, ownership, status, and order must stay coherent | Review the Mongoose models and justify references, statuses, and compound indexes | 🔁 Review needed: partial models exist |
| 7 | Enrollment invariants and database uniqueness | One learner may join many courses but only one active enrollment per learner-course pair is allowed | Add and test the database-level enrollment rule, including a repeated request | 🔁 Review needed: controller exists; invariant is not enforced by the database |
| 8 | Controlled file uploads and access | Real PDF/image uploads must be constrained, linked to a module, and served only to authorized users | Upload one valid file; reject wrong type/size; verify authorized and unauthorized access | ⬜ Not started |
| 9 | Sequential progress as a state machine | The backend must lock later modules, prevent invalid duplicates, and calculate progress | Model a two-module journey and test allowed and rejected transitions | ⬜ Not started |
| 10 | Trainer reporting and scoped queries | Trainers need learner progress without seeing another trainer's course data | Query one owned course successfully and reject the same query for a foreign course | ⬜ Not started |
| 11 | Behavioral API testing | Critical security and progress rules must be repeatable in Supertest and Postman or Insomnia | Automate the highest-risk authentication, enrollment, and lock scenarios | ⬜ Not started |
| 12 | API documentation and reproducible runtime | Reviewers must be able to understand and restart the API safely | Rebuild from README and `.env.example`, inspect Swagger, and verify API plus MongoDB in Docker | 🟡 In progress: partial Swagger, environment, and Docker setup exist |

## 🛠️ Delivery track

These are required sprint practices, not substitutes for the concepts above:

- Keep `main` stable and separate regressions from new features.
- Maintain named Jira tickets and an explicit responsibility split for Mehdi and Maroua.
- Use focused branches or forks, clear commits, one meaningful pull request per change, and teammate review.
- Keep the README, API documentation, known limitations, and individual contributions current.

## 📚 Book foundations

The local *Eloquent JavaScript* book supports this roadmap with:

- Chapter 6: interfaces and encapsulation for clear model and module responsibilities.
- Chapter 8: debugging, error propagation, and deliberate failure handling.
- Chapter 10: explicit module interfaces and dependencies.
- Chapter 11: asynchronous network, database, and file operations.
- Chapter 18: HTTP methods, headers, responses, and status-code families.
- Chapter 20: Node.js servers, filesystem work, streams, errors, and idempotent HTTP behavior.

Framework rules such as JWT verification, Mongoose indexes, Multer limits, Supertest, Swagger, and Docker must be learned from the brief, the installed libraries, and verified project behavior.

## 💡 Existing reference

[Clerk authentication tools](./clerk-authentication/) remains a useful comparison lesson, but Clerk is not part of the selected implementation because this brief explicitly requires the custom JWT path.
