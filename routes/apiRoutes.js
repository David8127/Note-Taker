const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
  //get all notes from db
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
  //add a new note to the db
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      text,
      title,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting your new note');
  }

});

//Delete route for specific note
router.delete('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Create a new array of all notes except the one with the ID provided in the URL
      const updateNote = json.filter((note) => note.note_id !== noteId);
      // Save that array in db
      writeToFile('./db/db.json', updateNote);

      // Respond to the DELETE request
     res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});


module.exports = router;