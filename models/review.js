const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        rating: {type: String, required: true},
        author: {type: String, required: true},
        createdAt: {type: Date, default: Date.now },
        movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true}
        //posterImage: {type: String}
    },
    {timestamps: true}
)


module.exports = mongoose.model('reviews', Review)