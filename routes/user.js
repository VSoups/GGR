const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const User = require('../models/user');
const Review = require('../models/review');

// route: /user

// GET user profile page (index)
router.get('/', ensureLoggedIn, async function(req, res) {
    const user = res.locals.user;
    const reviews = await Review.find({ user: user._id });
    res.render('user/index', { title: 'GGR: Profile', user, reviews });
});


module.exports = router;