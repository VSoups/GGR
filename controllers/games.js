const Game = require('../models/game');


module.exports = {
    index,
};


async function index(req, res) {
    const games = await Game.find({});
    res.render('games/index', { title: 'GGR: Games List', games });
}