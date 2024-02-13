const Movie = require('../models/movie')
//const Review = require('../models/review')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovieById = async(req, res) => {
    try {
        const {id} = req.params
        const movie = await Movie.findById(id)
        if(movie) {
            return res.json(movie)
        }
        return res.status(400).send('Movie with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createMovie = async (req, res) => {
    try {
        const {title, runtime, rating, yearReleased, description, actors, reviews} = req.body
        const newMovie = new Movie ({
            title,
            runtime,
            rating,
            yearReleased,
            description,
            actors,
            reviews
        })
        const savedMovie = await newMovie.save()
        res.status(201).json(savedMovie)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
}