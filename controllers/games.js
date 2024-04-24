const Game = require('../models/game');
const Tag = require('../models/tag');
const Review = require('../models/review');


module.exports = {
    index,
    addTag,
};


async function addTag(req, res) {
    const game = await Game.findById(req.params.id);
    // not necessary?
    // const tag = await Tag.findById(req.body.tags);
    console.log(req.body.tags);
    // do not add if tag exists
    if (req.body.tags === '' || game.tags.some(tag => tag.equals(req.body.tags))) return res.redirect('/games');
    game.tags.push(req.body.tags);
    await game.save();
    res.redirect('/games');
}

async function index(req, res) {
    const games = await Game.find({}).populate('tags');
    const tags = await Tag.find({});

    res.render('games/index', { title: 'GGR: Games List', games, tags });
}