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
        console.log("It's a draw! You both chose " + userSelection + ".");
    } else if ((userSelection === "rock" && computerSelection === "paper") ||
              (userSelection === "paper" && computerSelection === "scissors") ||
              (userSelection === "scissors" && computerSelection === "rock")) {
        console.log("The computer wins this round. " + computerSelection + " beats " + userSelection + ".");
        computerScore += 1;
        if (computerScore == amountOfRounds) {
            console.log("Game over. You Lose!"+ " Final Score: " + userScore + "-"+ computerScore);
        }
    } else if ((userSelection === "rock" && computerSelection === "scissors") ||
              (userSelection === "paper" && computerSelection === "rock") ||
              (userSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win this round. " + userSelection + " beats " + computerSelection + ".");
        userScore += 1;
        if (userScore == amountOfRounds) {
            console.log("Game over. You Win!"+ " Final Score: " + userScore + "-"+ computerScore);
        }
    } else console.log("that didnt work")
}
