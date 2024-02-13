const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const movieActor = new Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    },
    //role: String // Additional information like actor role in the movie
})

const MovieActor = mongoose.model('MovieActor', movieActorSchema);

module.exports = mongoose.model('MovieActor', movieActor)
