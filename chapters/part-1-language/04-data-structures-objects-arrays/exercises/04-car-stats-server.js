import express from "express";
import { fileURLToPath } from "node:url";
import carsRouter from "./04-car-stats-api.js";

const app = express();
const port = 3000;
const viewsDirectory = fileURLToPath(new URL("./views", import.meta.url));

app.set("view engine", "ejs");
app.set("views", viewsDirectory);

app.get("/", (req, res) => {
  res.redirect("/cars/statistics");
});

app.use("/cars", carsRouter);

app.listen(port, () => {
  console.log(`Challenge 04 is running at http://localhost:${port}`);
});
