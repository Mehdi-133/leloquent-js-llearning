# 🧪 API Takeover and Non-Regression

> 🟡 **Concept 1:** understand the existing API before changing feature code.

## 🎯 Goal

Build a trusted baseline that answers two questions:

1. What already works?
2. After a future change, how will we prove that it still works?

## ✍️ Checkpoint 1 — Predict first

Before running anything, answer in your own words:

1. Why is reading the files alone insufficient to prove that the API works?
2. What could go wrong if we add new routes before checking the existing seed and catalog routes?
3. Which result would you record for every API request besides the response body?
4. Why should regression corrections be separated from new features?

Do not move to Checkpoint 2 until these answers have been reviewed.

## ⬜ Checkpoint 2 — Build the baseline matrix

Complete this table with exact commands, URLs, expected results, and observed results.

| Area | Check | Expected result | Observed evidence | Status |
| --- | --- | --- | --- | --- |
| Dependencies | Install or verify packages | Project dependencies are available | Not run yet | ⬜ Not started |
| Environment | Check required variable names without exposing secrets | Required variables are present | Not run yet | ⬜ Not started |
| MongoDB | Start or reach the configured database | API can connect | Not run yet | ⬜ Not started |
| Seed | Run the existing seed | Expected courses, modules, and resources are created | Not run yet | ⬜ Not started |
| Health | Request the root endpoint | API returns its working message | Not run yet | ⬜ Not started |
| Catalog | List published courses | HTTP status and JSON match the existing contract | Not run yet | ⬜ Not started |
| Modules | List modules for one course | Modules are returned in order | Not run yet | ⬜ Not started |
| Resources | List resources for one module | Resources are returned in order | Not run yet | ⬜ Not started |
| Authentication | Replay current register and login routes | Existing behavior is recorded without claiming untested cases | Not run yet | ⬜ Not started |
| Documentation | Open Swagger | Existing documented routes are visible | Not run yet | ⬜ Not started |
| Docker | Start the declared services | API and MongoDB are healthy enough for the same checks | Not run yet | ⬜ Not started |

## ⬜ Checkpoint 3 — Compare and explain

- Separate environment failures from application failures.
- List every preserved, broken, missing, and postponed endpoint.
- Record any mismatch between source code, Swagger, seed data, and live behavior.
- Explain which checks must be repeated after every important feature.

## ✅ Completion rule

This concept is complete only when the baseline can be repeated, the important catalog behavior has live evidence, and Mehdi can explain why the checks protect the sprint from regression.

No feature code should be changed during this exercise.
