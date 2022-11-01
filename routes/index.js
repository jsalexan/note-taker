const express = require('express');

const notesRouter = require('../routes/api/notes');

const app = express();

app.use('../routes/api/notes', notesRouter);

module.exports = app;