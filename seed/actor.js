const db = require('../db')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        {name: 'John Travolta',
        age: 69,
        born: '18 February 1954',
        lifeStatus: 'Alive',
        character: 'Danny Zuko',
        otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'Pulp Fiction', yearReleased: 1994 },
            // { name: 'Saturday Night Fever', yearReleased: 1977 },
            // { name: 'Face/Off', yearReleased: 1997 },
            // { name: 'Hairspray', yearReleased: 2007 }
          ]
        },
        {
          name: 'Olivia Newton- John',
          age: 73,
          born: '26 September 1948',
          lifeStatus: 'Deceased',
          character: 'Sandy Olsson',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'Xanadu', yearReleased: 1980 },
            // { name: 'Two of a Kind', yearReleased: 1983 },
            // { name: 'A Christmas Romance', yearReleased: 1994 },
            // { name: 'Toomorrow', yearReleased: 1970 }
          ]
        },
        {
          name: 'Stockard Channing',
          age: 79,
          born: '13 February 1944',
          lifeStatus: 'Alive',
          character: 'Betty Rizzo',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'The First Wives Club', yearReleased: 1996 },
            // {
            //   name: 'To Wong Foo, Thanks for Everything! Julie Newmar',
            //   yearReleased: 1995
            // },
            // { name: 'Six Degrees of Separation', yearReleased: 1993 },
            // { name: 'Practical Magic', yearReleased: 1998 }
          ]
        },
        {
          name: 'Didi Conn',
          age: 72,
          born: '13 July 1951',
          lifeStatus: 'Alive',
          character: 'Frenchy',
        //   otherMovies: [
        //     { name: 'Grease 2', yearReleased: 1982 },
        //     { name: 'You Light Up My Life', yearReleased: 1977 },
        //     { name: 'Shelter', yearReleased: 2023 },
        //     {
        //       name: 'Raggedy Ann & Andy: A Musical Adventure',
        //       yearReleased: 1977
        //     }
        //   ]
        },
        {
          name: 'Jeffrey Connaway',
          age: 60,
          born: '5 October 1950',
          lifeStatus: 'Deceased',
          character: 'Kenickie Murdoch',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'Almost Pregnant', yearReleased: 1992 },
            // { name: 'Elvira: Mistress of the Dark', yearReleased: 1988 },
            // { name: 'The Banker', yearReleased: 1989 },
            // { name: 'Wizards and Warriors', yearReleased: 1983 }
          ]
        },
        {
          name: 'Dinah Manoff',
          age: 68,
          born: '25 Janurary 1956',
          lifeStatus: 'Alive',
          character: 'Marty Maraschino',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
        //     { name: 'Ordinary People', yearReleased: 1980 },
        //     { name: 'Staying Together', yearReleased: 1989 },
        //     { name: 'I Ought to be in Pictures', yearReleased: 1982 },
        //     { name: "Child's Play", yearReleased: 1988 }
          ]
        },
        {
          name: 'Michael Tucci',
          age: 77,
          born: '15 April 1946',
          lifeStatus: 'Alive',
          character: 'Sonny',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
        //     { name: 'Forced Entry', yearReleased: 1975 },
        //     { name: 'Chance of a Lifetime', yearReleased: 1991 },
        //     { name: 'Sunnyside', yearReleased: 1979 },
        //     { name: 'The Man Who Captured Eichmann', yearReleased: 1996 }
           ]
        },
        {
          name: 'Kelly Ward',
          age: 67,
          born: '17 November 1956',
          lifeStatus: 'Alive',
          character: 'Putzie',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'The Big Red One', yearReleased: 1980 },
            // { name: 'Zoot Suit', yearReleased: 1981 },
            // { name: 'Once Upon a Forest', yearReleased: 1993 },
            // { name: 'The Boy in the Plastic Bubble', yearReleased: 1976 }
          ]
        },
        {
          name: 'Barry Pearl',
          age: 73,
          born: '29 March 1950',
          lifeStatus: 'Alive',
          character: 'Doody',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'The Newest Pledge', yearReleased: 2012 },
            // { name: 'Avenging Angel', yearReleased: 1985 },
            // { name: 'Making of a Male Model', yearReleased: 1983 },
            // { name: 'Annihilator', yearReleased: 1986 }
          ]
        },
        {
          name: 'Jamie Donnelly',
          age: 76,
          born: '8 May 1947',
          lifeStatus: 'Alive',
          character: 'Jan',
          otherMovies: [
            '65c9288040f6fc0d2fc50a43'
            // { name: 'Cargo', yearReleased: 2017 },
            // { name: 'The Legend of Lucy Keyes', yearReleased: 2005 },
            // { name: 'Cyrus', yearReleased: 2010 },
            // { name: 'Guns for Hire', yearReleased: 2015 }
          ]
        },
        {
          name: 'Mia Goth',
          age: 30,
          born: '25 October 1993',
          lifeStatus: 'Alive',
          character: 'Pearl',
          otherMovies: [
            '65c980ada2f86944af2c8417'
          ]
        },
        {
          name: 'David Corenswet',
          age: 30,
          born: '8 July 1993',
          lifeStatus: 'Alive',
          character: 'The Projectionist',
          otherMovies: [
            '65c980ada2f86944af2c8417'
          ]
        },
        {
          name: 'Tandi Wright',
          age: 53,
          born: '4 May 1966',
          lifeStatus: 'Alive',
          character: 'Ruth',
          otherMovies: [
            '65c980ada2f86944af2c8417'
          ]
        },
        {
          name: 'EmmaJenkins-Purro',
          age: 25,
          born: '9 November 1998',
          lifeStatus: 'Alive',
          character: 'Mitsy',
          otherMovies: [
            '65c980ada2f86944af2c8417'
          ]
        },
        {
          name: 'Matthew Sunderland',
          age: 52,
          born: '30 November 1971',
          lifeStatus: 'Alive',
          character: "Pearl's father",
          otherMovies: [
            '65c980ada2f86944af2c8417'
          ]
        },
        {
          name: 'Nicolas Cage',
          age: 60,
          born: '7 Janurary 1964',
          lifeStatus: 'Alive',
          character: 'Grug',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Emma Stone',
          age: 35,
          born: '6 November 1988',
          lifeStatus: 'Alive',
          character: 'Eep',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Ryan Reynolds',
          age: 47,
          born: '23 October 1976',
          lifeStatus: 'Alive',
          character: 'Guy',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Peter Dinklage',
          age: 54,
          born: '11 June 1969',
          lifeStatus: 'Alive',
          character: 'Phil Betterman',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Leslie Mann',
          age: 51,
          born: '26 March 1972',
          lifeStatus: 'Alive',
          character: 'Hope Betterman',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Clark Duke',
          age: 38,
          born: '5 May 1985',
          lifeStatus: 'Alive',
          character: 'Thunk',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Kelly Marie Tran',
          age: 35,
          born: '17 January 1989',
          lifeStatus: 'Alive',
          character: 'Dawn Betterman',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Catherine Keener',
          age: 64,
          born: '26 March 1959',
          lifeStatus: 'Alive',
          character: 'Ugga',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        },
        {
          name: 'Cloris Leachman',
          age: 94,
          born: '30 April 1926',
          lifeStatus: 'Deceased',
          character: 'Gran',
          otherMovies: [
            '65c980ada2f86944af2c8418'
          ]
        }
  ]
      
    await Actor.insertMany(actors)
    console.log("Created some actors")
}

const run = async () => {
    await main()
    db.close
}

run ()
