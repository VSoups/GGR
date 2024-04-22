const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
    },
    content: String,
    rating: Number,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);