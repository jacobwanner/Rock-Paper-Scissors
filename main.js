const amountOfRounds = prompt("How many rounds for this game?");
let userSelection = "";
let userScore = 0;
let computerScore = 0;

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
const rock= document.querySelector('#rock');
rock.addEventListener('click', () => {
    userSelection = rock.id;
    playRound();
});
const paper= document.querySelector('#paper');
paper.addEventListener('click', () => {
    userSelection = paper.id;
    playRound();
});
const scissors= document.querySelector('#scissors');
scissors.addEventListener('click', ()=> {
    userSelection = scissors.id;
    playRound();
});

function playRound() {
    const computerSelection = getNewComputerChoice();
    console.log(userSelection);
    console.log(computerSelection);
    if (userSelection === computerSelection) {
        console.log("It's a draw! You both chose " + userSelection + ". Current Score: " + userScore + "-" + computerScore);
    } else if ((userSelection === "rock" && computerSelection === "paper") ||
              (userSelection === "paper" && computerSelection === "scissors") ||
              (userSelection === "scissors" && computerSelection === "rock")) {
        computerScore += 1;
        console.log("The computer wins this round. " + computerSelection + " beats " + userSelection + ". Current Score: " + userScore + "-" + computerScore);
        if (computerScore == amountOfRounds) {
            console.log("Game over. You Lose!"+ " Final Score: " + userScore + "-"+ computerScore);
        }
    } else if ((userSelection === "rock" && computerSelection === "scissors") ||
              (userSelection === "paper" && computerSelection === "rock") ||
              (userSelection === "scissors" && computerSelection === "paper")) {
        userScore += 1;
        console.log("You win this round. " + userSelection + " beats " + computerSelection + ". Current Score: " + userScore + "-" + computerScore);
        if (userScore == amountOfRounds) {
            console.log("Game over. You Win!"+ " Final Score: " + userScore + "-" + computerScore);
        }
    } else console.log("that didnt work")
}
