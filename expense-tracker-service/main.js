const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());

const content = fs.readFileSync("categories.json", "utf-8");

const categories = JSON.parse(content);

app.get("/categories/list", (req, res) => {
  res.json(categories);
});

app.get("/categories/create", (req, res) => {
  const { name } = req.query;
  categories.push({ name: name });
  const content = { categories };

  console.log("content", name);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.get("/categories/delete", (req, res) => {
  const { index } = req.query;
  categories.splice(index,1)

  console.log("content",);

  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});


app.get("/categories/edit", (req, res) => {
  const { name } = req.query;
  const { index } = req.query;
  categories[index].name = name;

  console.log("content",);

  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});














app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
