# 🧪 Login and JWT Checkpoints

> 🟡 Work through one checkpoint at a time. Mehdi writes the code; the saved attempt is reviewed and tested before continuing.

## 🔁 Checkpoint 1 — Finish the login schema

Before changing code, answer these questions:

1. Why does registration require at least eight characters while login only requires a non-empty password?
2. Why should the email be trimmed and lowercased?
3. Why should the password not be trimmed?
4. What attack or mistake does `.strict()` help prevent?

Then complete the saved schema attempt:

- [x] Keep `registerSchema` unchanged.
- [x] Accept only `email` and `password`.
- [x] Normalize and validate the email.
- [x] Require a non-empty password.
- [x] Reject unexpected fields with `.strict()`.
- [x] Use consistent required-field messages in the saved attempt.
- [x] Clean the spacing and export indentation in the saved attempt.
- [ ] Run syntax and schema-behavior checks.

## 🟡 Checkpoint 2 — Verify credentials

The controller attempt exists, but it starts only after Checkpoint 1 passes its behavior checks.

- [ ] Explain the saved login controller flow before changing it.
- [x] Retrieve the hidden password only for credential checking in the saved attempt.
- [x] Compare the submitted password with the stored hash in the saved attempt.
- [x] Use the same `401` response for an unknown email and a wrong password in the saved attempt.
- [x] Return `403` for a suspended account with otherwise valid credentials in the saved attempt.
- [ ] Run the four credential and account-status scenarios.

## 🟡 Checkpoint 3 — Issue and inspect the JWT

- [x] Sign the token with the configured secret and expiration in the saved attempt.
- [x] Keep only the user ID and role in the identity claims in the saved attempt.
- [ ] Verify the signature with the configured secret.
- [ ] Confirm that no password or password hash appears in the token or response.

## ⬜ Checkpoint 4 — Protect a route

- Read the Bearer token from the `Authorization` header.
- Reject missing, malformed, invalid, and expired tokens.
- Attach the authenticated identity to the request.
- Test one authenticated route before adding role authorization.

## ✅ Completion rule

A checkpoint becomes complete only after its behavior is run, its important edge cases pass, and Mehdi can explain why the flow is safe.
