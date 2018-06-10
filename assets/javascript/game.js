
//event listener on any key to start




//global Variables
var songArtist= ""; //artist they must guess
var songArtistLetters =[];
var lettersGuessed = []; //letter user guesses
var wrongGuesses = []; //letters user got wrong
var correctGuesses = []; //letters user got wrong
var isMatch= false; //
var wins= 0;
var guesses= 12;
var board = "";
var dashArray = []; 
var userGuess = "";
var letter;
var wrong;
var numBlanks= 0;

//objects
//create the artist object

var game= {
    lettersGuessed: "",
    wrongGuesses:[],
    correctGuesses:[],
    isMatch: false,
    wins: 0,
    guesses: 0,

    artists:{
        "MANTRONIX" :{
            name: "Mantronix",
            song: "Fresh Is the Word",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "PRINCE" :{
            name: "Prince",
            song: "Kiss",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "BRANDY":{
            name: "Brandy",
            song: "I Wanna Be Down",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "BEYONCE":{
            name: "Beyonce",
            song: "Run the World (Girls)",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "RIHANNA":{
            name: "Rihanna",
            song: "Bitch Better Have My Money",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "LEDISI":{
            name: "Ledisi",
            song: "Pieces Of Me",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "EMINEM":{
            name: "Eminem",
            song: "\'Till I Collapse",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        }

    } //end of artists object
} //end game object     

//fuctions calls


//pick a random artist & put the letters in an array using split()
var randomArtist =  function(){
    //create array from an object key
    var nameArray=Object.keys(game.artists);
    // create random # to find index for array
    var randomNum= Math.floor(Math.random()*7);
    //put the artist from the array into a variable
    songArtist = nameArray[randomNum];
    console.log(randomNum + " " + songArtist);
    //split the songArtist up into characters
    //If an empty string ("") is used as the separator, the string is split between each character.
    songArtistLetters = songArtist.split("");
    //console.log(songArtistLetters);
};
randomArtist();

var startGame = function() {

    guesses= 13;
    dashArray = [];
    letterGuess = []; 
    wrongGuesses = []; 
    correctGuesses = [];
    
        for(var i = 0; i< songArtistLetters.length; i++)     {
            dashArray.push("_");
 
            };     
        console.log(songArtistLetters + " " + dashArray);  
        userGuess= "";
        document.onkeyup = function(event) {
            if(event.which <=90 && event.which >=48) {
                userGuess = event.key.toUpperCase()

                checkGuess(userGuess);
              
            };
        
 
        dashArray1 = dashArray.join(' ');

        $("#guess").text(dashArray1);
        
            


} //end startGame Function
};

var checkGuess = function (userGuess){
    numBlanks = songArtistLetters.length;
    letter = songArtistLetters.indexOf(userGuess);
    if(songArtistLetters.indexOf(userGuess)=== -1) {  
        wrongGuesses.push(userGuess);
        wrong = userGuess
        $("#lettersGuessed").append(wrong);
        isMatch=false;
        guesses--;
        console.log("Letter: " + letter + " | Wrong: "+ wrong);
        console.log("Guesses Left: "+ guesses);

    } else{
        correctGuesses.push(userGuess);
        guesses--;
        isMatch=true;
        if(isMatch){
            for(var j =0; j < numBlanks; j++){
                if(songArtist[j]=== userGuess){
                    dashArray[j] = userGuess;
                }
            }
        
    console.log("Song Artist:"+ songArtist +"| Dash Array: "+ dashArray);
    console.log("User Guess: "+ userGuess+ " | Is match: " + isMatch);
    // console.log("Letter: " + letter + " | Wrong: "+ wrong);
    console.log("Guesses Left: "+ guesses);
        
        
        // dashArray[letter] = userGuess;

    }
};//end of checkGuess Function
    

 }; 

startGame(); 


// put guesess in array and keep track of correct & incorrect guesses

//correct guesses to spanID  toUpperCase & remove dashes

//incorrect guesses to spanID 


/*


event listerns on keys player enters to guess

add letters to spanID  toUpperCase & remove dashes

add wrong guesses to span toUpperCase

*/