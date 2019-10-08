//Index page functions
//Function for auto slideshow of feature images
var slideIndex = 0;

function indexPageFunctions() {
	showSlides();
	showFeaturedReviews();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function showFeaturedReviews() {
	
	const movieTitle = document.getElementsByClassName("movieTitle");
	const movieSynopsis = document.getElementsByClassName("movieSynopsis");
	const moviePoster = document.getElementsByClassName("moviePoster");
	const movieLink = document.getElementsByClassName("movieLink");
	
	var randomNumbers = [Math.floor(Math.random() * 25)];
	
	for (var index = 0; randomNumbers.length < 3	; index++){
		
		var randomNumber = Math.floor(Math.random() * 25)
		var numberExists = false;
		
		for(var index = 0; index < randomNumbers.length; index++){
			if (randomNumber == randomNumbers[index]){
				numberExists = true;
			}
		}
		if (!numberExists){
			randomNumbers.push(randomNumber);
		}
	}
	
	for (var index = 0; index < 3; index++){
		
		movieTitle[index].innerHTML = movieInfo[randomNumbers[index]].title;
		movieSynopsis[index].innerHTML = movieInfo[randomNumbers[index]].synopsis;
		movieLink[index].href = movieInfo[randomNumbers[index]].link;
		moviePoster[index].src = movieInfo[randomNumbers[index]].poster;
		moviePoster[index].alt = movieInfo[randomNumbers[index]].title;
		movieLink[index].href = movieInfo[randomNumbers[index]].link;
	}
}

//Genre page functions
//Movie objects
const movieInfo = [
	{"parent": "interstellar",
	"title": "Interstellar",
	"genre": "Sci-Fi",
	"synopsis": "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
	"poster": "media/images/interstellarposter.jpg",
	"link": "reviews.html??title=interstellar",
	"review": "One of the most stunning movies I have seen in recent years. There simply isn't much more I can say about this movie, phenomenal visuals, stellar cast and concepts that will make you question reality long after the credits have rolled.<br><br>Helmed by Christopher Nolan, we are immediately thrust into a world rich with a story begging to be told, and we are not disappointed. Like most other Nolan projects, this one reinvents the genre, and will surely be a standout movie to be rewatched in the years to come. Matthew McConaughey shows his dramatic side by stepping into the lead role and he did it with a lot of criticism before the movie released. This criticism wasn’t unfounded however, as we have yet to see him play such a dramatic role (barring the recent Dallas Buyers Club, which he picked up an Oscar for), instead usually typecast as the goofy male in rom-coms. Standout performances from the rest of the cast just adds to the magic of this movie including, Anne Hathaway, Wes Bentley, Michael Caine, Matt Damon, and a great performance by the young Mackenzie Foy.<br><br>Visually speaking, this movie was hyped to the extreme, being a space movie, and the films immense budget of $165 million, and it delivered, boy did it deliver. Alien planets made entirely of ice, or water, and the space scenes themselves, being able to convey the vast emptiness of space, yet still being visually spectacular is a feat many would balk at. The most iconic scene, for me at least, is that of the black hole, it is the visual centerpiece in the middle of the feast that is this movie. Interestingly,  the software used to create this for the movie is a full implementation of Einstein's equations in 40,000 lines of C++ and rendered thousands of 23 megapixel IMAX frames on a 32,000-core render farm at about 20 core-hours per frame.<br><br>In conclusion, I fully recommend this movie to anyone, but if you are going to watch it, be prepared to think, both during the movie, and for days and weeks afterwards.",
	"rating": "96",
	"summary": "Amazing movie, fully recommended. Vsually amazing and supported by an array of great acting and topped by the concepts that will make you question reality.",
	"pros": "- Visually superb<br>- Great acting by all of the cast<br>- Amazing concepts woven into the story that make you think",
	"cons": "- Ending trying to play the love angle, after being scientific all movie.",
	"classification": "M",
	"runtime": "169min",
	"releaseDate": "7th Nov 2014",
	"director": "Christopher Nolan"},
	
	{"parent": "theMatrix",
	"title": "The Matrix",
	"genre": "Sci-Fi",
	"synopsis": "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
	"poster": "media/images/thematrixposter.jpg",
	"link": "reviews.html??title=theMatrix",
	"review": "The Matrix is a classic, I’m calling it now, no other movie has encapsulated this genre of movie so perfect. How more Sci-Fi can you get than <em>literally living inside of a computer simulation</em>. If you haven't seen this movie yet, stop what you are doing, right now, and go watch it, come back afterwards.Okay, now that you've seen it, we can continue.<br><br>Purely by story alone, this movie makes it into the cult status of movies, but add on great acting all around by Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss and Hugo Weaving and you have masterpiece. Most of the credit has to go to the directors however, as the Wachowski twins have cemented themselves as some of the best. By creating this dystopian future, and nestling an amazing story inside, we have a world that seems… <em>alive</em>. The world seems massive, both the real world, and the simulated world within, both seem so expansive, which is always a big tick for me, and it feels like a world with so much story to tell (which they do, as this movie spawned two sequels).<br><br>Being one of the first movies to introduce a lot of cinematography techniques, such as super slow-mo, among others, it really revolutionises the genre, which is dumbfounding when you consider it has tick marks in almost every category you can be scored in, including this.<br><br>As I said earlier, this movie is a masterpiece and will not easily be forgotten. It is a movie that will (and has to be) rewatched over and over again before fully realising some of the ideas it is trying to convey. Fully recommended, not a lot to fault.",
	"rating": "90",
	"summary": "Amazing, movie, should be on the top of the towatch list of anyone that hasn't seen it.",
	"pros": "- Revolutionary cinematography<br>- Core actors produce amazing preformances<br>Conceptually amazing",
	"cons": "- You will spend a lot of time rewatching this movie",
	"classification": "M",
	"runtime": "136min",
	"releaseDate": "31st Mar 1999",
	"director": "Lana Wachowski/Lily Wachowski"},
	
	{"parent": "bladeRunner2049",
	"title": "Blade Runner 2049",
	"genre": "Sci-Fi",
	"synopsis": "Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.",
	"poster": "media/images/bladerunnerposter.jpg",
	"link": "reviews.html??title=bladeRunner2049",
	"review": "Blade Runner is a great example of when a reboot is done right, not done immediately as a cash grab like some other franchises, but rather released when it is needed, and released to continue the story, not to continue revenue gains. That being said it does both, the combination of being the sequel to a classic, and having a few big names in the cast have raised the hype meter of this film to a high level, and in my opinion, it <em>somewhat</em> achieves it.<br><br>As with most movies I enjoy, the world seems expansive, and it seems there is a story to tell, and more importantly that there are stories happening that we don't need to be told, we just need to know that they are there. The world of 2049 nails that perfectly. However it never truly tries to get it's story across, which is disappointing, because as a Sci-Fi noir movie it is expectedly slow, but it doesn't do much with the time this creates. On the other hand, the money spent on the cast is well spent, and somewhat revives this movie for me. As stated earlier, being a movie on the slower side, it is heavily character driven, and having the ever amazing Ryan Gosling in the lead is the best step they could have taken to ensure this is executed. Gosling is the standout of the acting of this film, with the exception of a welcome cameo from Harrison Ford, the original Blade Runner.<br><br>Visually stunning, this movie creates a desolate dystopian future, and the effects team should be commended for their ability to create this. From the barren dust covered desserts, to the clogged cyberpunk-esque streets, covered in neon lights, and brimming with people, it paints the perfect picture for what the world is <em>supposed</em> to look like.<br><br>Trying not to be biased towards these types of movies, as I am not usually a fan of the slower noir style movies, I think this <em>almost</em> hits the target on this, Gosling does most of the heavy lifting here and the visuals are a good distraction to what the story misses. I would recommend this to anyone who likes character driven stories, and doesn't mind sitting through the near 3 hour long movie.",
	"rating": "75",
	"summary": "Recommended for fans of noir style movies, but dont expect a perfect story, watch it for the fantasitcally delivered character driven perfomances, and the visuals of a dystopian future.",
	"pros": "- Ryan Goslings acting ability<br>- Visaully encapsulates a dystopia perfectly<br>- Cyperpunk-esque world",
	"cons": "- Story just misses the mark<br>- Rest of cast underperforms",
	"classification": "R13",
	"runtime": "164min",
	"releaseDate": "6th Oct 2017",
	"director": "Dennis Villeneuve"},
	
	{"parent": "exMachina",
	"title": "Ex Machina",
	"genre": "Sci-Fi",
	"synopsis": "Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.",
	"poster": "media/images/exmachinaposter.jpg",
	"link": "reviews.html??title=exMachina",
	"review": "Ex-Machina is a fresh idea that is sure to encourage more AI movies to break out in the future.With a cast of only 3 people it can be hard to convey a good story, but with the acting quality shown, it is no surprise this movie is an instant hit. It is always nice to see a new concept shown on the big screen, and usually they  don't do well, however in this case, Ex-Machina is the exception to the rule.<br><br>A simple story, with only one concept in the whole movie, <em>has true artificial intelligence finally been created</em>. Such a simple concept that sparks an enormous amount of questions and arguments, and this allows the story to be told ambiguously, that is to say, it is up to the viewer which side of the argument they are on, and either side shows the story in a different light. The three <strike>main</strike> only cast members all deliver amazing performances, Oscar Isaacs as the genius CEO who is testing to see if his creation can pass the Turing Test, Domhnall Gleeson, the easily manipulated employee who is the human part of the test, and finally Alicia Vikander who plays the potentially sentient AI. In my opinion Isaacs leads these performances , and im genuinely surprised he doesn't pick up an oscar nod for Ex-Machina, however the bafflingly underrated Gleeson, who despite playing big roles in a lot of major franchises (Harry Potter, Star Wars and recently, Black Mirror), no one seems to know his name. <br><br>Being a character/performance driven movie, these performances are by and large, the most important reason why this finl is so successful, however the story alone is worthy of it's own discussion. The concept of artificial intelligence is on the edge of the knife as in reality we inch closer and closer to achieving this feat as well, so to see it in this movie depicted so equivocally is pleasantly surprising. On top of this the visuals are great, on paper, it isn't hard to make an isolated tech house set in a semi-futuristic, yet modern world isn’t <em>that</em> hard, but they manage to hit the nail on the head, so full kudos to the team for taking the minimalistic approach and succeeding.<br><br>This movie exceeds all of my expectations for it, nailing the setting, the performances, and the delivery of the story and for only a $15 million budget it has over performed by a long shot. Highly recommended.",
	"rating": "88",
	"summary": "A fresh concept, that delivers it's concept perfectly, and delivered with great performances all around is hard to fault.",
	"pros": "- Amazing acting by all 3 cast members<br>- Surprising use of a minimalistic visual setting<br>- Nailed the concepts delivery<br>- Ambiguous story",
	"cons": "- Could have expanded the world a little<br>- Ambiguous ending",
	"classification": "R13",
	"runtime": "108min",
	"releaseDate": "24th Apr 2015",
	"director": "Alex Garland"},
	
	{"parent": "theMartian",
	"title": "The Martian",
	"genre": "Sci-Fi",
	"synopsis": "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission.",
	"poster": "media/images/themartianposter.jpg",
	"link": "reviews.html??title=theMartian",
	"review": "The Martian enters the Sci-Fi genre but technically shouldn't, as it tries it's hardest not to be fiction. The whole concept of a man being stuck on Mars alone, and having to rely on nothing but his own wit to survive until a rescue can take place is a very interesting one. Back that up by putting Matt Damon in the lead and you have a recipe for success.<br><br>At first glance, a whole movie about survival on mars doesn't sound exciting, but this movie manages to cram enough <em>interesting</em> into the story that it made me glued to the screen. I felt like I was learning science as well as being told a joke, and most importantly it seemed <em>fun</em>. This is mostly to Matt Damon's acting credit, as he manages to bring this often hilarious, always witty personality to life, in only a way he can do. By the end of the film you feel like you have been watching longer that the 2.5 hours the movie runs for. It feels like adventure, and that is a great thing.<br><br>Having Matt Damon as the lead, he has to do a lot of the lifting in The Martian, and he doesn't disappoint. But that isn't to say the rest of the crew do, because they are set on earth it feels like they are on screen for less time than they actually are, however they, for the most part, deliver good performances. <br><br>Finally we have to discuss the visuals, being a space movie, the bar was set high in order for the film to succeed, and they do, the desolation of mars is encapsulated perfectly, it makes you feel like you're there with him, and even n the spacecraft themselves, you feel as though this is a real, living world.<br><br>If you haven't seen this movie, go and see it. I highly recommend this movie to anyone, even if you aren't into a lot of sciency stuff, but if you are, then this movie is perfect for you.",
	"rating": "82",
	"summary": "A perfect encapsulation of life on mars, and one mans struggle to survive and get home safely.",
	"pros": "- Matt Damon's acting<br>- Very realistic, scientifically accurate",
	"cons": "- Oversaturation of jokes by a man stuck on mars",
	"classification": "PG-13",
	"runtime": "144min",
	"releaseDate": "2nd Oct 2015",
	"director": "Ridley Scott"},
	
	{"parent": "theShining",
	"title": "The Shining",
	"genre": "Horror",
	"synopsis": "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
	"poster": "media/images/theshiningposter.jpg",
	"link": "reviews.html??title=theShining",
	"review": "The Shining is widely regarded as one of the greatest movies ever made, and is always listed in any list of “classics”, and after finally watching it myself, it is hard to disagree, for a movie made in the year that it was, it is amazing what it managed to do with the available technology. What most movies in modern times rely on CGI for, The Shining managed to do with practical effects alone, as most movies of that era had to do.<br><br> As far as horror movies go, this has a substantially thicker plot than most others in the genre. Where most of its brethren rely on jump scares, and cheap parlour tricks to invoke fear in its viewers, The Shining uses a genuinely scary story to do so. Similarly, where most horror films follow a fairly standard plot of a group of people being hunted and killed of one by one, The Shining breaks the mold again by showing a fresh story, and invited the viewers into the story as if they themselves were staying at the hotel.<br><br>Jack Nicholson is by far the standout performance as the lead role of Jack Torrance. And the young Nicholson forever cemented himself as one of the elite actors of his era. In fact, it's hard to believe it is actually him, partly because i am so used to seeing the older, greying, but no less talented modern Nicholson, but mainly because his performance was so genuine, it is one of the few cases that you forget you are watching an actor, and that is an incredible ability to have. Cinematography side, it's hard to judge, as they did the best with what the technology allowed, and in it's time, would have been amazing, however compared to today's standard, it can be a little hard to watch.<br><br>In conclusion, this movie is one of the greats, it has all of the makings of a classic movie and should be watched by anyone who considers them a movie buff. The only downside, as with everything, age gets everyone, and as technology is so fast paced, this has fallen behind.",
	"rating": "81",
	"summary": "An amzing, classic horror movie. Needs to be seen in you are a movie lover of any genre.",
	"pros": "- Quality acting by Jack Nicholson<br>- Genuine fear inducing scenes<br>- Fresh take on a classic genre",
	"cons": "-Technologically crippled by age<br>- Some other performances were sub-par",
	"classification": "R16",
	"runtime": "146min",
	"releaseDate": "13th Jun 1980",
	"director": "Stanley Kubrick"},
	
	{"parent": "trainToBusan",
	"title": "Train to Busan",
	"genre": "Horror",
	"synopsis": "Train to Busan is a harrowing zombie horror-thriller that follows a group of terrified passengers fighting their way through a countrywide viral outbreak while trapped on a suspicion-filled, blood-drenched bullet train ride to Busan, a southern resort city that has managed to hold off the zombie hordes... or so everyone hopes.",
	"poster": "media/images/traintobusanposter.jpg",
	"link": "reviews.html??title=trainToBusan",
	"review": "What can I say about Train to Busan… except it was one of the most amazing zombie movies of <b>all time</b>, and i don't say that lightly. It is refreshingly scary take on the beaten-to-death zombie movie fad. After a few of the more recent zombie movies and shows, it's easy to forget that zombies are meant to be <em>fast</em> and meant to be <em>scary</em>. Train to Busan captures this fear, and throws the viewers into a train filled with it.<br><br>Being a South Korean film, it was expected to be different to the other movies in the genre, but it was leagues apart, telling a story of a man trying to get his daughter to safety, while being trapped on a train filled with zombies. It's as if someone managed to do what Snakes on a Plane was trying to do, but better. The fear felt of being within the train itself makes its way to the viewer, because the zombies look, and feel so… <em>real</em>. A rare talent indeed, and credit to the costume team behind the movie.<br><br>The main cast show this fear excellently and manage to deliver excellent performances, despite there being an obvious language barrier, their body language portrays what their mouths cant. Being mainly shot in train carriages, the ability to make this world feel full, while only showing a fraction of a percentage of it, is phenomenal in itself.<br><br>I stand by what I said earlier, it is one of, if not the, greatest zombie movies to hit the screens, and any zombie enthusiast, even if they have been exhausted by the recent flood of the genre, should immediately watch it. Highly recommended to any zombie fan, and also to any fans of the horror genre in general.",
	"rating": "93",
	"summary": "One of the greatest zombie movies ever made, could even rival the original, Romeros Dawn of the Dead, for the throne of king of zombie flicks.",
	"pros": "- Amazing acting, despite a language barrier<br>- Fresh take on a played to death genre<br>- Simple story design paid off in action scenes and character interaction",
	"cons": "- Disappointing end, too much hope",
	"classification": "M",
	"runtime": "118min",
	"releaseDate": "11th Aug 2016",
	"director": "Sang-ho Yeon"},
	
	{"parent": "theSilenceOfTheLambs",
	"title": "The Silence of the Lambs",
	"genre": "Horror",
	"synopsis": "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
	"poster": "media/images/silenceofthelambsposter.jpg",
	"link": "reviews.html??title=theSilenceOfTheLambs",
	"review": "The Silence of the Lambs is widely regarded as one of the best movies of all time, and although i agree that yes, it is a great movie, i don't believe it sits in the upper echelons like everyone claims it does. This will probably be my most controversially received review, and i am expecting a slew of feedback about it but I will stand by my statement. Dispute outstanding performances by both leads, and an interesting and engaging story, i feel the story dragged a little in the third act, ultimately letting the movie down.<br><br>Firstly, let's get the obvious out of the way, the acting is some of the best in any movie, with Anthony Hopkins getting the Best Actor Oscar for his portrayal of the despicable Hannibal Lecter, as well as Jodie Foster's burst onto the scene with her portrayal of The young CIA agent Clarice Starling. The story is also very engaging, trying to go inside the mind of a crazed genius in order to catch a serial killer, it doesn't get much more interesting than that. However, as I said earlier, I feel like the story dragged a little bit more in the third act, and as silly as it sounds, the actual serial killed aspect could have been wrapped up quicker.<br><br>It has already stood the test of time, as it is still relevant today, nearly 30 years after its release, helped mainly on it not needing to rely on much special effects, it is the characters that we are watching, and their portrayal doesn't change over the years.<br><br>Still a classic movie, it should be watched by most, and can still be enjoyed today, with an engaging story it comes highly recommended by me.",
	"rating": "86",
	"summary": "A classic movie that has stood the test of time, with an engaging story delivered by competent actors. Held back a little by a dragging third act is the only fault I can give.",
	"pros": "- Both leads deliver phenomenal performances<br>- Able to watch no matter how old the movie gets",
	"cons": "- Third act drags a bit, bringing the whole movie down a little",
	"classification": "R16",
	"runtime": "118min",
	"releaseDate": "14th Feb 1991",
	"director": "Jonathan Demme"},
	
	{"parent": "getOut",
	"title": "Get Out",
	"genre": "Horror",
	"synopsis": "Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
	"poster": "media/images/getoutposter.jpg",
	"link": "reviews.html??title=getOut",
	"review": "Jordan Peele’s (of Comedy Central’s, <em>Key and Peele</em> fame) directorial debut with Get Out is one hell of a way to break your duck, conceptually beautiful and eerily sinister, this movie is a fantastic ride from start to finish. Centered around a man meeting his parents in law whos thoughts of them stray from being mildly racist, to downright evil, is a fresh concept, and one we haven't seen on the screen before, at least done in the way Peele has.<br><br>To start with, the best thing about this movie, is the story, the entire time, we, the audience feel as though we are in the shoes of the protagonist, and it is an eerie experience to say the least. This movie gave me flashbacks to movies such as Stepford Wives, or Invasion of the Body Snatchers, and yet it feels as it is own new story. Peele has done well to deliver the package in this way, and shows his talent as a filmmaker straight off the bat.<br><br>Cast performances are terrific, as all of them played their part well, special mentions must be given to the lead, Daniel Kaluuya, and also to the brother in law, Caleb Landry Jones, who manages to pull of the not so subtle psychopath well.<br><br>I'm calling this one a cinematographic masterpiece purely because that is the bow on top of all of this, the way the scenes are presented must be commended and I look forward to the next story from Jordan Peele's brain.",
	"rating": "80",
	"summary": "Cinematographic masterpiece, and anyone who enjoys eerieness and uneasiness should give this a watch, highly recommended",
	"pros": "- Excellent cinematography<br>- Beautifully crafted story<br>- Amazing comedic relief by Lil Rel Howery",
	"cons": "- Allison Williams character became a bit too cliche at the end",
	"classification": "R16",
	"runtime": "104min",
	"releaseDate": "24th Feb 2017",
	"director": "Jordan Peele"},
	
	{"parent": "aQuietPlace",
	"title": "A Quiet Place",
	"genre": "Horror",
	"synopsis": "On a devastated Earth overrun by lethal and ever-hearing predators of a possible extraterrestrial origin, the Abbotts struggle to survive in a desolate New York City in a new era of utter silence. As this new type of invader is attracted to noise, even the slightest of sounds can be deadly; however, it's been already twelve months since the powerful monsters' first sightings, and this resilient family still stands strong. To learn the rules of survival in this muted dystopia is essential; nevertheless, an otherwise joyous event is threatening an already frail stability. Now, more than ever, don't make a sound.",
	"poster": "media/images/aquietplaceposter.jpg",
	"link": "reviews.html??title=aQuietPlace",
	"review": "A Quiet Place is another movie in this genre that has broken the mould, and tackled the idea of horror in a new fashion, in fact, the theme of silence in this movie is so strong that there is hardly any talking - or noise - in the movie at all, and the effect of this is incredible. Any noise made me cringe with fear, even the crunch of leaf made me anxious that the characters were being to noisy, and that danger was only just around the corner. This is a feature of this movie which makes it so unique, and therefore so intriguing.<br><br>Lead actor and director John Krasinski (most would know him as the lovable Jim Halpert of The Office fame) makes his debut at the helm of this horror/thriller, and like other movies I have reviewed, he jumps in feet first and has a resounding success. The cinematography is to be commended, with the noise being made an integral part of the story, and how that story is told. The acting is mostly good, with the best being the two leads, and the rest being just that, the rest.<br><br>The actual world in this film feels small, and that is by design. Like the protagonists we are supposed to feel isolated, and unlike other movies, this is to is benefit, having such a small world, somehow makes the world feel big, albeit empty. The main fault I have with this film is the monsters themselves, I think they are a little to… <em>monstery</em>, if that is a word, they could have been played down a bit, even if they didn't show them as much as they did.<br><br>Despite this flaw I still find this movie to be above average, it was a good watch throughout, and the sound effects (or lack thereof), made me be on the edge of my seat the entire time.",
	"rating": "72",
	"summary": "Great movie, people need to see this, even if it is to experience the way sound is handled in it. Needs to be watched in a quiet environment to be appreciated properly however.",
	"pros": "- Use of sound is unique and interesting<br>- Star and director John Krasinski does a great job at both",
	"cons": "- Monsters to monstery, could have been downplayed a bit",
	"classification": "M",
	"runtime": "90min",
	"releaseDate": "6th Apr 2018",
	"director": "John Krasinski"},
	
	{"parent": "theDarkKnight",
	"title": "The Dark Knight",
	"genre": "Action",
	"synopsis": "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
	"poster": "media/images/thedarkknightposter.jpg",
	"link": "reviews.html??title=theDarkKnight",
	"review": "",
	"rating": "91",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "M",
	"runtime": "152min",
	"releaseDate": "18th Jul 2008",
	"director": "Christopher Nolan"},
	
	{"parent": "avengersInfinityWar",
	"title": "Avengers: Infinity War",
	"genre": "Action",
	"synopsis": "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
	"poster": "media/images/avengersinfinitywarposter.jpg",
	"link": "reviews.html??title=avengersInfinityWar",
	"review": "",
	"rating": "80",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "M",
	"runtime": "149min",
	"releaseDate": "27th Apr 2018",
	"director": "Joe Russo/Anthony Russo"},
	
	{"parent": "madMaxFuryRoad",
	"title": "Mad Max: Fury Road",
	"genre": "Action",
	"synopsis": "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
	"poster": "media/images/madmaxfuryroadposter.jpg",
	"link": "reviews.html??title=madMaxFuryRoad",
	"review": "",
	"rating": "92",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "120min",
	"releaseDate": "15th May 2015",
	"director": "George Miller"},
	
	{"parent": "johnWick",
	"title": "John Wick",
	"genre": "Action",
	"synopsis": "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
	"poster": "media/images/johnwickposter.jpg",
	"link": "reviews.html??title=johnWick",
	"review": "",
	"rating": "83",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "101min",
	"releaseDate": "24th Oct 2014",
	"director": "Chad Stahelski"},
	
	{"parent": "theRaidRedemption",
	"title": "The Raid: Redemption",
	"genre": "Action",
	"synopsis": "In the Jakarta slums, a derelict apartment building has become a no-go area - even the police are unwilling to enter. It has become a safe-house for the most dangerous killers and gangsters. A SWAT team infiltrate the building, under the cover of darkness, to remove its owner - a notorious drug lord named Tama.",
	"poster": "media/images/theraidredemptionposter.jpg",
	"link": "reviews.html??title=theRaidRedemption",
	"review": "75",
	"rating": "",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R18",
	"runtime": "101min",
	"releaseDate": "13th Apr 2012",
	"director": "Gareth Evans"},
	
	{"parent": "22JumpStreet",
	"title": "22 Jump Street",
	"genre": "Comedy",
	"synopsis": "Although they made their way through high school successfully, an investigation at a local college brings big changes for undercover officers Jenko (Channing Tatum) and Schmidt (Jonah Hill). When Jenko meets a kindred spirit on the football team and Schmidt infiltrates the bohemian art-major scene, both men begin to question their partnership. Not only do they have to crack the case, but now the two overgrown adolescents must learn how to behave like adults.",
	"poster": "media/images/22jumpstreetposter.jpg",
	"link": "reviews.html??title=22JumpStreet",
	"review": "",
	"rating": "69",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R13",
	"runtime": "172min",
	"releaseDate": "13th Jun 2014",
	"director": "Phil Lord/Christopher Miller"},
	
	{"parent": "shaunOfTheDead",
	"title": "Shaun of the Dead",
	"genre": "Comedy",
	"synopsis": "Shaun (Simon Pegg) is a 30-something loser with a dull, easy existence. When he's not working at the electronics store, he lives with his slovenly best friend, Ed (Nick Frost), in a small flat on the outskirts of London. The only unpredictable element in his life is his girlfriend, Liz (Kate Ashfield), who wishes desperately for Shaun to grow up and be a man. When the town is inexplicably overrun with zombies, Shaun must rise to the occasion and protect both Liz and his mother (Penelope Wilton).",
	"poster": "media/images/shaunofthedeadposter.jpg",
	"link": "reviews.html??title=shaunOfTheDead",
	"review": "",
	"rating": "90",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R13",
	"runtime": "99min",
	"releaseDate": "24th Sept 2004",
	"director": "Edgar Wright"},
	
	{"parent": "tropicThunder",
	"title": "Tropic Thunder",
	"genre": "Comedy",
	"synopsis": "While shooting a war film, the director attempts to liven up proceedings by dropping the principle actors into the middle of a real jungle, claiming he is going to capture their performance with hidden cameras. The hapless group including drug-addled comedy star Jeff Portnoy and po-faced method man Kirk Lazarus are completely unaware when a series of unfortunate events leads them into the middle of a real war zone.",
	"poster": "media/images/tropicthunderposter.jpg",
	"link": "reviews.html??title=tropicThunder",
	"review": "",
	"rating": "85",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "107min",
	"releaseDate": "13th Aug 2008",
	"director": "Ben Stiller"},
	
	{"parent": "stepBrothers",
	"title": "Step Brothers",
	"genre": "Comedy",
	"synopsis": "Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennan's mother and Dale's father marry and move in together, it turns the overgrown boys' world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents.",
	"poster": "media/images/stepbrothersposter.jpg",
	"link": "reviews.html??title=stepBrothers",
	"review": "",
	"rating": "73",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "98min",
	"releaseDate": "25th jul 2008",
	"director": "Adam McKay"},
	
	{"parent": "theHangover",
	"title": "The Hangover",
	"genre": "Comedy",
	"synopsis": "Two days before his wedding, Doug (Justin Bartha) and three friends (Bradley Cooper, Ed Helms, Zach Galifianakis) drive to Las Vegas for a wild and memorable stag party. In fact, when the three groomsmen wake up the next morning, they can't remember a thing; nor can they find Doug. With little time to spare, the three hazy pals try to re-trace their steps and find Doug so they can get him back to Los Angeles in time to walk down the aisle.",
	"poster": "media/images/thehangoverposter.jpg",
	"link": "reviews.html??title=theHangover",
	"review": "",
	"rating": "78",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "100min",
	"releaseDate": "5th Jun 2009",
	"director": "Todd Phillips"},
	
	{"parent": "americanBeauty",
	"title": "American Beauty",
	"genre": "Drama",
	"synopsis": "A telesales operative becomes disillusioned with his existence and begins to hunger for fresh excitement in his life. As he experiences a new awakening of the senses, his wife and daughter also undergo changes that seriously affect their family. Critically acclaimed, this film won Oscars for Best Screenplay, Best Director, Best Actor and Best Film.",
	"poster": "media/images/americanbeautyposter.jpg",
	"link": "reviews.html??title=americanBeauty",
	"review": "",
	"rating": "91",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "122min",
	"releaseDate": "1st Oct 1999",
	"director": "Sam Mendes"},
	
	{"parent": "forrestGump",
	"title": "Forrest Gump",
	"genre": "Drama",
	"synopsis": "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
	"poster": "media/images/forrestgumpposter.jpg",
	"link": "reviews.html??title=forrestGump",
	"review": "",
	"rating": "87",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "M",
	"runtime": "142min",
	"releaseDate": "6th Jul 1994",
	"director": "Robert Xemeckis"},
	
	{"parent": "schindlersList",
	"title": "Schindler's List",
	"genre": "Drama",
	"synopsis": "Businessman Oskar Schindler (Liam Neeson) arrives in Krakow in 1939, ready to make his fortune from World War II, which has just started. After joining the Nazi party primarily for political expediency, he staffs his factory with Jewish workers for similarly pragmatic reasons. When the SS begins exterminating Jews in the Krakow ghetto, Schindler arranges to have his workers protected to keep his factory in operation, but soon realizes that in so doing, he is also saving innocent lives.",
	"poster": "media/images/schindlerslistposter.jpg",
	"link": "reviews.html??title=schindlersList",
	"review": "",
	"rating": "91",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "M",
	"runtime": "195min",
	"releaseDate": "4th Feb 1994",
	"director": "Steven Speilberg"},
	
	{"parent": "theShawshankRedemption",
	"title": "The Shawshank Redemption",
	"genre": "Drama",
	"synopsis": "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
	"poster": "media/images/theshawshankredemptionposter.jpg",
	"link": "reviews.html??title=theShawshankRedemption",
	"review": "",
	"rating": "95",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R16",
	"runtime": "142min",
	"releaseDate": "14th Oct 1994",
	"director": "Frank Darabont"},
	
	{"parent": "whiplash",
	"title": "Whiplash",
	"genre": "Drama",
	"synopsis": "Andrew Neiman (Miles Teller) is an ambitious young jazz drummer, in pursuit of rising to the top of his elite music conservatory. Terence Fletcher (J.K. Simmons), an instructor known for his terrifying teaching methods, discovers Andrew and transfers the aspiring drummer into the top jazz ensemble, forever changing the young man's life. But Andrew's passion to achieve perfection quickly spirals into obsession, as his ruthless teacher pushes him to the brink of his ability and his sanity. ",
	"poster": "media/images/whiplashposter.jpg",
	"link": "reviews.html??title=whiplash",
	"review": "",
	"rating": "92",
	"summary": "",
	"pros": "",
	"cons": "",
	"classification": "R13",
	"runtime": "106min",
	"releaseDate": "23rd oct 2014",
	"director": "Damien Chazelle"}
	];

//Load genre page
movieIndex = 0;

function genrePageFunctions() {
	showWelcome();
	showMovies(movieIndex);
}

function showWelcome(){
	const genreTitle = document.getElementsByClassName("genreTitle");
	const genreSynopsis = document.getElementsByClassName("genreSynopsis");
	
	const pageGenre = parent.document.URL.substring(parent.document.URL.indexOf('=')).slice(1);
	
	for (var index = 0; index < genreInfo.length; index ++){
		if(genreInfo[index].genre == pageGenre){
			genreTitle[0].innerHTML = genreInfo[index].genre;
			genreTitle[1].innerHTML = genreInfo[index].genre;
			genreSynopsis[0].innerHTML = genreInfo[index].synopsis;
		}
	}
}

function plusMovies(n) {
	showMovies(movieIndex += n);
}

function showMovies(n){
	//show movies within genre page
	genreMovieArray = [];
	
	const movieTitle = document.getElementsByClassName("carouselTitle");
	const pageGenre = parent.document.URL.substring(parent.document.URL.indexOf('=')).slice(1);

	//Populate the genre moive array with all movies in specific genre.
	for (var index = 0; index < movieInfo.length; index ++){
		if(movieInfo[index].genre == pageGenre){
			genreMovieArray.push(movieInfo[index]);
		}
	}
	
	if (n > genreMovieArray.length - 1){
		movieIndex = 0;
	}
	if (n < 0){
		movieIndex = genreMovieArray.length - 1;
	}
	
	const movieSynopsis = document.getElementsByClassName("carouselSynopsis");
	const moviePoster = document.getElementsByClassName("carouselPoster");
	const movieLink = document.getElementsByClassName("carouselLink");

	articleIndex = movieIndex
	
	for (var index = 0; index < 3; index ++){
		movieTitle[index].innerHTML = genreMovieArray[articleIndex].title;
		movieSynopsis[index].innerHTML = genreMovieArray[articleIndex].synopsis;
		moviePoster[index].src = genreMovieArray[articleIndex].poster;
		moviePoster[index].alt = genreMovieArray[articleIndex].title;
		movieLink[index].href = genreMovieArray[articleIndex].link;
		if (articleIndex == genreMovieArray.length - 1){
			articleIndex = 0;
		} else {
			articleIndex++;
		}
	}
}

//Movie page functions
//Genre Objects
const genreInfo = [
	{"genre": "Sci-Fi",
	"synopsis": "Science fiction film (or sci-fi film) is a genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition.",
	"poster": "media/images/scifigenre.jpg",
	"href": "genres.html??genre=Sci-Fi",
	"ambientAudio": "media/audio/scifiambient.mp3"},
	
	{"genre": "Horror",
	"synopsis": "Horror films often aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown. Plots within the horror genre often involve the intrusion of an evil force, event, or personage into the everyday world. Prevalent elements include ghosts, extraterrestrials, vampires, werewolves, demons, Satanism, evil clowns, gore, torture, vicious animals, evil witches, monsters, zombies, cannibalism, psychopaths, natural or man-made disasters, and serial killers.",
	"poster": "media/images/horrorgenre.jpg",
	"href": "genres.html??genre=Horror",
	"ambientAudio": "media/audio/horrorambient.mp3"},
	
	{"genre": "Action",
	"synopsis": "An extremely successful and influential mode of popular cinema that foregrounds spectacular movement of bodies, vehicles and weapons, and state-of-the-art special effects. These highly dynamic elements (with the actor's physical performance a central attraction) are usually held together by a fast-paced, pared down, goal-orientated, narrative structure.<br>The action film is strongly associated with the adventure film, with swashbucklers, pirate films, historical epic films, and safari films all popular from the 1910s.",
	"poster": "media/images/actiongenre.jpg",
	"href": "genres.html??genre=Action",
	"ambientAudio": "media/audio/actionambient.mp3"},
	
	{"genre": "Comedy",
	"synopsis": "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.[1] Films in this style traditionally have a happy ending (black comedy being an exception).",
	"poster": "media/images/comedygenre.jpg",
	"href": "genres.html??genre=Comedy",
	"ambientAudio": "media/audio/comedyambient.mp3"},
	
	{"genre": "Drama",
	"synopsis": "Drama Films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.",
	"poster": "media/images/dramagenre.jpg",
	"href": "genres.html??genre=Drama",
	"ambientAudio": "media/audio/dramaambient.mp3"},
];

//Load movies page
genreIndex = 0;

function moviePageFunctions() {
	showGenres(genreIndex);
}

function plusGenres(n) {
	showGenres(genreIndex += n);
}

function showGenres(n){
	
	if (n > genreInfo.length - 1){
		genreIndex = 0;
	}
	if (n < 0){
		genreIndex = genreInfo.length - 1;
	}
	
	const carouselTitle = document.getElementsByClassName("carouselTitle");
	const carouselSynopsis = document.getElementsByClassName("carouselSynopsis");
	const carouselPoster = document.getElementsByClassName("carouselPoster");
	const carouselLink = document.getElementsByClassName("carouselLink");
	const carouselAmbientAudio = document.getElementsByClassName("carouselAmbientAudio");

	articleIndex = genreIndex
	
	for (var index = 0; index < 3; index ++){
		carouselTitle[index].innerHTML = genreInfo[articleIndex].genre;
		carouselSynopsis[index].innerHTML = genreInfo[articleIndex].synopsis;
		carouselPoster[index].src = genreInfo[articleIndex].poster;
		carouselPoster[index].alt = genreInfo[articleIndex].genre;
		carouselLink[index].href = genreInfo[articleIndex].href;
		carouselAmbientAudio[index].src = genreInfo[articleIndex].ambientAudio;
		if (articleIndex == genreInfo.length - 1){
			articleIndex = 0;
		} else {
			articleIndex++;
		}
	} 
}

function playAmbientAudio(){
	var ambientAudio = document.getElementsByClassName("carouselAmbientAudio")
	console.log(ambientAudio);
	ambientAudio.play();
}

function stopAmbientAudio(){
	var ambientAudio = document.getElementsByClassName("carouselAmbientAudio")
	ambientAudio.pause();
}

//Movie news page functions
 function movieNewsPageFunctions() {
	sortByDate();
	showNewsSources();
 }
 
//Load news articles
 const newsSourceInfo = [
	{"siteName": "Variety",
	"synopsis": "Warner Bros. has moved Gal Gadot’s <em>Wonder Woman 1984</em> back seven months from Nov. 1, 2019, to June 5, 2020.<br>The sequel, which is set in 1984, replaces Mark Wahlberg’s <em>Six Billion Dollar Man,</em> which has been taken off the schedule.",
	"poster": "media/images/varietylogo.png",
	"href": "https://variety.com/2018/film/news/wonder-woman-1984-pushed-back-2020-1202988413/",
	"dateAdded": "23/10/2018"},
	
	{"siteName": "The Wrap",
	"synopsis": "<em>Boardwalk Empire</em> and <em>Fargo</em> star Shea Whigham has shared some character details for his role on the upcoming <em>Joker</em> movie starring Joaquin Phoenix.<br>Short of some images from the set and a curious cast that also includes Robert De Niro, Zazie Beetz, Marc Maron, Frances Conroy and Glenn Flesher",
	"poster": "media/images/thewraplogo.png",
	"href": "https://www.thewrap.com/shea-whigham-spills-character-details-on-joaquin-phoenix-joker-movie/",
	"dateAdded": "22/10/2018"},
	
	{"siteName": "Slash Film",
	"synopsis": "The upcoming <em>Wreck-It Ralph</em> sequel occupies a unique space in the Disney corporate synergy plan — as an irreverent comedy, seemingly nothing is off-limits to be mocked, but it’s still a movie whose biggest viral moment is a scene where all the Disney princesses meet Vanellope Von Schweetz (Sarah Silverman). And director Rich Moore discovered just where <em>Ralph Breaks the Internet</em> had to tread lightly between satire and synergy when they wrote a joke about Kylo Ren.",
	"poster": "media/images/slashfilmlogo.png",
	"href": "https://www.slashfilm.com/ralph-breaks-the-internet-kylo-ren-joke/",
	"dateAdded": "22/10/2018"}
]

function sortByDate() {
	var recentOne = "";
	var recentTwo = "";
	var recentThree = "";
	
	for (var index = 0; index < newsSourceInfo.length; index++){
		if (newsSourceInfo[index].dateAdded > recentOne){
			recentThree = recentTwo;
			recentTwo = recentOne;
			recentOne = newsSourceInfo[index].dateAdded;
			
		} else if (newsSourceInfo[index].dateAdded > recentTwo){
			recentThree = recentTwo;
			recentTwo = newsSourceInfo[index].dateAdded;
		} else if (newsSourceInfo[index].dateAdded > recentThree){
			recentThree = newsSourceInfo[index].dateAdded;
		}
	}
}

function showNewsSources() {
	
	const newsSource = document.getElementsByClassName("newsSource");
	const newsSynopsis = document.getElementsByClassName("newsSynopsis");
	const newsSourcePoster = document.getElementsByClassName("sourceLogo");
	const newsSourceLink = document.getElementsByClassName("newsLink");
	
	for (var index = 0; index < 3; index ++){
		newsSource[index].innerHTML = newsSourceInfo[index].siteName;
		newsSynopsis[index].innerHTML = newsSourceInfo[index].synopsis;
		newsSourcePoster[index].src = newsSourceInfo[index].poster;
		newsSourcePoster[index].alt = newsSourceInfo[index].siteName;
		newsSourceLink[index].href = newsSourceInfo[index].href;
	}
}

//Reviews page section

function reviewsPageFunctions() {
	showReviews();
}

function showReviews() {
	
	const movieTitle = document.getElementsByClassName("movieTitle");
	const movieReview = document.getElementsByClassName("movieReview");
	const movieClassification = document.getElementsByClassName("movieClassification");
	const moviePoster = document.getElementsByClassName("moviePoster");
	const movieGenre = document.getElementsByClassName("movieGenre");
	const movieRuntime = document.getElementsByClassName("movieRuntime");
	const movieReleaseDate = document.getElementsByClassName("movieReleaseDate");
	const movieDirector = document.getElementsByClassName("movieDirector");
	const movieSummary = document.getElementsByClassName("movieSummary");
	const moviePros = document.getElementsByClassName("moviePros");
	const movieCons = document.getElementsByClassName("movieCons");
	const movieRating = document.getElementsByClassName("movieRating");
	
	console.log(parent.document.URL.substring(parent.document.URL.indexOf('=')).slice(1));
	
	var currentPage = parent.document.URL.substring(parent.document.URL.indexOf('=')).slice(1);
	
	for (var index = 0; index < movieInfo.length; index ++){
		
		if (movieInfo[index].parent == currentPage){
			movieTitle[0].innerHTML = movieInfo[index].title;
			movieTitle[1].innerHTML = movieInfo[index].title;
			movieReview[0].innerHTML = movieInfo[index].review;
			movieClassification[0].innerHTML = movieInfo[index].classification;
			moviePoster[0].src = movieInfo[index].poster;
			moviePoster[0].alt = movieInfo[index].title;
			movieGenre[0].innerHTML = movieInfo[index].genre;
			movieRuntime[0].innerHTML = movieInfo[index].runtime;
			movieReleaseDate[0].innerHTML = movieInfo[index].releaseDate;
			movieDirector[0].innerHTML = movieInfo[index].director;
			movieSummary[0].innerHTML = movieInfo[index].summary;
			moviePros[0].innerHTML = movieInfo[index].pros;
			movieCons[0].innerHTML = movieInfo[index].cons;
			movieRating[0].innerHTML = movieInfo[index].rating;
		}
		
		
	}
	
}

//Coming soon page functions
const comingSoonMovies = [
	{"title": "The Godfather",
	"synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
	"poster": "media/images/thegodfatherposter.jpg"},
	
	{"title": "	Fantastic Beasts: The Crimes of Grindelwald",
	"synopsis": "The second installment of the <em>Fantastic Beasts</em> series set in J.K. Rowling's Wizarding World featuring the adventures of magizoologist Newt Scamander.",
	"poster": "media/images/fantasticbeastsposter.jpg"},
	
	{"title": "Robin Hood",
	"synopsis": "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown in a thrilling action-adventure packed with gritty battlefield exploits, mind-blowing fight choreography, and a timeless romance.",
	"poster": "media/images/robinhoodposter.jpg"}
]

function comingSoonPageFunctions() {
	
	const movieTitle = document.getElementsByClassName("movieTitle");
	const movieSynopsis = document.getElementsByClassName("movieSynopsis");
	const moviePoster = document.getElementsByClassName("moviePoster");
	
	
	for (var index = 0; index < 3; index ++){
		movieTitle[index].innerHTML = comingSoonMovies[index].title;
		movieSynopsis[index].innerHTML = comingSoonMovies[index].synopsis;
		moviePoster[index].src = comingSoonMovies[index].poster;
		moviePoster[index].alt = comingSoonMovies[index].title;
	}
}