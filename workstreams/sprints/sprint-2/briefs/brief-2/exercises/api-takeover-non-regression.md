# 🧪 Non-Regression — Quick Exercise

> ⏱️ **Time:** 5 to 10 minutes

## 💡 Big idea

Non-regression means that behavior which worked before a change must still work after the change.

## 🎯 Scenario

Before adding authentication, `GET /api/courses` returns published courses with HTTP `200`.

After adding authentication, the same request returns HTTP `500`.

Answer briefly:

1. What is the regression in this scenario?
2. Why should we test the route before **and** after the authentication change?
3. Which two results should we record for the request?

## ✅ Completion check

Explain non-regression in one sentence and identify the broken behavior in the scenario.

Do not change code for this exercise.
