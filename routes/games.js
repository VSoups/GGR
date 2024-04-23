const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const gamesController = require('../controllers/games');

// route = '/games'
router.get('/', gamesController.index);


module.exports = router;