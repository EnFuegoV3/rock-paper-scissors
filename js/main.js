let rps = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice() {
    let computerChoice = 
    rps [Math.floor(Math.random() * rps.length)];
    return computerChoice
}

function getUserChoice() {
    let input = (prompt ("Choose Rock, Paper or Scissors"));
    let weapon = input.toLowerCase();
    if (weapon === "rock" || weapon === "paper" || weapon === "scissors") {
        return;
    }
        else { alert ("try again");
           getUserChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "its a tie!"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
                    result = "you win!";
                } else { result = "you lose!" }
                return result;
    }

   function game() {
    // add player and computer score
    // add for loop
      //call playRound 
   }

