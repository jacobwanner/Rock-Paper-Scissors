// const amountOfRounds = prompt("How many rounds for this game?");
let userSelection = "";
const computerWinner = "The computer wins this round.";
const userWinner = "You win this round.";
const tieRound = "It's a draw!";
// let userScore = 0;
// let computerScore = 0;
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
    let computerSelection = getNewComputerChoice();
    console.log(userSelection);
    console.log(computerSelection);
    if (userSelection === computerSelection) {
        console.log(tieRound)
    } else if ((userSelection === "rock" && computerSelection === "paper") ||
              (userSelection === "paper" && computerSelection === "scissors") ||
              (userSelection === "scissors" && computerSelection === "rock")) {
        console.log(computerWinner)
        // computerScore += 1;
    } else if ((userSelection === "rock" && computerSelection === "scissors") ||
              (userSelection === "paper" && computerSelection === "rock") ||
              (userSelection === "scissors" && computerSelection === "paper")) {
        console.log(userWinner)
        // userScore += 1;
    } else console.log("that didnt work")
}
