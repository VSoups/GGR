const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    // Steam API's 'appid' property does not capitalize the 'I' in id
    appid: Number,
    name: String,
    favoritedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Game', gameSchema);