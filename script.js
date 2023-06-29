$(document).ready(function() {
  var playerScore = parseInt(localStorage.getItem("playerScore")) || 0
  var computerScore = parseInt(localStorage.getItem("computerScore")) || 0

  function playGame(playerChoice) {
    var choices = ["rock", "paper", "scissors"]
    var computerChoice = choices[Math.floor(Math.random() * choices.length)]
alert(computerChoice)
    var result
    if (playerChoice === computerChoice) {
      result = "mrbi7 had"
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "enti rab7it"
      playerScore++
      computerScore--
    } else {
      result = "Computer rabi7"
      computerScore++
      playerScore--
    }

    $("#result").text(result)
    $("#player-score").text(playerScore)
    $("#computer-score").text(computerScore)

    localStorage.setItem("playerScore", playerScore)
    localStorage.setItem("computerScore", computerScore)
  }

  /*   $(".choices").off("click");
    window.location.href = "https://www.youtube.com/"; */
  

  $("#reset-button").on("click", function() {
    playerScore = 0
    computerScore = 0
    $("#player-score").text(playerScore)
    $("#computer-score").text(computerScore)
    localStorage.setItem("playerScore", playerScore)
    localStorage.setItem("computerScore", computerScore)
  })

  $(".choices img").on("click", function() {
    var choice = $(this).data("choice")
    playGame(choice)
  })




  
})
