
const {startApp}=require("./configs/basic");
const {sql}=require("./configs/database");

const { updateCategories ,deleteCategories, createNewCategory , getCategories} = require("./services/catService");

const app=startApp();




app.get("/categories", async (req, res) => {
  const list =await getCategories();
  res.json(list);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory({ name });
  res.status(201).json({ id, name });
});

app.put("/categories/:id", async(req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "name required" });
    return;
  } 
  await updateCategories(id, name);
  res.sendStatus(204);

});

app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;

  const deleteIndex = deleteCategories(id);
  if (deleteIndex < 0) {
    res.sendStatus(404);
    return;
  } 
  await deleteCategories(id);
  res.sendStatus(204);
});


app.get("/dbtest", async(req, res)=>{
  const result=await sql`select version()`;
  console.log(result);
  res.json({result});
})


