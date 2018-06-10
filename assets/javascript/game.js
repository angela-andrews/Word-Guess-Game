
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
            name: "MANTRONIX",
            song: "Fresh Is the Word",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "PRINCE" :{
            name: "PRINCE",
            song: "Kiss",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "BRANDY":{
            name: "BRANDY",
            song: "I Wanna Be Down",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "BEYONCE":{
            name: "BEYONCE",
            song: "Run the World (Girls)",
            track: function(){
                alert("get song to play");
            },
            image: function(){
                alert("get image to replace spotify image 256x256px");
            }
        },
        "RIHANNA":{
            name: "RIHANNA",
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
            name: "EMINEM",
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


var startGame = function() { 

    guesses= 13;
    dashArray = [];
    lettersGuessed = []; 
    wrongGuesses = []; 
    correctGuesses = [];
    //------
    isMatch= false;
    userGuess = "";
    letter;
    wrong = 0;
    numBlanks= 0;
    

    randomArtist();//function call 
        for(var i = 0; i< songArtistLetters.length; i++)     {
            dashArray.push("_");
 
            };     
        console.log(songArtistLetters + " " + dashArray);  
        userGuess= "";
        document.onkeyup = function(event) {
            if(event.which <=90 && event.which >=48) {
                userGuess = event.key.toUpperCase()

                checkGuess(userGuess); //function call
              
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
        $("#guessesLeft").text(guesses);
        if(guesses ===0) {
            roundComplete();
        }

    } else{
        correctGuesses.push(userGuess);
        guesses--;
        $("#guessesLeft").text(guesses);
        isMatch=true;
        if(isMatch){
            for(var j =0; j < numBlanks; j++){
                if(songArtist[j]=== userGuess){
                    dashArray[j] = userGuess;
                }
            }
        
    console.log("Song Artist:"+ songArtist );
    console.log("User Guess: "+ userGuess+ " | Is match: " + isMatch);

    console.log("Guesses Left: "+ guesses);
    console.log("DashArray(): "+ dashArray +" SongArtistLetters():" +songArtistLetters);
    
            
        

    }
};
            var sal = songArtistLetters.join(' ');
            var  da= dashArray.join(' ');
            if(sal === da){
                console.log(sal + " " + da);
                
                roundComplete();
            }


 }; //end of checkGuess Function
 function roundComplete(){

    if(guesses ===0) {
        console.log("You lose");
        //pause and place artist name and photo
                
        //startGame();  
    }else if(guesses!==0)  {
        wins++;  
        $("#wins").text(wins);
        console.log("Win Count: " + wins + "| You Win!!");
        setTimeout(startGame, 20*1000);
        console.log(songArtist + "change image");
        switch(songArtist){
            case 0:
                songArtist === game.artists.BRANDY.name;
                $("img").attr("src", "assets/images/brandy.jpg");
                break;
            case 1:
            songArtist === game.artists.BEYONCE.name;
                $("img").attr("src", "assets/images/beyonce.jpg");
                break;
            case 2:
                songArtist === game.artists.MANTRONIX.name;
                $("img").attr("src").replace("assets/images/spotify-256.png", "assets/images/mantronix.jpg");
                break;
            case 3:
                songArtist === game.artists.EMINEM.name;
                $("img").attr("src").replace("assets/images/spotify-256.png", "assets/images/mm.jpg");
                break;
            case 4:
                songArtist === game.artists.RIHANNA.name;
                $("img").attr("src").replace("assets/images/spotify-256.png", "assets/images/rihanna.jpg");
                break;
            case 5:
                songArtist === game.artists.LEDISI.name;
                $("img").attr("src").replace("assets/images/spotify-256.png", "assets/images/ledisi");
                break;
            case 6:
                songArtist === game.artists.PRINCE.name;
                $("img").attr("src").replace("assets/images/spotify-256.png", "assets/images/prince.jpg");
                

        } //end switch
        // //pause and place artist name and photo & play song
        startGame(); 
    }
    $("#lettersGuessed").html("");
 }
startGame(); //function call

