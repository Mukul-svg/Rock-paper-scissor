let compwin = 0;
let playerwin = 0;

function getComputerChoice() {

    let arr = ['paper', 'scissor', 'rock'];

    return arr[(Math.floor(Math.random() * arr.length))]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == computerSelection) {
        return ("Draw");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        compwin = compwin + 1;
        return ("Computer Win");
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerwin = playerwin + 1;
        return ("Player Win");
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") {
        compwin = compwin + 1;
        return ("Computer Win");
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
        playerwin = playerwin + 1;
        return ("Player Win");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") {
        playerwin = playerwin + 1;
        return ("Player Win");
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock") {
        compwin = compwin + 1;
        return ("Computer Win");
    }
    return;
  }
function game(){
  let computerSelection = getComputerChoice();

  let playerSelection = prompt("Choose: ");
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Choose: ");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Choose: ");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Choose: ");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Choose: ");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  console.log('Total Player wins: ' + playerwin)
  console.log('Total Computer wins: ' + compwin)
}

game()