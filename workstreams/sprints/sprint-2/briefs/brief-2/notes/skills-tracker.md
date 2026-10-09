# 🧭 Brief 2 Authentication Skills Tracker

> Evidence comes from the saved `fondations_API_LMS` files and the earlier reviewed authentication checkpoints.

## 📊 Current skills

| Skill | Status | Verified evidence | Next demonstration |
| --- | --- | --- | --- |
| Design a Mongoose user model for authentication | ✅ Verified | Email, hidden password, role, status, and timestamps were reviewed | Reuse the model correctly during login |
| Validate registration with Zod | ✅ Verified | Strict schema and live `400` behavior were checked | Keep the existing schema unchanged |
| Hash a registration password with bcrypt | ✅ Verified | Registration and the stored bcrypt hash were checked | Explain why hashing happens in one layer only |
| Protect server-owned role and status fields | ✅ Verified | Unexpected fields are rejected and registration forces the learner role | Apply role checks after authentication |
| Configure JWT securely | ✅ Verified | Dependency, placeholders, private secret, expiry, and `.env` ignore rule were checked | Use the configuration during token signing |
| Distinguish Clerk's SDK, CLI, and MCP tools | 🔁 Review needed | The roles of the runtime SDK and development-only tools were discussed and documented | Explain which tool belongs in the Express request path |
| Decide between custom JWT and Clerk | ✅ Verified requirement | The supplied brief explicitly requires JWT with `jsonwebtoken` and bcrypt or bcryptjs | Keep Clerk as comparison knowledge only |
| Validate login input | 🟡 In progress | The saved schema normalizes email, requires a non-empty password, and rejects extra fields | Run syntax and schema-behavior checks |
| Compare login credentials | 🟡 In progress | Saved controller code selects the hidden hash and calls `bcrypt.compare()` | Verify valid, unknown-user, wrong-password, and suspended-user cases |
| Issue and verify a JWT | 🟡 In progress | Saved controller code signs a token; the middleware passed isolated valid, expired, and invalid-token checks | Run the complete login-to-protected-route flow and check response secrecy |
| Protect routes with a Bearer token | 🔁 Review needed | Header parsing, `jwt.verify()`, `req.user`, `next()`, and error branches were reviewed; isolated token checks passed | Test missing and malformed headers, then connect `GET /api/auth/me` |
| Authorize by role and ownership | ⬜ Not started | User stories were identified only | Verify role and resource-ownership rules |

## 🧩 Important distinction

- **Implemented and verified** means saved behavior was checked.
- **Discussed** does not mean the skill is complete.
- **Complete understanding** requires Mehdi to explain the idea and apply it in a checked exercise or project flow.

## 🎯 Current checkpoint

Begin with the non-regression baseline. Then verify the saved login schema and controller before building authentication middleware or authorization.
