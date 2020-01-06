// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const app           = express();

app.set("view engine", "ejs");
app.use('/public', express.static('public'));

// Routes

// Landing page
app.get("/", (req, res) => {
  res.render("index");
});

// Poll creation page
app.get("/create", (req, res) => {
  res.render("create");
});

// Post request to create poll
app.post("/create", (req, res) => {
  res.render("create");
});

// Choice submission page
app.get("/submit", (req, res) => {
  res.render("submit");
});

// Post request to submit choices
app.post("/submit", (req, res) => {
  res.render("submit");
});

// Admin result page
app.get("/result", (req, res) => {
  res.render("result");
});


app.listen(PORT, () => {
  console.log("Susan's decision-maker app is listening on Port " + PORT);
});
