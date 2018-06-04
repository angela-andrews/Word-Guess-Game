
//event listener on any key to start
document.addEventListener("keypress", myFunction);

function myFunction() {
    alert("key was pressed");
}

//global Variables
var songArtist= ""; //artist they must guess
var songArtistLetters =[];
var letterGuess = ""; //letter user guesses
var wrongGuesses = []; //letters user got wrong
var correctGuesses = []; //letters user got wrong
var isMatch= false; //
var wins= 0;
var guesses= 12;
var board = "";

//objects
//create the artist object

var game= {
    letterGuess: "",
    wrongGuesses:[],
    correctGuesses:[],
    isMatch: false,
    wins: 0,
    guesses: 12,

    artists:{
        "BIG DADDY KANE" :{
            name: "Big Daddy Kane",
            song: "Raw",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "CARDI B" :{
            name: "Cardi B",
            song: "I Like it",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "MICHAEL JACKSON":{
            name: "Michael Jackson",
            song: "P.Y.T. (Pretty Young Thing)",
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
        "BLACK THOUGHT":{
            name: "Black Thought",
            song: "Dostoyevsky",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "GLADYS KNIGHT":{
            name: "Gladys Knight",
            song: "Neither On of Us",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "AMY WINEHOUSE":{
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

     //display dashes to ID
    board = document.getElementById('guess');
    for(var i = 0; songArtistLetters.length; i++)
    {
        
    }


};
// put guesess in array and keep track of correct & incorrect guesses

//correct guesses to spanID  toUpperCase & remove dashes

//incorrect guesses to spanID 


/*


event listerns on keys player enters to guess

add letters to spanID  toUpperCase & remove dashes

add wrong guesses to span toUpperCase

*/