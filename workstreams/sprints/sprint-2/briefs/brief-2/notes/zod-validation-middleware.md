# Express and Zod Validation Middleware

> 🧠 **Big idea:** Validate incoming data before the controller uses it.

## 🛡️ What the middleware does

- Zod checks whether `req.body` follows the schema.
- `safeParse()` returns a result instead of throwing an error.
- `result.error.issues` contains every validation problem.
- `map()` converts the issues into simple `{ field, message }` objects.

## 🚦 The two possible paths

- ❌ Invalid data: send HTTP `400` with a clear JSON error response.
- ✅ Valid data: save `result.data` in `req.body` and call `next()`.

## 📖 Eloquent JavaScript foundation

- **Chapter 8 — Bugs and Errors, printed pages 136 and 139–146:** tests expose wrong behavior, expected external problems should be handled deliberately, and assertions help reveal programmer mistakes.
- Zod is not taught directly in the book.
- The book foundation is the habit of detecting an invalid value close to where it enters the program and choosing a clear success or failure path.
- `safeParse()` applies that foundation without using an exception for normal validation failure.

## 🧩 MERN connection

- **Express:** middleware validates `req.body` before the controller runs.
- **React:** form validation improves feedback, but the browser cannot replace server validation.
- **MongoDB:** only cleaned, expected values should reach the database operation.
- **Node.js:** the server turns validation failure into a predictable HTTP response instead of continuing with unsafe data.

## ⚠️ Common trap

- Frontend validation is helpful, but it cannot protect an API by itself.
- A user or external client can send requests without using the React interface.

## 🌐 Web culture

- Web teams treat client input as untrusted.
- They validate at the API boundary and return a predictable error format so the frontend can display field errors consistently.

## 🔗 Related learning

- [Brief 2 concept roadmap](../concepts/)
- [Local book](../../../../../../Eloquent_JavaScript.pdf)

> ✅ **Remember:** validate, clean the result, then continue.
