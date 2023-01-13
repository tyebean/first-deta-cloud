const express = require('express');
const { Deta } = require("deta")
const app = express(); 
const deta = Deta(process.env.X_API_Key)
const db = deta.Base("default-db")

const books = deta.Base('books'); 
const posts = deta.Base('posts');
const coworkers = deta.Base('coworkers'); 


app.get('/', async (req, res) => {
  res.send('Hello World')
});

db.put({
    name: "Geordi",
    title: "Chief Engineer",
    has_visor: true
})

// store objects
// a key will be automatically generated 
db.put({name: "alex", age: 30})

// store simple types
db.put("hello, worlds")
db.put(7)

// "success" is the value and "smart_work" is the key. 
await db.put("success", "smart_work")
await db.put(["a", "b", "c"], "my_abc")

//https://stackoverflow.com/questions/24113226/how-to-set-headers-in-node-js


module.exports = app;