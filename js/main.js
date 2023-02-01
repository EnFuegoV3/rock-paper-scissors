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

console.log (getComputerChoice())