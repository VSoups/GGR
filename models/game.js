const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    // Steam API's 'appid' property does not capitalize the 'I' in id
    appid: Number,
    name: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    favoritedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }],
});

module.exports = mongoose.model('Game', gameSchema);