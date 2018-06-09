
//event listener on any key to start




//global Variables
var songArtist= ""; //artist they must guess
var songArtistLetters =[];
var letterGuess = []; //letter user guesses
var wrongGuesses = []; //letters user got wrong
var correctGuesses = []; //letters user got wrong
var isMatch= false; //
var wins= 0;
var guesses= 10;
var board = "";
var dashArray = []; 
var userGuess = "";

//objects
//create the artist object

var game= {
    letterGuess: "",
    wrongGuesses:[],
    correctGuesses:[],
    isMatch: false,
    wins: 0,
    guesses: 14,

    artists:{
        BIGDADDYKANE :{
            name: "Big Daddy Kane",
            song: "Raw",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        CARDIB :{
            name: "Cardi B",
            song: "I Like it",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        MICHAELJACKSON:{
            name: "Michael Jackson",
            song: "P.Y.T. (Pretty Young Thing)",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        BEYONCE:{
            name: "Beyonce",
            song: "Run the World (Girls)",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        BLACKTHOUGHT:{
            name: "Black Thought",
            song: "Dostoyevsky",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        GLADYSKNIGHT:{
            name: "Gladys Knight",
            song: "Neither On of Us",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        AMYWINEHOUSE:{
            name: "Amy Winehouse",
            song: "Mr. Magic",
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

    guesses= 10;
    dashArray = [];
    letterGuess = []; 
    wrongGuesses = []; 
    correctGuesses = [];
    
        for(var i = 0; i< songArtistLetters.length; i++)     {
dashArray.push("_");
 
    };      console.log(songArtistLetters + " " + dashArray);  /*
------ issue--------
    

    --changed the guess append to text & dashes print with ,
letterguess did not print.    
 --using join, the dashes print w/o
commas, but at subsequent key presses, I get an error: Uncaught
TypeError: dashArray.join is not a function


*/
    userGuess= "";
    document.onkeyup = function(event) {
//    userGuess = String.fromCharCode(event.which).toUpperCase();
userGuess = event.key.toUpperCase();
   //  //dashes = songArtistLetters.length;
   //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join
   dashArray1 = dashArray.join(' ');
//_______________________________________________________


for(var i= 0; i< songArtistLetters.length;i++){
	for(var j=0; j < dashArray.length; j++){
        if (songArtistLetters[i] == " "){
                dashArray[j] = " ";
            }
        }
    }
    $("#guess").text(dashArray1);
    $("#lettersGuess").append(userGuess);
        checkGuess(userGuess);


} //end startGame Function
};

var checkGuess = function (userGuess){
    if(songArtistLetters.indexOf(userGuess)=== -1) {  
        wrongGuesses.push(userGuess);
        guesses--;

    } else{
        correctGuesses.push(userGuess)

    }
    

}; //end of checkGuess Function

startGame(); 


// put guesess in array and keep track of correct & incorrect guesses

//correct guesses to spanID  toUpperCase & remove dashes

//incorrect guesses to spanID 


/*


event listerns on keys player enters to guess

add letters to spanID  toUpperCase & remove dashes

add wrong guesses to span toUpperCase

*/