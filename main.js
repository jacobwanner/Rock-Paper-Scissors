const amountOfRounds = prompt("How many rounds for this game?");
let userSelection = getNewUserChoice();
let computerSelection = getNewComputerChoice();
const computerWinner = "The computer wins this round.";
const userWinner = "You win this round.";
const tieRound = "Tie game. It's a draw!";
let userScore = 0;
let computerScore = 0;
// const endOfGameTie =  "Game over!" + tieRound + "!" + " Final Score: " + userScore + "-" + computerScore;
// const endOfGameWinner = "Game over! You Win!"+ " Final Score: " + userScore + "-"+ computerScore;
// const endOfGameLoser = "Game over! You Lose!"+ " Final Score: " + userScore + "-"+ computerScore;

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

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        console.log(tieRound)
    } else if ((userSelection === "rock" && computerSelection === "paper") ||
              (userSelection === "paper" && computerSelection === "scissors") ||
              (userSelection === "scissors" && computerSelection === "rock")) {
        console.log(computerWinner)
        computerScore++;
    } else if ((userSelection === "rock" && computerSelection === "scissors") ||
              (userSelection === "paper" && computerSelection === "rock") ||
              (userSelection === "scissors" && computerSelection === "paper")) {
        console.log(userWinner)
        userScore++
    } else console.log("that didnt work")
}

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
    //     console.log(endOfGameTie);
    // } else if (userScore > computerScore){
    //     console.log(endOfGameWinner);
    // } else if (userScore < computerScore){
    //     console.log(endOfGameLoser);
    // }
}

game()

