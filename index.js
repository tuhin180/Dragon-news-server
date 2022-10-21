const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");

app.use(cors());
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
