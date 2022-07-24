function getComputerChoice() {
   let answer = Math.floor(Math.random()*3 +1);  
   if (answer === 1) {
        return "Rock"
    } else if (answer === 2) {
        return "Paper"
    } else if (answer === 3) {
        return "Scissors"
   let computerAnswer = Math.floor(Math.random()*3 +1);  
   if (computerAnswer === 1) {
        return "rock"
    } else if (computerAnswer === 2) {
        return "paper"
    } else if (computerAnswer === 3) {
        return "scissors"
    } else {
        return "Error BEEP BOP"
    } ;
    }
}
let userSelection = prompt("Write rock paper or scissors:");
let computerSelection = getComputerChoice();
let computerWinner = computerSelection + " beats " + userSelection + ". You Lose!";
let userWinner = userSelection + " beats " + computerSelection + ". You win!";

function playRound(userSelection, computerSelection) {
    if (userSelection == "rock" && computerSelection == "rock" ) {
        return "Tie game. It's a draw!"
    } else if (userSelection === "rock" && computerSelection === "paper" ) {
        return computerWinner
    } else if (userSelection === "rock" && computerSelection === "scissors" ) {
        return userWinner
    } else if (userSelection === "paper" && computerSelection === "rock" ) {
        return winnerComputer
    } else if (userSelection === "paper" && computerSelection === "scissors" ) {
        return userWinner
    } else if (userSelection === "scissors" && computerSelection === "rock" ) {
        return computerWinner
    } else if (userSelection === "scissors" && computerSelection === "paper" ) {
        return userWinner
    } else {
        return "Mission Failed. We'll get e'm next time."
    }
}

console.log(getComputerChoice());

console.log(playRound(userSelection, computerSelection)); 
