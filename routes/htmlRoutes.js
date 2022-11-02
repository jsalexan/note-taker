const express = require('express');
const notesRouter = require('./apiRoutes');
const app = express();

app.use('/notes', notesRouter);

// Get Route: Homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Get Route: Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

//  Wildcard Route: Directs to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

module.exports = app;