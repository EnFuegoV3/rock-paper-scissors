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


const scores = document.querySelector('#scores');
const final = document.querySelector('#final');
const player = document.createElement('span');
const computer = document.createElement('span');
const reset = document.querySelector('#reset');
final.classList.add('final');
player.classList.add('score');
computer.classList.add('score');
scores.appendChild(player);
scores.appendChild(computer);
reset.addEventListener('click', function() {
    location.reload();
})

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "its a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
                    result = "you win!";
                    playerScore++;
                } else { result = "you lose!";
                        computerScore++;
             }
                const roundOutcome = document.querySelector('#outcome');
                roundOutcome.textContent = result;
                return result;           
    }

const buttons = document.querySelectorAll('button')
buttons.forEach(function (i) {
    i.addEventListener('click', function (e) {
        let playerSelection = e.target.id;
        //console.log(playerSelection);
        //console.log(getComputerChoice())
        playRound(playerSelection, getComputerChoice());
        game2();

    });
});


function game2() {
    player.textContent = (`Your Score ${playerScore}`);
    computer.textContent = (`Computer Score ${computerScore}`);
    if (playerScore === 5 && computerScore < 5) {
        final.textContent = "YOU WON THE GAME!";
     }  else if (playerScore < 5 && computerScore === 5) {
        final.textContent = "YOU LOST THE GAME!";
     }
     
}


   

