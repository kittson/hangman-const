var Letter = function(theLetter) {
	//make a charac property and set it to what you think makes second_instructor_demonstration
	this.charac = theLetter;
	//make an appear property and set it to what makes sense
	this.appear = false;
	//make a letterRender property and set it to a function 
	//that does what you think makes sense
	this.letterRender = function() {
		if ( this.appear === false ) {
			return '_';
		}
		else {
			return this.charac;
		}
	};
};
module.exports = Letter;
//export the Letter constructor here