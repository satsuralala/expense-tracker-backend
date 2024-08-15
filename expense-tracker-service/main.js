const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());7665
bbbb                  
const content = fs.readFileSync("categories.json", "utf-8");

const categories = JSON.parse(content);

app.get("/categories/list", (req, res) => {
  res.json(categories);
});

app.post("/categories/create", (req, res) => {
  const { name } = req.body;
  categories.push({ 
    id:new Date().toISOString(),
    name:name,
  });

  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});




app.put("/categories/update", (req, res) => {
  const { id, name } = req.body;
  const index=categories.findIndex((cat)=> cat.id===id);
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["success"]);
});


app.delete("/categories/delete", (req, res) => {
  const { id } = req.body;
  categories=categories.filter(cat => cat.id !==id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
});














app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
