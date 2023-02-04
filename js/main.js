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
    let input = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
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
                } else { result = "you lose!";
             }
                return result;
    }

function game() { //third iteration
    let playerScore = 0; 
    let computerScore = 0;
    for (let n=1; n <= 5; n++) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        if (outcome == "you win!") {
            playerScore++;
            console.log("you won the round!");
        }   else if (outcome == "you lose!") { 
            computerScore++;
            console.log("you lost the round!");
        }   else if (outcome == "its a tie!") {
            console.log("round is a draw");
        }   else if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    if (playerScore > computerScore) {
        alert ("You won the game!");
        console.log("You won the game!");
     }  else if (playerScore < computerScore) {
        alert ("You lost the game");
        console.log("You lost the game!");
     }  else {console.log("its a tie!");}
}


console.log(game())



    // add for loop
      //call playRound 
   

