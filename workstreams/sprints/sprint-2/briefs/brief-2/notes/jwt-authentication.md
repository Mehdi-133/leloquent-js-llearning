# 🔐 JWT Authentication — Quick Notes

> 🟡 **In progress** — the JWT foundation exists, but login and protected-route behavior still need verification.

> 🧠 **Big idea:** The server signs a token after verifying the user, and the client sends that token with later protected requests.

## 🔑 Key points

- A JWT identifies the user between API requests.
- It is **signed**, not encrypted; its payload can be read.
- The payload should contain only useful identity data, such as the user ID and role.
- Passwords, password hashes, and secrets never belong in the payload.
- The server must verify the signature and expiration before trusting the token.

## 🔄 Simple flow

- Validate the submitted email and password.
- Find the user and compare the password with `bcrypt.compare()`.
- Check whether the account is active.
- Sign a short-lived token with the private server secret.
- Return the token and safe user data.
- Verify the Bearer token on later protected requests.

## 📖 Eloquent JavaScript foundation

- **Chapter 10 — Modules, printed pages 172–176:** modules expose clear interfaces, declare dependencies, and let applications use packages installed from NPM.
- **Chapter 11 — Asynchronous Programming, printed pages 185–190:** network and database work finishes later, so authentication flows use promises and careful failure handling.
- **Chapter 18 — HTTP and Forms, printed pages 317–322:** requests contain methods, paths, headers, and bodies; responses use status codes; custom headers can carry authentication information.
- **Chapter 20 — Node.js, printed pages 361–369:** Node runs JavaScript servers and gives request handlers access to incoming and outgoing HTTP data.
- JWT and `jsonwebtoken` are not taught directly in the book; they apply these module, HTTP, asynchronous, and Node.js foundations.

## 🧩 MERN connection

- **MongoDB:** load the user, password hash, role, and account status needed by the login decision.
- **Express:** validate credentials, sign the token, and protect later routes with middleware.
- **React:** send authenticated requests and update the interface from safe session state.
- **Node.js:** run the server-side JavaScript that signs and verifies tokens.

## ⚠️ Common trap

- Decoding a token is not the same as verifying it.
- Different errors for an unknown email and a wrong password can reveal which accounts exist.
- Changing the secret on every restart invalidates existing tokens.

## 🌐 Web culture

- APIs commonly send access tokens through `Authorization: Bearer <token>`.
- Authentication answers **who are you?**
- Authorization answers **what are you allowed to do?**

## 🔗 Detailed lesson

- [JWT lesson and visual pack](../concepts/jwt-authentication/)
- [Local book](../../../../../../Eloquent_JavaScript.pdf)

> ✅ **Remember:** verify the user first, sign the smallest useful token, and verify it again on every protected request.
