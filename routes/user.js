const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const User = require('../models/user');
const Review = require('../models/review');
const Game = require('../models/game');

// route: /user

// GET user profile page (index)
router.get('/', ensureLoggedIn, async function(req, res) {
    const user = res.locals.user;
    const reviews = await Review.find({ user: user._id });
    const favoriteGames = await Game.find({ favoritedBy: req.user.id }).populate('tags');

    res.render('user/index', { title: 'GGR: Profile', user, reviews, favoriteGames });
});


module.exports = router;