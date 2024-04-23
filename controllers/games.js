const Game = require('../models/game');
const Tag = require('../models/tag');
const Review = require('../models/review');


module.exports = {
    index,
};


async function index(req, res) {
    const games = await Game.find({});
    const tags = await Tag.find({});

    res.render('games/index', { title: 'GGR: Games List', games, tags });
}