const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const gamesController = require('../controllers/games');

// route = '/games'

// GET games index page
router.get('/', gamesController.index);
// POST add tag to game
router.post('/:id/tags', ensureLoggedIn, gamesController.addTag);
// POST? remove tag from game
router.post('/:gameId/tags/:tagId', ensureLoggedIn, gamesController.deleteTag);
// POST favorite game
router.post('/:id', ensureLoggedIn, gamesController.favorite);


module.exports = router;