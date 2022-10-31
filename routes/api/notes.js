// API ROUTES
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const db = require("../../db/db.json");

notes.get('/', (req, res) => {
    readFromFile('../../db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);
 
    const { id, title, text } =req.body;

    if (req.body) {
        const newNote = {
            id,
            title,
            text
        };

        readAndAppend(newNote, '../../db/db.json')
        res.json('Your note was added with MUCH success!');
    } else {
        res.error('Oh no! There was an error adding your beautiful note!');
    }
});

module.exports = notes;