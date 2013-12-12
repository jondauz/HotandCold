$(document).ready(function(){
    var randomNumber; 
    var guess; 
    var numberGuesses; 
    newGame(); 

    // $ gets called when user clicks "New Game", assigns value to the randomNumber variable,
    // clears  text in input field, sets text in game zone
    function newGame(){
        randomNumber=Math.floor(Math.random() *100) + 1; 
        console.log(randomNumber);
        numberGuesses=0; 
        $("#inputbox").val(""); 
        $("#message").text("Are you feeling lucky?"); 
        $("#guesses").text("");
    } 

    // $ gets called when events happens in the "#submit" element.
    function newGuess() {
    guess=$("#inputbox").val(); 
    if (isNaN(guess)){
        $("#message").text("That's not a number! Please choose a number."); 
    }                                      
    else {
        numberGuesses++; 
        $("#guesses").text("Number of guesses: " + numberGuesses); 
        hotorCold(guess);
        }
    }

    // clicks on "#submit"
    $("#submit").click(function(e){
        newGuess();
    });

    // presses enter on "#inputbox" element
    $("#inputbox").keydown(function(e){
        if (e.keyCode == 13) {
            $("#submit").click();
            return false;
        }
    });

    function hotorCold(userInput){ 
        var absoluteGuess = Math.abs(randomNumber-userInput); 
        if (numberGuesses <10){  
            if (userInput==randomNumber){                   
                $("#message").text("You won a pot of gold! You guessed the right number!"); 
            }   
            else if (userInput>100 || userInput<1)  {
                $("#message").text("Try again! Choose a number between 1 and 100.")
            }   
            else if (absoluteGuess <=2){
                $("#message").text("Burning, so close!");
            }                                  
            else if (absoluteGuess <=5){  
                $("#message").text("Heating up!");
            }
            else if (absoluteGuess >=6 && absoluteGuess <=10){  
                $("#message").text("Warm!");
            }
            else if (absoluteGuess >=11 && absoluteGuess <=20){  
                $("#message").text("Cold!");
            }
            else if (absoluteGuess >=20){
                $("#message").text("Freezing!")
            }
        }
        else {
            $("#message").text("Game Over! Click New Game to play again!"); 
        }
    }

    $("#newgame").click(function(){  
        newGame();  
    });

});

