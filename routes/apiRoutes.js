const notes = require('express').Router();
const fsUtils = require('../helpers/fsUtils')

// Get Route: Retrieves notes
notes.get('/notes', function (req, res) {
    fsUtils
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
      
});

// Post Route: New notes
notes.post('/notes', function (req, res) {
    fsUtils
      .postNote(req.body)
      .then(note => res.json(note))
      .catch(err => res.status(500).json(err));
      
});

// Delete Route: By ID
notes.delete('/notes/:id', function (req, res) {
    fsUtils
      .deleteNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
      
});

module.exports = notes;