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
  const { name } = req.query;
  constind

  console.log("content", name);

  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});




app.get("/", (req, res) => {
  res.send("Hello World!");
});











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
