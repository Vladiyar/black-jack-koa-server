const {Schema, model} = require('mongoose')

const schema = new Schema({
    isGameStarted: {
        type: Boolean,
        default: false
    },
    gameTurn: {
        type: Number,
        default: 0,
        required: true
    },
    players: {
        type: Array,
        required: true
    },
    card: {
        type: Array,
        required: true
    },
    winner: {
        type: String,
        required: true
    },

})

module.exports = model('Todo', schema)