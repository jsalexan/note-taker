const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

// Create class with all the functions to write, read, get, post, and delete notes.
class FSutils {
    write(note) {
        return writeNote('./db/db.json', JSON.stringify(note));
    }

    read() {
        return readNote('./db/db.json', 'utf8');
    }

    getNotes(notes) {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }

// The UUID creates a unique id for each note.
    postNote(note) {
        const { title, text } = note;
       
        const newNote = { 
            title, 
            text, 
            id: uuidv4() 
        };
        
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }

// The ID of the note to be deleted is identified and a new array of notes is created without that note.
    deleteNote(id) {
           return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new FSutils();