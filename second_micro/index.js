// * --------- configure app -------------
const express = require('express');
const { Deta } = require("deta")
const deta = Deta(process.env.PROJECT_KEY); // configure your Deta project
const db = deta.Base("default-db")  // access your DB
const app = express(); // instantiate express
app.use(express.json()) // for parsing application/json bodies


// test
app.get('/', async (req, res) => {
  res.send('Hello World')
});

// create a user
app.post('/users', async (req, res) => {
  const { name, age, hometown } = req.body;
  const toCreate = { name, age, hometown};
  const insertedUser = await db.put(toCreate); // put() will autogenerate a key for us
  res.status(201).json(insertedUser);
});

// get all users
app.get('/users', async (req, res) => {
  // allUsers = db.fetch()
  // alUsers.forEach(user => {
  //   res.json(user)
  // });
});

// get a specific user
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db.get(id);
  if (user) {
      res.json(user);
  } else {
      res.status(404).json({"message": "user not found"});
  }
});

// update a specific user
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, hometown } = req.body;
  const toPut = { key: id, name, age, hometown };
  const newItem = await db.put(toPut);
  return res.json(newItem)
});

// delete a user, does not wait for confirmation
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await db.delete(id);
  res.json({"message": "deleted"})
});

module.exports = app;