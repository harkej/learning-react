// initial state for chart reducers to return
export const initialState = {
    seachValue: "",
    movieSelected: null,
    suggestions: [],
    id: 0,
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
        },
		{
            name : "Jumanji: Welcome to the Jungle",
            id : "06",
            runtime : "1 hrs 59 mins",
            //showtime : Showtime,
            description : "In the brand new adventure Jumanji: Welcome to the Jungle, the tables are turned as four teenagers in detention are sucked into the world of Jumanji. When they discover an old video game console with a game they've never heard of, they are immediately thrust into the game's jungle setting, into the bodies of their avatars. What they discover is that you don't just play Jumanji - Jumanji plays you. They'll have to go on the most dangerous adventure of their lives, or they'll be stuck in the game forever." ,
            genre: ['Family', 'Adventure', 'Fantasy'],
            rating: 8.4,
            language: ["English"],
            certificate: "UA",
            Director: "Jake Kasdan",
            cast : ['Dwayne Johnson', 'Kevin Hart', 'Jack Black', 'Karen Gillan'] 
        },
		{
            name : "Tiger Zinda Hai",
            id : "07",
            runtime : "2 hrs 41 mins",
            //showtime : Showtime,
            description : "The sequel to the blockbuster Ek Tha Tiger, Tiger Zinda Hai carries forward the story of two spies, Tiger (played by Salman Khan) and Zoya (played by Katrina Kaif), eight years after their previous mission.",
            genre: ['Action', 'Thriller'],
            rating: 4.1,
            language: ["Hindi"],
            certificate: "UA",
            Director: "Ali Abbas Zafar",
            cast : ['Salman Khan', 'Katrina Kaif', 'Sajjad Delafrooz', 'Angad Bedi'] 
        },
		{
            name : "Fukrey Returns",
            id : "08",
            runtime : "2 hrs 11 mins",
            //showtime : Showtime,
            description : "Fukrey Returns' picks up a year later from where it ended. Having enjoyed the spoils of war they had so audaciously waged, the Fukras are now at crossroads with their past, which is about to decide their future. Bent upon a merciless payback, Bholi Punjaban is back and all set to take the Fukras on a deadly ride!<br/>"+
                          "Even a city, as geographically varied as Delhi is not large enough for them to design a well-defined escape trajectory. Unaware of how they're being master minded by a certain head honcho, the Fukras are on the run again!!<br/>"+
                          "Are the four Fukras going to play out their cards carefully? Will Choocha's God gifted power come to their rescue? In this furious yet hilarious cat and mouse chase, who will have the last laugh?!",
            genre: ['Comedy', 'Thriller'],
            rating: 7.0,
            language: ["Hindi"],
            certificate: "UA",
            Director: "Mrigdeep Singh Lamba",
            cast : ['Pulkit Samrat', 'Varun Sharma', 'Manjot Singh', 'Ali Fazal'] 
        },
		{
            name : "Ferdinand",
            id : "09",
            runtime : "1 hrs 48 mins",
            //showtime : Showtime,
            description : "Ferdinand tells the story of a giant bull with a big heart. After being mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure. Set in Spain, Ferdinand proves you can't judge a bull by its cover.<br/>"+

                          "From Blue Sky Studios and Carlos Saldanha, the director of Rio and inspired by the beloved book The Story of Ferdinand by Munro Leaf and Robert Lawson, Ferdinand is a heartwarming animated comedy adventure with an all-star cast that includes John Cena, Kate McKinnon, Anthony Anderson, Bobby Cannavale, Gina Rodriguez, David Tennant and many more.",
            genre: ['Adventure', 'Animation', 'Comedy'],
            rating: 8.1,
            language: ["English","Hindi"],
            certificate: "UA",
            Director: "Carlos Saldanha",
            cast : ['Sally Phillips', 'Gabriel Iglesias', 'Anthony Anderson', 'Gina Rodriguez', 'John Cena'] 
        },
		{
            name : "Murder on the Orient Express",
            id : "10",
            runtime : "1 hrs 54 mins",
            //showtime : Showtime,
            description : "What starts out as a lavish train ride through Europe quickly unfolds into one of the most stylish, suspenseful and thrilling mysteries ever told.<br/>"+

                          "From the novel by best selling author Agatha Christie, Murder on the Orient Express tells the tale of thirteen strangers stranded on a train, where everyone is a suspect. One man must race against time to solve the puzzle before the murderer strikes again.",
            genre: ['Crime', 'Mystery', 'Thriller'],
            rating: 7.5,
            language: ["English"],
            certificate: "UA",
            Director: "Kenneth Branagh",
            cast : ['Kenneth Branagh', 'Penelope Cruz', 'Willem Dafoe', 'Judi Dench'] 
        },
		{
            name : "Coco",
            id : "11",
            runtime : "1 hrs 49 mins",
            //showtime : Showtime,
            description : "For generations, the Riveras have banned music because they believe they have been cursed by it. As their family history goes, Miguels great-grandfather abandoned his wife Imelda, decades earlier to follow his own dreams of performing, leaving Imelda to take control as the matriarch of the now-thriving Rivera line and declare music dead to the family forever.<br/>"+

                          "But Miguel harbors a secret desire to seize his musical moment, inspired by his favorite singer of all time, the late Ernesto de la Cruz. It is only after Miguel discovers an amazing link between himself and De la Cruz that he takes action to emulate the famous singer and, in doing so, accidentally enters the Land of the Dead.<br/>"+

                          "In the beautiful underworld, its not long until Miguel encounters the souls of his own family generations worth of long-dead but no less vivacious Rivera ancestors, including great-grandmother Imelda. Still, given the opportunity to roam around the Land of the Dead, Miguel decides to track down De la Cruz himself. He teams up with another friendly (and skeletal) spirit a trickster named Hector, voiced by Bernal to find De la Cruz, earn his familys blessing to perform, and return to the Land of the Living before time runs out.",
            genre: ['Adventure', 'Animation', 'Family'],
            rating: 7.1,
            language: ["English"],
            certificate: "U",
            Director: "Lee Unkrich",
            cast : ['Gael Garcia Bernal', 'Benjamin Bratt', 'Renee Victor', 'Anthony Gonzalez'] 
        },
		{
            name : "Star Wars: The Last Jedi",
            id : "12",
            runtime : "2 hrs 33 mins",
            //showtime : Showtime,
            description : 'Rey stepped into a larger world for the first time, in "Star Wars: The Force Awakens". She will continue her journey with Finn, Poe, and Luke Skywalker in the eighth chapter of the Star Wars saga.',
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            rating: 7.9,
            language: ["English"],
            certificate: "UA",
            Director: "Rian Johnson",
            cast : ['Daisy Ridley', 'Adam Driver', 'Mark Hamill', 'Domhnall Gleeson'] 
        }
    ]
}