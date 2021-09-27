const express = require('express')
const router = express.Router()
const ctrlProgram = require('../controllers/programList')

/* GET home page. */
router.get('/', ctrlProgram.programList);
//router.get('/:programid', ctrlProgram.programInfo);
router.get('/stream', ctrlProgram.streamVideo);
module.exports = router;
