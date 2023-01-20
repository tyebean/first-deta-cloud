// * --------- configure app -------------
const express = require('express');
const { Deta } = require("deta")
const deta = Deta(process.env.PROJECT_KEY); // configure your Deta project
const app = express(); // instantiate express
app.use(express.json()) // for parsing application/json bodies

// * --------- cors middleware -------------
const cors = require('cors')
app.use(cors({
  origin: "*",
  methods: "*"
}))

// * --------- access databases -------------
const db = deta.Base("default-db")
const blog_base = deta.Base("blog-base")

// * test
app.get('/', async (req, res) => {
  res.send('Hello World')
});

// * ------------- users -------------
// * create a user
app.post('/users', async (req, res) => {
  const { name, age, hometown } = req.body;
  const toCreate = { name, age, hometown};
  const insertedUser = await db.put(toCreate); // put() will autogenerate a key for us
  res.status(201).json(insertedUser);
})


app.get('/users', async (req, res) => {
  const users = await db.fetch()
  if (users) {
    res.status(200).json({
      "data":users
    })
} else {
    res.status(404).json({"message": "there are no users! add some!"});
}
});

// *  get a specific user
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db.get(id);
  if (user) {
      res.json(user);
  } else {
      res.status(404).json({"message": "user not found"});
  }
});

// * update a specific user
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, hometown } = req.body;
  const toPut = { key: id, name, age, hometown };
  const newItem = await db.put(toPut);
  return res.json(newItem)
});

// * delete a user, does not wait for confirmation
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await db.delete(id);
  res.json({"message": "deleted"})
});

// * ------------- blogs -------------

// * create a blog
app.post('/blogs', async (req, res) => {
  const { title, subtitle, content } = req.body;
  const toCreate = { title, subtitle, content };
  const addBlog = await blog_base.put(toCreate); // put() will autogenerate a key for us
  res.status(201).json(addBlog);
});

module.exports = app;