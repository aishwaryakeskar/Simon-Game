var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// Start game on first key press
var gameStarted = false;
$(document).keydown(function () {
  if (gameStarted == false) {
    $("h1").text("Level " + level);
    nextSequence();
  }
  gameStarted = true;
});

// User button clicks
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  checkAnswer(userChosenColor);

  console.log("last color index :" + buttonColors.indexOf(userChosenColor));

  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log("userPattern:" + userClickedPattern);
});

var i = 0;

function checkAnswer(currentLevel) {
  if (currentLevel == gamePattern[i]) {
    console.log("Success");
    i++;
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
      i = 0;
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// generate the next color sequence
function nextSequence() {
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  console.log("gamePattern:" + gamePattern);
}

// Plays sound according to the colour
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate button when clicked
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
    i = 0;
    userClickedPattern = [];
}