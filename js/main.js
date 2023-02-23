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









// function game() {
//     let playerScore = 0; 
//     let computerScore = 0;
//     for (let n=1; n <= 5; n++) {
       
//         let outcome = playRound(playerSelection, computerSelection);
//         console.log(outcome);
//         if (playerScore === 3 || computerScore === 3) {
//             break;
//         }   else if (outcome == "you lose!") { 
//             computerScore++;
//             console.log("you lost the round!");
//         }   else if (outcome == "its a tie!") {
//             console.log("round is a draw");
//         }   else if (outcome == "you win!") {
//             playerScore++;
//             console.log("you won the round!");
//         }
//     }
    // if (playerScore > computerScore) {
    //     console.log("You won the game!");
    //  }  else if (playerScore < computerScore) {
    //     console.log("You lost the game!");
    //  }  else {console.log("its a tie!");}
// }



function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "its a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
                    result = "you win!";
                } else { result = "you lose!";
             }
                
                const roundOutcome = document.querySelector('#outcome');
                roundOutcome.textContent = result;
                return result;
                
    }


    const buttons = document.querySelectorAll('button');
    buttons.forEach(button) = () => {
        buttons.addEventListener('click', () => {
            let playerSelection = buttons.id;
            playRound(playerSelection, getComputerChoice());
            game2();
        }
        )
    
    }
    

const scores = document.querySelector('#scores');
const player = document.createElement('span');
const computer = document.createElement('span');
player.classList.add('score');
computer.classList.add('score');
scores.appendChild(player);
scores.appendChild(computer);




function game2() {
    let playerScore = 0;
    let computerScore = 0; 
    player.textContent = (`Your Score ${playerScore}`);
    computer.textContent = (`Computer Score ${computerScore}`);
    // const rock = document.querySelector('#rock');
    // rock.addEventListener('click', function round() { //on press initializes plaRound function with corresponding button weapon
    // let playerSelection = "rock";
    // playRound(playerSelection, getComputerChoice());
    // });
    // const paper = document.querySelector('#paper');
    // paper.addEventListener('click', function round() {
    // let playerSelection = "paper";
    // playRound(playerSelection, getComputerChoice());
    // });
    // const scissors = document.querySelector('#scissors');
    // scissors.addEventListener('click', function round() {
    // let playerSelection = "scissors";
    // playRound(playerSelection, getComputerChoice());
    // });
    let outcome = playRound();
    if (playerScore === 5 && computerScore < 5) {
        roundOutcome.textContent = "YOU WON THE GAME!";
     }  else if (playerScore < 5 && computerScore === 5) {
        roundOutcome.textContent = "YOU LOST THE GAME!";
     }  //else {console.log("its a tie!");}
        else if (outcome = "you lose!") {
        computerScore++;
    }   else if (outcome = "you win!") {
        playerScore++
    }


}


// game2();



    // add for loop
      //call playRound 
   

