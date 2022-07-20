
function getComputerChoice() {
   let answer = Math.floor(Math.random()*3 +1);  
   if (answer === 1) {
        return "Rock"
    } else if (answer === 2) {
        return "Paper"
    } else if (answer === 3) {
        return "Scissors"
    } else {
        return "Error BEEP BOP"
    } ;
}

console.log(getComputerChoice());





// let userChoice = prompt("Write Rock Paper or Scissors:");

// function playRound(userChoice, getComputerChoice) {
//     if ()
// }