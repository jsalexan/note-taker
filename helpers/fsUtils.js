const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 


const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class FSutils {
    write(note) {
        return writeNote('db\db.json', JSON.stringify(note));
    }

    read() {
        return readNote('db\db.json', 'utf8');
    }

    getNotes() {
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

    postNote(note) {
        const { title, text } = note;
       
        const newNote = { 
            title, 
            text, 
            note_id: uuidv4() 
        };

        
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }

    deleteNote(note_id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new FSutils();