const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: {type: String, required: true},
        age: {type: String, required: true},
        born: {type: String, required: true},
        lifeStatus: {type: String, required: true},
        character: {type: String, required: true},
        otherMovies: [{type: Schema.Types.ObjectId, ref: "Movie"}]
        //posterImage: {type: String}
    },
    {timestamps: true}
)


//const Actor = mongoose.model('Actor', actorSchema)
module.exports = mongoose.model('actors', Actor)
//module.exports = Actor
