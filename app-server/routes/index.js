const express = require('express');
const router = express.Router();
const ctrlStream = require('../controllers/stream');
const ctrlEmail = require('../controllers/email')

router.get('/stream', ctrlStream.streamVideo);
router.get('/email', ctrlEmail.sendMail);

module.exports = router;