var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = 0;

document.onkeyup = function (event)	{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	var computerGuess = options[Math.floor(Math.random()*
		options.length)];

	console.log(computerGuess);

	if((userGuess)===(computerGuess)) {
		wins++;
		alert("Wins: " + wins);
	}

	if((userGuess) < (guessesLeft)) {
		losses++;
		alert("Losses: " + losses);

	}


	
var html = "<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + yourGuesses + "</p>";


document.querySelector("#game").innerHTML = html;

	}