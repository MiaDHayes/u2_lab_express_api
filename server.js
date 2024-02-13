const express = require('express')
const db = require('./db')
const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log('connected'))

app.get('/', (req, res) => res.send('welcome to my page'))


app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)
app.post('/movies', movieController.createMovie)

app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)
app.put('/actors/:id', actorController.updateActor)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)
app.post('/reviews', reviewController.createReview)