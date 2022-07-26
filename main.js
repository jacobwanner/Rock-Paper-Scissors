function getComputerChoice() {
    let answer = Math.floor(Math.random()*3 +1);  
    if (answer === 1) {
         return "rock"
     } else if (answer === 2) {
         return "paper"
     } else if (answer === 3) {
         return "scissors"
     }
 }

 let userSelection = prompt("Write rock paper or scissors:");
 let computerSelection = getComputerChoice();
 let computerWinner = computerSelection + " beats " + userSelection + ". You Lose!";
 let userWinner = userSelection + " beats " + computerSelection + ". You win!";
 let tieRound = "Tie game. It's a draw!";
 function playRound(userSelection, computerSelection) {
     if (userSelection === computerSelection) {
         return tieRound
     } else if (userSelection === "rock" && computerSelection === "paper" ) {
         return computerWinner
     } else if (userSelection === "rock" && computerSelection === "scissors" ) {
         return userWinner
     } else if (userSelection === "paper" && computerSelection === "rock" ) {
         return userWinner
     } else if (userSelection === "paper" && computerSelection === "scissors" ) {
         return computerWinner
     } else if (userSelection === "scissors" && computerSelection === "rock" ) {
         return computerWinner
     } else if (userSelection === "scissors" && computerSelection === "paper" ) {
         return userWinner
     } else {
         return "Mission Failed. We'll get e'm next time."
     }
 }
 
//  let roundResult= playRound(userSelection, computerSelection);
 console.log("The computer chose " + computerSelection);
 console.log(playRound(userSelection, computerSelection)); 

// let amountOfRounds = prompt("How many rounds for this game?");

//  function game(playRound) {
//     for (let round=0; round<amountOfRounds; round++) {
//         if (roundResult === computerWinner) {
//             console.log("Computer won")
//         } else if (roundResult === userWinner) {
//             console.log("User won")
//         } else if (roundResult === tieRound) {
//             console.log("Draw")
//         } else console.log("Atleast the loop works")
//         userSelection
//         getComputerChoice();
//         round++
//     }
//  }
// game(playRound())

// "The computer wins this round. Total score: "  +"/"+ ;
// "You win this round. Total score: "  +"/"+ ;
//Let endOfGame =  "Game over!" + (who wins) +"!"+ " Final Score: "  +"/"+ ;
