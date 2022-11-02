const path = require('path');
const app = require('express').Router();

// Get Route: Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
);

// Get Route: Homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html '))
);

//  Wildcard Route: Directs to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/404.html'))
);

module.exports = app;