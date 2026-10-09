# 🧪 Login and JWT — Quick Exercises

Each exercise takes about 5 to 10 minutes. Answer without changing code.

## 🔐 Exercise 1 — Password authentication

Three users try to log in:

1. The email and password are correct.
2. The email exists, but the password is wrong.
3. The email and password are correct, but the account is suspended.

Answer briefly:

1. Which HTTP status should each user receive?
2. Why should an unknown email and a wrong password return the same message?
3. Why does the server use `bcrypt.compare()` instead of comparing the submitted password directly with the stored value?

### ✅ Completion check

Explain the difference between invalid credentials and a suspended account.

## 🎟️ Exercise 2 — JWT identity

Consider this decoded JWT payload:

```js
{
  sub: "user-123",
  role: "learner",
  password: "secret123"
}
```

Answer briefly:

1. Which field must be removed, and why?
2. What must the server verify before trusting `sub` and `role`?
3. What should happen when a protected route receives no token?

### ✅ Completion check

Explain why decoding a token is not the same as verifying it.
