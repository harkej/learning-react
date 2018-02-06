export default {   
   forumMallLocation: {
        id: 11,
        lat: -1233444332,
        long: -1273873518
    },
    movieList: [
        {
            name : "Thor: Ragnarok",
            id : "01",
            runtime : "2 hrs 10 mins",
            //showtime : Showtime,
            description : "Upon finding himself in a gladiatorial match against the Hulk, his former ally, "+
                        "Thor must fight for survival and to save his people from the ruthless Hela from destroying Asgard.",
            genre: ['Action', 'Adventure', 'Fantasy'],
            rating: 9.7,
            language: ["English","Tamil","Telugu","Hindi"],
            certificate: "UA",
            Director: "Taika Waititi",
            cast : ['Chris Hemsworth:Thor', 'Mark Ruffalo:Hulk/Bruce Banner', 'Tom Hiddleston:Loki', 'Cate Blanchett:Hela', 'Idris Elba:Heimdall'] 
        },
        {
            name : "Justice League",
            id : "02",
            runtime : "2 hrs 01 mins",
            //showtime : Showtime,
            description : "Fueled by his restored faith in humanity and inspired by Superman's selfless act, "+
            "Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. "+
            "Together, Batman and Wonder Woman work quickly to find and recruit a team of meta-humans to stand "+
            "against this newly awakened threat. \n\nBut despite the formation of this unprecedented league of heroes "+
            "- Batman, Wonder Woman, Aquaman, Cyborg and The Flash - it may already be too late to save the planet from "+
            "an assault of catastrophic proportions.",
            genre: ['Action', 'Adventure', 'Fantasy'],
            rating: 9.5,
            language: ["English","Tamil","Telugu","Hindi"],
            certificate: "UA",
            Director: "Zack Snyder",
            cast : ['Ben Affleck:Batman/Bruce Wayne', 'Gal Gadot:Wonder Woman/Diana Prince', 'Jason Momoa:Aquaman/Arthur Curry', 'Ezra Miller:Barry Allen', 'Ray Fisher:Victor Stone/Cyborg'] 
        },
		{
            name : "Batman vs Superman",
            id : "03",
            runtime : "2 hrs 10 mins",
            //showtime : Showtime,
            description : "Upon finding himself in a gladiatorial match against the Hulk, his former ally, "+
                        "Thor must fight for survival and to save his people from the ruthless Hela from destroying Asgard.",
            genre: ['Action', 'Adventure', 'Fantasy'],
            rating: 9.7,
            language: ["English","Tamil","Telugu","Hindi"],
            certificate: "UA",
            Director: "Taika Waititi",
            cast : ['Chris Hemsworth:Thor', 'Mark Ruffalo:Hulk/Bruce Banner', 'Tom Hiddleston:Loki', 'Cate Blanchett:Hela', 'Idris Elba:Heimdall'] 
        },
		{
            name : "Jagga Jasoos",
            id : "04",
            runtime : "2 hrs 10 mins",
            //showtime : Showtime,
            description : "Upon finding himself in a gladiatorial match against the Hulk, his former ally, "+
                        "Thor must fight for survival and to save his people from the ruthless Hela from destroying Asgard.",
            genre: ['Action', 'Adventure', 'Fantasy'],
            rating: 9.7,
            language: ["English","Tamil","Telugu","Hindi"],
            certificate: "UA",
            Director: "Taika Waititi",
            cast : ['Chris Hemsworth:Thor', 'Mark Ruffalo:Hulk/Bruce Banner', 'Tom Hiddleston:Loki', 'Cate Blanchett:Hela', 'Idris Elba:Heimdall'] 
        },
		{
            name : "The Incredibles",
            id : "05",
            runtime : "2 hrs 10 mins",
            //showtime : Showtime,
            description : "Upon finding himself in a gladiatorial match against the Hulk, his former ally, "+
                        "Thor must fight for survival and to save his people from the ruthless Hela from destroying Asgard.",
            genre: ['Action', 'Adventure', 'Fantasy'],
            rating: 9.7,
            language: ["English","Tamil","Telugu","Hindi"],
            certificate: "UA",
            Director: "Taika Waititi",
            cast : ['Chris Hemsworth:Thor', 'Mark Ruffalo:Hulk/Bruce Banner', 'Tom Hiddleston:Loki', 'Cate Blanchett:Hela', 'Idris Elba:Heimdall'] 
        }
    ],
    forumShowtimes: [
        [
            {
                id : 31,
                movie: "thorRagnarok",
                timeOfMovieStart : "10:00 AM",
                seats : 50
            },
            {
                id : 32,
                movie: "justiceLeague",
                timeOfMovieStart : "01:00 PM",
                seats : 50
            },
            {
                id : 33,
                movie: "thorRagnarok",
                timeOfMovieStart : "04:00 PM",
                seats : 50
            },
            {
                id : 34,
                movie: "justiceLeague",
                timeOfMovieStart : "07:00 PM",
                seats : 50
            }
        ],
        [
            {
                id : 41,
                movie: "Qarib Qarib Single",
                timeOfMovieStart : "09:00 AM",
                seats : 50
            },
            {
                id : 42,
                movie: "Golmaal Again",
                timeOfMovieStart : "12:00 PM",
                seats : 50
            },
            {
                id : 43,
                movie: "Newton",
                timeOfMovieStart : "03:00 PM",
                seats : 50
            },
            {
                id : 44,
                movie: "Secret Superstar",
                timeOfMovieStart : "06:00 PM",
                seats : 50
            }
        ],
        [
            {
                id : 51,
                movie: "Mersal",
                timeOfMovieStart : "09:30 AM",
                seats : 50
            },
            {
                id : 52,
                movie: "Aramm",
                timeOfMovieStart : "01:30 PM",
                seats : 50
            },
            {
                id : 53,
                movie: "Murder on the Orient Express",
                timeOfMovieStart : "04:30 PM",
                seats : 50
            },
            {
                id : 54,
                movie: "Coco",
                timeOfMovieStart : "07:30 PM",
                seats : 50
            }
        ]
    ],
    forumScreenArray: [
        {
            auditoriumNumber : 21,
            showTimings: "forumShowtimes"
        },
        {
            auditoriumNumber : 22,
            showTimings: "forumShowtimes"
        },
        {
            auditoriumNumber : 23,
            showTimings: "forumShowtimes"
        }
    ],
    Theatres: [
        {
            id : 1,
            name : "PVR",
            location : "Koramangala",
            screen : "forumScreen" 
        }
    ]
}
