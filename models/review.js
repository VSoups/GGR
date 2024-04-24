const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    avatar: String,
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
        // auto generate enums based on seeded games?
    },
    gameName: String,
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);