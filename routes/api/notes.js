// API ROUTES
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../helpers/fsUtils');
const db = require("../../db/db.json");

notes.get('/', (req, res) => {
    readFromFile('../../db/db.json').then((data) => res.json(JSON.parse(data)));
    console.log('Error parsing JSON:', error, data);
});

notes.get('/:note_id', (req, res) => {
    const noteId = req.params.tip_id;
    readFromFile('../../db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
          ? res.json(result)
          : res.json('Uh oh, there is no note with that ID!');
      });
  });

notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('../../db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id !== noteId);

        writeToFile('../../db/db.json', result);

        res.json(`Note ${noteId} has been deleted.`);
    });
});

notes.post('/', (req, res) => {
    console.log(req.body);
 
    const { title, text } =req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            noteId: uuidv4(),
        };

        readAndAppend(newNote, '../../db/db.json')
        res.json('Your note was added with MUCH success!');
    } else {
        res.error('Oh no! There was an error adding your beautiful note!');
    }
});

module.exports = notes;