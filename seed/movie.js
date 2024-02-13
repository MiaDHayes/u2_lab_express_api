const db = require('../db')
const Movie = require('../models/movie')

//Connect to the database

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
    {    
        title: 'Grease',
        yearReleased: 1978,
        genre: 'Musical',
        director: 'Randal Kleiser',
        runtime: '1 hour 50 minutes (110 minutes)',
        rating: "7.2/10",
        description: 'The movie follows the summer romance between Danny Zuko (played by John Travolta), the leader of the T-Birds gang, and Sandy Olsson (played by Olivia Newton-John), a new student at Rydell High. After spending a romantic summer together, Sandy unexpectedly transfers to Rydell High, where she reunites with Danny. However, Danny, trying to maintain his cool reputation, acts differently around Sandy than he did over the summer.'
    },
    {
        title: 'Pearl',
        runtime: '1 hour 42 minutes (102 minutes)',
        rating: '7/10',
        yearReleased: 2022,
        description: "In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm."
      },
      {
        title: 'Croods 2',
        runtime: '1 hour 35 minutes (95 minutes)',
        rating: '6.9/10',
        yearReleased: 2020,
        description: "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together."
      }
]
    
    await Movie.insertMany(movies)
    console.log("Created some movies")
}

const run = async () => {
    await main()
    db.close
}

run ()
