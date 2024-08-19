const express = require("express");
const cors = require("cors");
const fs = require("fs");
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let categories = JSON.parse(fs.readFileSync("categories.json", "utf-8"));

async function createNewCategory(form){
  let id=uuidv4();
  form.id=id;
  categories.push(form);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  return id;
}



app.get("/categories", (req, res) => {
  res.json(categories);
});

app.post("/categories", (req, res) => {
  const { name } = req.body;
  const id= await createNewCategory({name});
  res.sendStatus(201).json({id});
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if(!name){
    res.status(400).json({error:"name required"});
    return;
  }
  const index = categories.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));

  } else {
    res.status(404).json({ error: "Category not found" });
  }

});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const deleteIndex=categories.findIndex((cat)=>cat.id==id);

  if(deleteIndex<0){
    res.sendStatus(404);
    return;
  }

  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
