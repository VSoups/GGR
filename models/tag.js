const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    name: String,
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game',
    }],
})

module.exports = mongoose.model('Tag', tagsSchema);