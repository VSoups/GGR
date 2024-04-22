const Review = require('../models/review');
const Game = require('../models/game');

module.exports = {
    new: newReview,
}

async function newReview(req, res) {
    const game = await Game.find({});
    res.render('reviews/new', { title: 'GGR: New Review', game });
}