var buttonColors = ["red","blue", "green", "yellow"]
var gamePattern = []

// generate the next color sequence
function nextSequence() { 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);

    // Select button with same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    console.log(randomChosenColour);

}

$("body").click(function(){nextSequence()});
