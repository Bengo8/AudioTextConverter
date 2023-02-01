const express = require("express");
const router = express.Router();
const audioController = require('../controllers/audioController');

router.get('/getAudioFileFromText/:text', audioController.getAudioFileFromText);

module.exports = router;