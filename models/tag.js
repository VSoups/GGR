const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    name: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Tag', tagsSchema);