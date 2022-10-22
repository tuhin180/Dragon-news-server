const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const categoriesNews = news.filter((item) => item.category_id === id);
    res.send(categoriesNews);
  }
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((item) => item._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
