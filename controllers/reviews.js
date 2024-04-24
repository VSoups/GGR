const Review = require('../models/review');
const Game = require('../models/game');

module.exports = {
    new: newReview,
    create,
    show,
    update,
    delete: deleteReview, 
};

async function deleteReview(req, res) {
    await Review.findOneAndDelete(
        // match post id with selected post and check if user id matches
        {_id: req.params.id, user: req.user.id}
    );
    res.redirect('/user');
}

async function update(req, res) {
    try {
        const updatedReview = await Review.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            // update object with updated properties
            req.body,
            // options object {new: true} returns updated doc
            {new: true}
        );
        return res.redirect('/user');
    } catch (e) {
        console.log(e.message);
        return res.redirect('/user');
    }
}

async function show(req, res) {
    const game = await Game.findById(req.params.id);
    const reviews = await Review.find({ game: `${game._id}` });

    res.render('reviews/show', { title: `GGR: ${game.name}`, game, reviews})
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
    const chosenGame = req.query.game;
    console.log(chosenGame);
    res.render('reviews/new', { title: 'GGR: New Review', game, chosenGame });
}