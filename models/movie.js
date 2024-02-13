const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: String, required: true},
        rating: {type: String, required: true},
        yearReleased: {type: String, required: true},
        description: {type: String, required: true},
        actors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Actor'}],
        reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
        //posterImage: {type: String}
    },
    {timestamps: true}
)


//const Movie = mongoose.model('Movie', movieSchema)
module.exports = mongoose.model('movies', Movie)
//module.exports = Movie
