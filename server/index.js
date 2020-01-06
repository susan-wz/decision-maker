// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const app           = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Susan's decision-maker app is listening on Port " + PORT);
});
