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
| Decide between custom JWT and Clerk | ⬜ Not started | Clerk was discussed, but the official brief requirement is still missing | Confirm the permitted authentication approach before changing code |
| Validate login input | 🔁 Review needed | Normalization, strict mode, and non-empty password behavior work | Correct messages and formatting, then rerun checks |
| Compare login credentials | ⬜ Not started | No saved `bcrypt.compare()` login flow | Implement and verify generic `401` behavior |
| Issue and verify a JWT | ⬜ Not started | Token design was discussed, but no token response exists | Sign, return, and verify a minimal token |
| Protect routes with a Bearer token | ⬜ Not started | No authentication middleware has been verified | Read and verify the Authorization header |
| Authorize by role and ownership | ⬜ Not started | User stories were identified only | Verify role and resource-ownership rules |

## 🧩 Important distinction

- **Implemented and verified** means saved behavior was checked.
- **Discussed** does not mean the skill is complete.
- **Complete understanding** requires Mehdi to explain the idea and apply it in a checked exercise or project flow.

## 🎯 Current checkpoint

First confirm whether the official brief requires the existing learner-built JWT flow or permits Clerk. If custom JWT remains required, finish and verify the login schema before writing the login controller.
