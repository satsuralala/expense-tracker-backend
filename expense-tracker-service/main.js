const { startApp } = require("./configs/basic");
const { sql } = require("./configs/database");

const {
  updateOneCategory,
  deleteOneCategory,
  createNewCategory,
  getCategories,
  getOneCategory,
  createNewTransaction,
  updateOneTransaction,
  getTransactions,
  getOneTransaction,
  deleteOneTransaction,
} = require("./services/catService");

const app = startApp();

app.get("/categories", async (req, res) => {
  const list = await getCategories();
  res.json(list);
});

app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const one = await getOneCategory(id);
  res.json(one);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const { color } = req.body;
  const { icon } = req.body;
  const id = await createNewCategory({ name, color, icon });

  res.status(201).json({ id, name });

 
});

app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const { input } = req.body;
  const { name } = req.body;
  const { color } = req.body;
  const { icon } = req.body;
  if (!name) {
    res.status(400).json({ error: "name required" });
    return;
  }
  await updateOneCategory({ name, color, icon });
  res.sendStatus(204);
});

app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;

  const deleteIndex = deleteOneCategory(id);
  if (deleteIndex < 0) {
    res.sendStatus(404);
    return;
  }
  await deleteOneCategory(id);
  res.sendStatus(204);
});

app.get("/dbtest", async (req, res) => {
  const result = await sql`select version()`;
  console.log(result);
  res.json({ result });
});

// transactons

app.get("/transactions", async (req, res) => {
  const list = await getTransactions();
  res.json(list);
});

app.get("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const one = await getOneTransaction(id);
  res.json(one);
});

app.post("/transactions", async (req, res) => {
  const { amount } = req.body;
  const { input } = req.body;
  const { categoryId } = req.body;
  const { type } = req.body;
  const { date } = req.body;
  const { payee } = req.body;
  const { note } = req.body;
  const id = await createNewTransaction({
    amount,
    categoryId,
    type,
    date,
    payee,
    note,
  });


    res.status(201).json({ type });
 
});

app.delete("/transactions/:id", async (req, res) => {
  const { id } = req.params;

  const deleteIndex = deleteOneTransaction(id);
  if (deleteIndex < 0) {
    res.sendStatus(404);
    return;
  }
  await deleteOneTransaction(id);
  res.sendStatus(204);
});

app.put("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const { input } = req.body;
  const { categoryId } = req.body;
  const { type } = req.body;
  const { date } = req.body;
  const { payee } = req.body;
  const { note } = req.body;

  if (!id) {
    res.status(400).json({ error: "name required" });
    return;
  }
  await updateOneTransaction({ amount, categoryId, type, date, payee, note });
  res.sendStatus(204);
});
