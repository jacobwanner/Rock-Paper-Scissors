function getNewComputerChoice() {
    let answer = Math.floor(Math.random()*3 +1);  
    if (answer === 1) {
        return "rock"
    } else if (answer === 2) {
        return "paper"
    } else if (answer === 3) {
        return "scissors"
    }
}

function getNewUserChoice() {
    return prompt("Write rock paper or scissors:").toLowerCase();
}

let amountOfRounds = prompt("How many rounds for this game?");
let userSelection = getNewUserChoice();
let computerSelection = getNewComputerChoice();
let computerWinner = "The computer wins this round.";
let userWinner = "You win this round.";
let tieRound = "Tie game. It's a draw!";
let userScore = 0;
let computerScore = 0;

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        console.log(tieRound)
    } else if (userSelection === "rock" && computerSelection === "paper" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "rock" && computerSelection === "scissors" ) {
        console.log(userWinner)
        userScore++;
    } else if (userSelection === "paper" && computerSelection === "rock" ) {
        console.log(userWinner)
        userScore++
    } else if (userSelection === "paper" && computerSelection === "scissors" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "scissors" && computerSelection === "rock" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "scissors" && computerSelection === "paper" ) {
        console.log(userWinner)
        userScore++
    } else {
        console.log("Mission Failed. We'll get e'm next time.")
    }
}

// let endOfGameTie =  "Game over!" + tieRound + "!" + " Final Score: " + userScore + "-" + computerScore;
// let endOfGameWinner = "Game over! You Win!"+ " Final Score: " + userScore + "-"+ computerScore;
// let endOfGameLoser = "Game over! You Lose!"+ " Final Score: " + userScore + "-"+ computerScore;

function game() {
    for (let i=0; i<amountOfRounds; i++){
        getNewUserChoice();
        getNewComputerChoice();
        console.log("Your choice: " + userSelection);
        console.log("The computer chose " + computerSelection);
        playRound(userSelection, computerSelection); 
        console.log("Your score: " + userScore + " Computer score: " + computerScore);
    }
    // if (userScore === computerScore){
    //     return endOfGameTie;
    // } else if (userScore > computerScore){
    //     return endOfGameWinner;
    // } else if (userScore < computerScore){
    //     return endOfGameLoser;
    // } else {
    //     return "didnt quite work";
    // }
}

game()
