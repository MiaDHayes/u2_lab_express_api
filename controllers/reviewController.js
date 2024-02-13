const Review = require('../models/review')
const Movie = require('../models/movie')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewById = async (req, res) => {
    try {
        const {id} = req.params
        const review = await Review.findById(id)
        if(review) {
            return res.json(review)
        }
        return res.status(400).send('Review with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createReview = async (req, res) => {
    try {
        const {title, content, rating, author, movieId} = req.body
        const movie = await Movie.findById(movieId)
        if(!movie) {
            return res.status(404).json({message: 'Movie not found'})
        }
        const newReview = new Review ({
            title, 
            content,
            rating,
            author,
            movie: movieId
        })
        const savedReview = await newReview.save()
        movie.reviews.push(savedReview._id)
        await movie.save()
        res.status(201).json(savedReview)
    } catch (error) {
        console.error('Error creating review', error)
        res.status(500).json({message: "Internal server error"})
    }
}


module.exports = {
    getAllReviews,
    getReviewById,
    createReview
}