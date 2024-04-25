const Game = require('../models/game');
const Tag = require('../models/tag');
const Review = require('../models/review');


module.exports = {
    index,
    addTag,
    deleteTag,
    favorite,
    unfavorite,
};

async function unfavorite(req, res) {
    const game = await Game.findById(req.params.gameId);
    await game.favoritedBy.remove(req.params.userId);
    try {
        game.save();
    } catch (error) {
        console.log(error)
    }
    res.redirect('/games');
}

async function favorite(req, res) {
    const game = await Game.findById(req.params.id);
    game.favoritedBy.push(req.user._id);
    try {
        game.save();
    } catch (error) {
        console.log(error);
        res.redirect('/games');
    }
    res.redirect('/games');
}

async function deleteTag(req, res) {
    const game = await Game.findById(req.params.gameId);
    await game.tags.remove(req.params.tagId);
    try {
        game.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect('/games');
}

async function addTag(req, res) {
    const game = await Game.findById(req.params.id);
    // do not add if tag exists
    if (req.body.tags === '' || game.tags.some(tag => tag.equals(req.body.tags))) return res.redirect('/games');
    game.tags.push(req.body.tags);
    try {
        await game.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect('/games');
}

async function index(req, res) {
    const games = await Game.find({}).populate('tags');
    const tags = await Tag.find({});

    res.render('games/index', { title: 'GGR: Games List', games, tags });
}