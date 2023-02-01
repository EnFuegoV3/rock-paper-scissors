let rps = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    let computerChoice = 
    rps [Math.floor(Math.random() * rps.length)];
    return computerChoice
}

function getUserChoice() {
    let input = (prompt ("Choose Rock, Paper or Scissors"));
    let result = input.toLowerCase();
    if (result == "rock" || result == "paper" || result == "scissors") {
        return;
    }
    else { alert ("try again");
           getUserChoice();
    }
}
