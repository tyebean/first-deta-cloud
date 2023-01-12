const express = require('express');

const app = express(); 

app.get('/', async (req, res) => {
  res.send('Hello World')
});

module.exports = app;