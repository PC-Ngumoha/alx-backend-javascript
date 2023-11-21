const express = require('express');

const app = express();
const PORT = 1245;

module.exports = app;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT);
