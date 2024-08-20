const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let categories = JSON.parse(fs.readFileSync("categories.json", "utf-8"));

async function createNewCategory({ name }) {
  let id = uuidv4();
  categories.push({ id, name });
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  return id;
}

function updateCategories(id, name) {
  const index = categories.findIndex((cat) => cat.id === id);
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories));
}
function deleteCategories(id) {
  const deleteIndex = categories.findIndex((cat) => cat.id == id);
  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));

  return deleteIndex;
}

app.get("/categories", (req, res) => {
  const categories = JSON.parse(fs.readFileSync("categories.json", "utf-8"));
  res.json(categories);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory({ name });
  res.status(201).json({ id, name });
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "name required" });
  } else {
    updateCategories(id, name);
    res.status(205).json({ message: "successful" });
  }
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;

  const deleteIndex = deleteCategories(id);
  if (deleteIndex < 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
