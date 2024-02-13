const Actor = require('../models/actor')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find({})
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getActorById = async(req, res) => {
    try {
        const {id} = req.params
        const actor = await Actor.findById(id)
        if(actor) {
            return res.json(actor)
        }
        return res.status(400).send('Actor with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateActor = async(req, res) => {
    try {
        const {id} = req.params
        const actor = await Actor.findById(id)
        actor.otherMovies.push(req.body.movieId)
        actor.save()
        return res.status(200).json(actor)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllActors,
    getActorById,
    updateActor
}