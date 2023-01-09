const router = require('express').Router();
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
const uuid = require('./helpers/uuid');

router.get('/', (req,res)=> {
    //get all notes from db
    res.json(`GOT YOUR ${req.method} REQUEST`)

    readFromFile('./db/db.json').then((data) => 
        {res.json(JSON.parse(data))}
    );
})

router.post('/', (req,res) => {
    //add a note to the db
    res.json(`GOT YOUR ${req.method} REQUEST`)

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

//BONUS - BE ABLE TO DELETE A NOTE AS WELL
//review line 140 in index.js


module.exports = router;