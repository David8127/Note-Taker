const router = require('express').Router();

router.get('/', (req,res)=> {
    //get all notes from db
    res.json(`GOT YOUR ${req.method} REQUEST`)
})

router.post('/', (req,res) => {
    //add a note to the db
    res.json(`GOT YOUR ${req.method} REQUEST`)
})

//BONUS - BE ABLE TO DELETE A NOTE AS WELL
//review line 140 in index.js

module.exports = router;