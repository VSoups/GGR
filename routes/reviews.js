const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const revController = require('../controllers/reviews');

// route = '/reviews'

// GET review creation page
router.get('/new', ensureLoggedIn, revController.new);
// POST new review
router.post('/', ensureLoggedIn, revController.create);

module.exports = router;
