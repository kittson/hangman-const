//import Letter above with requiring the letter.js file
var Letter = require("./letter.js");

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	//var this = {};
	this.word = wrd;
	//set a property called letters to an empty array. We will eventually push letter objects in here
	this.letters = [];
	//set a property called found to false
	this.found = false;
	//make a property called getletters, set it to a function and inside the function loop over the word property and push letter objects into the letters property.
	this.getletters = function(){
		for(var i = 0; i < this.word.length; i++){
			this.letters.push(new Letter(this.word[i]));
		}
	}
	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].appear === false) {
				return this.found = false;
			}			
		}
		//return the found property
		return this.found = true;
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable numberLettersFound to 0
		var numberLettersFound = 0;
		//loop over the letters property and if the letter object's charac property 
		//equals the guessletter then set the appear property of the letter object to be true. 
		//Also increment numberLettersFound.
		for (var i = this.letters.length - 1; i >= 0; i--) {
			if(this.letters[i].charac === guessLetter) {
				this.letters[i].appear = true;
				numberLettersFound++;
			}
		}
		return numberLettersFound;
		//return numberLettersFound
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = '';
		//loop over this.letters and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i = 0; i < this.letters.length; i++) {
			str = str + " " + this.letters[i].letterRender() + " ";
		}
		return str;
	};
}

module.exports = Word;
//export the Word constructor here at the end
/*function myFunc(){
	console.log("do a thing");
}
myFunc();
var myObj = {
	thing1: "string",
	thing2: 1,
	thing3: [],
	thing4: {},
	thing5: function(){
		console.log("I'm a function!");
	}
}

var notThing1 = "thing5";
myObj.thing1; // === "string"
myObj[notThing1] // === "string"
myObj[notThing1]();*/






