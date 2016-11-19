const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, '../public', 'favion.ico')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports = app;
