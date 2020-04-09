var buttonColors = ["red","blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

// generate the next color sequence
function nextSequence() { 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    
    playSound(randomChosenColour);

    // Select button with same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    
    console.log("randomColour:" + randomChosenColour);

}

// User button clicks
$(".btn").click(function() {
    nextSequence();
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log("userPattern:" + userClickedPattern);
});

// Plays sound according to the colour
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


// Animate button when clicked
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
