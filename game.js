var buttonColors = ["red","blue", "green", "yellow"]
var gamePattern = []

// generate the next color sequence
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber; 
}

var randomChosenColour = buttonColors[nextSequence()];

gamePattern.push(randomChosenColour);
