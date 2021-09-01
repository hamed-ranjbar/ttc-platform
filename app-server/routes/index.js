const express = require('express')
const router = express.Router()
const ctrlProgram = require('../controllers/programList')

/* GET home page. */
router.get('/', ctrlProgram.programList);
router.get('/:programid', ctrlProgram.programInfo);

module.exports = router;
