let rps = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice() {
    let computerChoice = rps[Math.floor(Math.random() * rps.length)];
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
    let playerScore = 0; 
    let computerScore = 0;
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    for (let n=1; n <= 5; n++) {
        if (result = "you win!") {
            playerScore = playerScore++;
        }   else if (result = "you lose!") { 
            computerScore = computerScore++;
        }   else if (playerScore == 3 && computerScore < 3) {
            alert ("You won the game!");
            break;
        }   else if (playerScore < 3 && computerScore == 3) {
            alert ("You lost the game");
            break;
        }
    }
}

console.log(game())


    // add for loop
      //call playRound 
   

