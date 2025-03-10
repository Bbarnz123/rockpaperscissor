function getComputerChoice () {
    let numChoice = Math.random();
    let computerChoice;

    while (numChoice === 0) {
        numChoice = Math.floor(numChoice * 3);
    }

    numChoice = Math.floor(numChoice * 3);

    if (numChoice === 0) {
        computerChoice = "rock";
    }  else if (numChoice === 1) {
        computerChoice = "paper";
    }  else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice (event) {
    const humanChoice = event.target;
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (event) {
    humanChoice = getHumanChoice (event);
    computerChoice = getComputerChoice ();

    if (humanChoice === computerChoice) {
        console.log("Draw!");
    }   
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! The opponent played " + computerChoice);
            computerScore += 1;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! The opponent played " + computerChoice);
            humanScore += 1;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! The opponent played " + computerChoice);
            humanScore += 1;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! The opponent played " + computerChoice);
            computerScore += 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! The opponent played " + computerChoice);
            computerScore += 1;
        }
        else {
            console.log("You win! The opponent played " + computerChoice);
            humanScore += 1;
        }

}

let humanSelection;
let computerSelection;

/* code that runs the whole game, not just individual rounds */

function playGame () {

    if (humanScore < computerScore) {
        console.log("Game Over! You lose.");
    }
        else if (humanScore > computerScore) {
            console.log("That's a W.")
        }
        else {
            console.log("It looks like a draw.")
        }
}



const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
