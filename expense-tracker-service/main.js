const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
const content = fs.readFileSync("categories.json", "utf-8");

let categories = JSON.parse(content);

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.post("/categories/#", (req, res) => {
  const { name } = req.params;
  categories.push({
    id: new Date().toISOString(),
    name: name,
  });

  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.put("/categories/#", (req, res) => {
  const { id, name } = req.params;
  const index = categories.findIndex((cat) => cat.id === id);
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.delete("/categories/#", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
