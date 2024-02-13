const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

//Connect to the database

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const movies = await Movie.find({}, {title: 1})
    const reviews = [
      {
        title: 'A Timeless Classic',
        content: "“I watched this when it was transmitted over Christmas, and then watched in horror as the offended brigade started complaining. Made in 1978, it's the ultimate feel good film, sure it's over the top, it's absurd, and some of the scenes will have you maybe feeling a bit cringe worthy now, but it still remains a great film. As a youngster I watched it frequently, it's funny how some films stick with you, could I really believe in most of them as High school students, well I did back then. It is all about the music, music which is still iconic, and hopefully will be heard at theatres in the not too far off future. Would you make a film the exact same way now, of course not, is it ok to love a film made back in 1978, yes it sure is. Watch for the music, ending, and of course John Travolta. It really is the word. 9/10”",
        rating: '9/10',
        author: 'Sleepin_Dragon',
        createdAt: '23 Janurary 2021',
        movie: movies[0]._id
      },
      {
        title: 'One of Those Films You Can Watch Over and Over Again',
        content: 'Grease is one of those films that I can watch over and over--and I do. Set in the doo-wop fifties, it centers on a group of high school seniors who share the joys and concerns of all teenagers: dating, popularity, first love, the unknown future, fitting in, sexual awakening. The two main characters, Danny (John Travolta) and Sandy (Olivia Newton-John) are the primary love story and the core of a great ensemble cast. One of the best things about this film is the music--a string of sing-able fifties-inspired gems that entertain and advance the narrative. There are also plenty of humor, fine dancing, and numerous references to fifties culture. Saturday Night Fever put Travolta on the track to film stardom and Grease (released the following year) cemented his place among top cinema stars. Both films were co-produced by Robert Stigwood and their soundtracks (On RSO Records)made them huge successes in two genres. Grease is so dense with cultural references and appearances by 50s-era stars, that it takes multiple viewings to appreciate them all. Even Frankie Avalon drops in for a dreamy interlude.',
        rating: '10/10',
        author: 'atlasmb',
        createdAt: '22 June 2017',
        movie: movies[0]._id
      },
      {
        title: 'The Best "High School Musical" of All Time!',
        content: "John Travolta and Olivia-Newton-John lead a terrific ensemble cast. Some critics called the sets cheap and the story childish but the movie-going public knew better. Severely cleaned up from the Broadway Musical Version, it boasts several songs custom-written for ONJ by her favorite tunesmith, John Farrar. Great personalities from the old 1950's include Eve Arden, Sid Caesar, Edd Byrnes, Frankie Avalon, and Joan Blondell. Title opening song sung by Frankie Vallie. The Greasers and their gals were not as clean-cut in real life as they are portrayed in this film. I remember rumbles with knives, but in those days, nobody ever brought guns to school. A stinging parody of American Grandstand and Dick Clark tops off the program with Sha-Na-Na singing their hearts out on glorious black and white TV. The graduation carnival ending is really well-done. Yes, OLJ was sewed into her pants when she comes out as a Greaser in the song You’re the One That I Want. The songs I'm Sandra Dee, Greased Lightnin and Hand Jive are often edited for content and lyrics on broadcast TV and cable. Everything looks real to me, even the chessy food commercials at the drive-in. Some outstanding choreography in the dance numbers. The fantasy ending is fun, also. The yearbook cover doesn't match the closing titles! Otherwise, it's pure joy after 40+ years! Unsurpassed!",
        rating: '10/10',
        author: 'mike48128',
        createdAt: '21 April 2018',
        movie: movies[0]._id
      }
    ]
      await Review.insertMany(reviews)
      console.log("Created some reviews")
  } catch (error) {
    console.error('Error seeding reviews')
  }
}

const run = async () => {
    await main()
    db.close
}

run ()
