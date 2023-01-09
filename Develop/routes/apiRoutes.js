const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

router.get('/', (req,res)=> {
    //get all notes from db
    res.json(`GOT YOUR ${req.method} REQUEST`)

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post('/', (req,res) => {
    //add a note to the db
    res.json(`GOT YOUR ${req.method} REQUEST`)

    readAndAppend(newNote, '../db/db.json');
})

//BONUS - BE ABLE TO DELETE A NOTE AS WELL
//review line 140 in index.js

module.exports = router;