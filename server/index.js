// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const app           = express();

app.set("view engine", "ejs");
app.use('/public', express.static('public'));

// Routes

// Landing page and poll creation
app.get("/", (req, res) => {
  res.render("index");
});

// Post request to create poll
app.post("/", (req, res) => {
  res.render("index");
});

// Choice submission page
app.get("/respond", (req, res) => {
  res.render("respond");
});

// Post request to submit choices
app.post("/respond", (req, res) => {
  res.render("respond");
});

// Admin result page
app.get("/result", (req, res) => {
  res.render("result");
});


app.listen(PORT, () => {
  console.log("Susan's decision-maker app is listening on Port " + PORT);
});
