const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let categories = JSON.parse(fs.readFileSync("categories.json", "utf-8"));

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.post("/categories", (req, res) => {
  const { name } = req.body;
  categories.push({
    id: new Date().toISOString(),
    name: name,
  });
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = categories.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json(["success"]);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
