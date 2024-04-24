const Game = require('../models/game');
const Tag = require('../models/tag');
const Review = require('../models/review');


module.exports = {
    index,
    addTag,
    deleteTag,
    favorite,
};

async function favorite(req, res) {
    const game = await Game.findById(req.params.id);
    

}

async function deleteTag(req, res) {
    // console.log(req.params.gameId); // correct
    // console.log(req.params.tagId) // correct
    const game = await Game.findById(req.params.gameId);
    const tagIndex = await game.tags.indexOf(req.params.tagId);
    await console.log(tagIndex);
    await game.tags.splice(tagIndex, 1);
    await game.save();
    res.redirect('/games');
}

async function addTag(req, res) {
    const game = await Game.findById(req.params.id);
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