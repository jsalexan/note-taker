const express = require('express');

const notesRouter = require('../routes/api/notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;