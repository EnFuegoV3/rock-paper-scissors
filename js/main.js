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
    let playScore = 0; 
    let computerScore = 0;
    for (let n=1; n <= 5; n++) {
        playRound(playerSelection, computerSelection);
        if (result === "you won the game!" * 3) {
            alert ("You Won the Game!");
        }   else { alert ("You Lost the Game") }
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    // add for loop
      //call playRound 
   }

