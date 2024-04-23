const Review = require('../models/review');
const Game = require('../models/game');

module.exports = {
    new: newReview,
    create,
}

async function create(req, res) {
    // find by 'req.body.game'?
    const game = await Game.findById(req.body.game);
    
    req.body.username = req.user.name;
    req.body.user = req.user._id;
    req.body.game = game._id;
    req.body.avatar = req.user.avatar;
    req.body.gameName = game.name;
    
    const review = await Review.create(req.body);
    try {
        review.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect('/');
}

async function newReview(req, res) {
    const game = await Game.find({});
    res.render('reviews/new', { title: 'GGR: New Review', game });
}