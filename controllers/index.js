const Review = require('../models/review');
// probably unnecessary? most likely goes in a game specific controller
const Game = require('../models/game');
const User = require('../models/user');

module.exports = {
    index,
};


async function index(req,res){
    const reviews = await Review.find({});

    res.render('index', { title: 'Good Game Reviews', reviews, });
}