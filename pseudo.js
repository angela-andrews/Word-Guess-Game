//listener for what letter the user enters 

document.onkeyup = function(event){

    userGuess = String.fromCharCode(event.which).toUpperCase();
    checkGuess(userGuess);

        if(songArtistLetters[i])


};

//if correct, loop through word & pop blanks and sucesses array
// with every instance of that letter, 

// if the letter is guessd 2x every letter goes in

//at the top.. call round complete () manpuplate dom 
//say if won or loss
//check wins, losses, etc.

// make sure start game is invoked



 for(var i= 0; i< songArtistLetters.length;i++){
	for(var j=0; j < dashArray.length; j++){
        if (songArtistLetters[i] == " "){
                dashArray[j] = " ";
            }
        }