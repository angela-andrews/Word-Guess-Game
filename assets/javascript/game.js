
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
var audioElement;


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
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/mantronix.m4a");
                audioElement.play();
            }
        },
        "PRINCE" :{
            name: "PRINCE",
            song: "Kiss",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/kiss.m4a");
                audioElement.play();
            }
        },
        "BRANDY":{
            name: "BRANDY",
            song: "I Wanna Be Down",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/iwannabedown.m4a");
                audioElement.play();
            }
        },
        "BEYONCE":{
            name: "BEYONCE",
            song: "Run the World (Girls)",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/runtheworld.m4a");
                audioElement.play();
            }
        },
        "RIHANNA":{
            name: "RIHANNA",
            song: "Bitch Better Have My Money",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/bitchbetter.m4a");
                audioElement.play();
            }
        },
        "LEDISI":{
            name: "Ledisi",
            song: "Pieces Of Me",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/piecesofme.m4a");//
                audioElement.play();
            }
        },
        "EMINEM":{
            name: "EMINEM",
            song: "\'Till I Collapse",
            track: function(){
                audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/audio/tillicollapse.m4a");
                audioElement.play();
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
    $(".pause").show();
    $(".pause").on("click", function() {
        audioElement.pause();
      });
    
    if(guesses ===0) {
        console.log("You lose");
          
    }else if(guesses!==0)  {
        wins++;  
        $("#wins").text(wins);
        console.log("Win Count: " + wins + "| You Win!!");
        setTimeout(startGame, 10*1000);
        
        
        switch(songArtist){
            case "BRANDY":
                $("img").attr("src", "assets/images/brandy.jpg");
                game.artists.BRANDY.track();
                break;
            case "BEYONCE":
                $("img").attr("src", "assets/images/beyonce.jpg");
                game.artists.BEYONCE.track();
                break;
            case "MANTRONIX":
                $("img").attr("src","assets/images/mantronix.jpg");
                game.artists.MANTRONIX.track();
                break;
            case "EMINEM":
                $("img").attr("src", "assets/images/mm.jpg");
                game.artists.EMINEM.track();
                break;
            case "RIHANNA":
                 $("img").attr("src", "assets/images/rihanna.jpg");
                game.artists.RIHANNA.track();
                break;
            case "LEDISI":
                $("img").attr("src", "assets/images/ledisi.jpg");
                game.artists.LEDISI.track();
                break;
            case "PRINCE":
                $("IMG").attr("src", "assets/images/prince.jpg");
                game.artists.PRINCE.track();
                

        } //end switch
       
       
    }
    $("#lettersGuessed").html("");
 }
startGame(); //function call

