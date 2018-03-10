$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var currentScore = 0;

    var getRandomNumber = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var randomNumber = getRandomNumber(19, 120);

    $("#mysteryNumber").html(randomNumber);
    $("#userScore").html(currentScore);
    
    var crystal1 = getRandomNumber(1, 12);
    var crystal2 = getRandomNumber(1, 12);
    var crystal3 = getRandomNumber(1, 12);
    var crystal4 = getRandomNumber(1, 12);
  
    var newValues = function() {
      crystal1 = getRandomNumber(1, 12);
      crystal2 = getRandomNumber(1, 12);
      crystal3 = getRandomNumber(1, 12);
      crystal4 = getRandomNumber(1, 12);
      $("#userScore").html(currentScore);
    };
  
    $("#crystal1").on("click", function() {
      currentScore += crystal1;
      $("#userScore").html(currentScore);
      updateScore();
    });

    $("#crystal2").on("click", function() {
      currentScore += crystal2;
      $("#userScore").html(currentScore);
      updateScore();
    });

    $("#crystal3").on("click", function() {
      currentScore += crystal3;
      $("#userScore").html(currentScore);
      updateScore();
    });

    $("#crystal4").on("click", function() {
      currentScore += crystal4;
      $("#userScore").html(currentScore);
      updateScore();
    });
  
    var updateScore = function() {
      if (randomNumber === currentScore) {
        wins++;
        $("#wins").html(wins);
        $("#mysteryNumber").empty();
        randomNumber = getRandomNumber(19,120);
        $("#mysteryNumber").html(randomNumber);
        currentScore = 0;
        $("#userScore").html(currentScore)
        newValues();
      }
      
      if (randomNumber < currentScore) {
        losses++;
        $("#losses").html(losses);
        $("#mysteryNumber").empty();
        randomNumber = getRandomNumber(19,120);
        $("#mysteryNumber").html(randomNumber);
        currentScore = 0;
        $("#userScore").html(currentScore)
        newValues();
      }
  
    }
  
  });