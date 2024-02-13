const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose
    .connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3')
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch(error => {
        console.error('Connection error', error.message)
    })

mongoose.set('debug', true)
const db = mongoose.connection
module.exports = db