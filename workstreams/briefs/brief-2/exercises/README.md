# 🧪 Brief 2 Exercise Roadmap

Focused practice for Sprint 2 — Brief 2 is completed progressively, one verified checkpoint at a time. Mehdi attempts the active exercise before receiving a full correction.

## 🧭 Planned exercises

| Concept | Exercise | Completion evidence | Status |
| --- | --- | --- | --- |
| API takeover and non-regression | [Baseline and non-regression check](./api-takeover-non-regression.md) | Repeatable commands plus recorded status and response checks | 🟡 In progress: prediction is next |
| API contracts and errors | Build a success/failure response matrix for one route | Valid input and important invalid inputs return the agreed JSON and HTTP codes | ⬜ Not started |
| Password authentication | [Login and JWT checkpoints](./login-jwt-checkpoints.md), Checkpoints 1 and 2 | Schema plus four credential/account scenarios pass | 🟡 In progress |
| JWT authentication | [Login and JWT checkpoints](./login-jwt-checkpoints.md), Checkpoints 3 and 4 | Token payload is safe and one private route handles five token cases | 🟡 In progress |
| Roles and ownership | Build an access matrix and protect one trainer-owned endpoint | Learner/trainer/admin and foreign-owner cases match the matrix | ⬜ Not started |
| Domain models and ordering | Review model relations, statuses, ownership, and ordering constraints | Each rule is explained and checked against sample documents | ⬜ Not started |
| Enrollment invariants | Attempt the same active enrollment twice | First request succeeds; repeated or concurrent duplicate is rejected consistently | ⬜ Not started |
| Controlled upload | Upload one accepted and two rejected files | Linkage, type/size limits, path safety, and access control are verified | ⬜ Not started |
| Sequential progress | Walk through a two-module course | Locked access fails; valid completion unlocks the next module; percentage is correct | ⬜ Not started |
| Trainer reporting | Read progress for owned and foreign courses | Owned data succeeds; foreign data is refused without leakage | ⬜ Not started |
| Behavioral tests | Automate the highest-risk brief scenarios | Focused Supertest suite and Postman/Insomnia collection replay successfully | ⬜ Not started |
| Documentation and runtime | Restart the stack from documentation | README, Swagger, environment example, API container, and MongoDB are verified | ⬜ Not started |

Detailed exercise files will be created when their concept starts. This keeps the workspace useful and avoids empty scaffolding.
