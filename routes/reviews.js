const express = require('express');
const router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const revController = require('../controllers/reviews');


// GET review creation page
router.get('/new', ensureLoggedIn, revController.new);
// POST new review

module.exports = router;
