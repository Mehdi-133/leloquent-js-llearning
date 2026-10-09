# 📋 Sprint 2 Brief Analysis

> 🟡 **Status:** the requirements and current code baseline are mapped. Runtime verification is still required before feature work.

## 🎯 Brief goal

Take over the existing LMS API without regression, secure it for learners, trainers, and administrators, and add the backend learning flow: course ownership, enrollment, protected resources, strict sequential progress, trainer reporting, tests, documentation, and a reproducible runtime.

## ✅ Confirmed boundaries

| Area | Confirmed requirement |
| --- | --- |
| Dates | Start 2026-10-05; deadline 2026-10-16 |
| Team | Binôme; Mehdi and Maroua |
| Stack | Node.js, Express, MongoDB, and Mongoose |
| Authentication | bcrypt or bcryptjs plus JWT with `jsonwebtoken` |
| Roles | `learner`, `trainer`, and `admin`; public registration always creates a learner |
| Content | Trainer-owned courses with ordered modules and associated resources |
| Upload | Real, controlled local upload or an equivalent documented solution |
| Enrollment | Many courses per learner; only one active enrollment for the same learner-course pair |
| Progress | Strict backend-controlled sequence with accessible, locked, in-progress, and completed states |
| Verification | Postman or Insomnia scenarios plus focused automated tests |
| Documentation | Swagger/OpenAPI or equivalent, README, `.env.example`, and known limitations |
| Runtime | Dockerfile or Docker API plus MongoDB |
| Collaboration | Named tickets, visible individual contributions, stable `main`, focused PRs, and teammate review |

## 🔎 Current API baseline

This is a read-only code inspection, not runtime proof.

### Already present

- Express server with separate models, controllers, routes, middleware, and Swagger configuration.
- Mongoose models for `User`, `Course`, `Module`, `Resource`, and `Enrollment`.
- Public registration with a server-owned learner role and bcrypt hashing.
- Login code with hidden-password selection, `bcrypt.compare()`, suspended-account rejection, and JWT signing.
- Published-course listing, course detail, ordered module listing, and ordered resource listing.
- A basic enrollment controller.
- Partial Swagger documentation, `.env.example`, Dockerfile, and Docker Compose with MongoDB.

### Needs verification or correction

- The saved login and login schema need behavior checks before they can be marked complete.
- No authentication or role-authorization middleware was found in the inspected files.
- The enrollment route expects `req.user.id`, but the inspected route does not attach an authenticated user first.
- `Enrollment` has no database-level rule preventing duplicate active learner-course pairs.
- Courses do not yet record trainer ownership.
- Course, module, and resource management endpoints are incomplete.
- Resource upload is not implemented; Multer is not listed as a dependency.
- No progress model or sequential-locking flow was found.
- No trainer reporting endpoints or ownership checks were found.
- No focused automated test setup was found in `package.json`.
- Swagger covers only part of the API, and the root README is still empty.

## ⚠️ Highest-risk rules

1. **Authentication before enrollment:** `req.user` must come from a verified token, never from client-supplied identity.
2. **Role plus ownership:** being a trainer is insufficient; the trainer must own the course unless the requester is an admin.
3. **Database-backed uniqueness:** an application-level duplicate check alone can fail under concurrent requests.
4. **Sequential progress:** the server must derive access from stored completion state, not trust a client-provided percentage or unlocked flag.
5. **Upload safety:** file type, size, generated filename, storage path, module linkage, and download authorization all need controls.
6. **Regression safety:** catalog routes and seed data must still work after private LMS behavior is added.

## 🧩 Dependency order

```text
Stable API baseline
  -> response and error contracts
  -> password login
  -> JWT authentication
  -> roles and ownership
  -> coherent course/module/resource models
  -> enrollment invariant
  -> protected uploads
  -> sequential progress
  -> trainer reporting
  -> critical scenario tests
  -> complete documentation and reproducible runtime
```

## 🛠️ Delivery obligations

- Record the preserved, modified, removed, and postponed endpoints.
- Keep regression fixes separate from new features.
- Justify implementation-driven differences from the Brief 1 UML.
- Keep Jira tickets, individual ownership, branches or forks, PRs, reviews, README, and known limitations current.
- Treat refresh tokens, advanced Zod coverage, progress summary endpoints, cloud storage, expanded coverage, structured logs, and advanced pagination as bonuses only after the mandatory foundation is verified.

## 🎯 First checkpoint

Create a baseline matrix for installation, MongoDB, seed execution, catalog routes, current authentication routes, Swagger, and Docker. Run the checks and record exact results before changing feature code.
