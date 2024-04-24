const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const gamesController = require('../controllers/games');

// route = '/games'

// GET games index page
router.get('/', gamesController.index);
// POST add tag to game
router.post('/:id/tags', ensureLoggedIn, gamesController.addTag);
// DELETE? remove tag from game



module.exports = router;