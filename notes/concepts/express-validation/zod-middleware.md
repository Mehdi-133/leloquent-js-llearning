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

## ⚠️ Common trap

Frontend validation is helpful, but it cannot protect an API by itself. A user or external client can send requests without using the frontend.

## 🌐 Web culture

Web teams treat client input as untrusted. They validate at the API boundary and return a predictable error format so the frontend can display field errors consistently.

> ✅ **Remember:** validate, clean the result, then continue.
