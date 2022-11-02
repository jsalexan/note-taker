const notes = require('express').Router();
const fsUtils = require('../helpers/fsUtils')

// Get Route: Retrieves notes
notes.get('/notes', (req, res) => {
    fsUtils
      .getNotes()
      console.log(notes)
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
      // console.log('Error getting notes:')
});

// Post Route: New notes
notes.post('/notes', (req, res) => {
    fsUtils
      postNote(req.body)
      .then(note => res.json(note))
      .catch(err => res.status(500).json(err));
      // console.log('Error posting note:')
});

// Delete Route: By ID
notes.delete('/notes/:note_id', (req, res) => {
    fsUtils
      deleteNote(req.params.note_id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
      // console.log('Error deleting note:');
});

module.exports = notes;