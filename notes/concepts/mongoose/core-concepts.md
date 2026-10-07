# Mongoose Core Concepts

> 🧠 **Big idea:** Mongoose gives a Node.js application a structured way to work with MongoDB.

## 🧱 The three main pieces

- **Schema:** the blueprint containing fields, types, defaults, and validation rules.
- **Model:** the tool used to create, find, update, and delete data.
- **Document:** one record created or retrieved through a model.

```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", userSchema);
const user = await User.create({ name: "Mehdi" });
```

```text
Application → Model → Mongoose → MongoDB
```

## ⚠️ Common trap

A Mongoose schema does not replace API validation or every database constraint. Each layer protects a different boundary.

## 🌐 Web culture

Mongoose is an ODM. It maps application objects to MongoDB documents. The schema belongs to the application, while MongoDB remains the database.

> ✅ **Remember:** schema describes, model operates, document represents one record.
