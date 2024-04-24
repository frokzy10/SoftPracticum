const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }
});

const Game = mongoose.model('Game', levelSchema);

module.exports = Game;
