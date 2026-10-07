# Express and Zod Validation Middleware

- 🛡️ **Zod protects the route** by checking whether `req.body` follows the required schema.
- 🔍 **`safeParse()` checks safely** and returns a result instead of crashing the application.
- ⚠️ **`result.error.issues` lists the problems**, including each invalid field and its message.
- 🧹 **`map()` cleans the issues** and transforms them into simple `{ field, message }` objects.
- 🚦 **Invalid data receives HTTP 400**, while valid data is saved in `req.body` before `next()` continues.
