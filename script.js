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
    let humanChoice = event.target.textContent;
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (event) {
    humanChoice = getHumanChoice (event);
    computerChoice = getComputerChoice ();

    if (humanScore === 5 || computerScore === 5) {
        displayWinner();
    }

    if (humanScore != 5 && computerScore != 5) {
        if (humanChoice === computerChoice) {
            result.textContent = "Draw! " + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
        }   
            else if (humanChoice === "rock" && computerChoice === "paper") {
                result.textContent = "You lose! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                computerScore += 1;
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                result.textContent = "You win! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                humanScore += 1;
            }
            else if (humanChoice === "paper" && computerChoice === "rock") {
                result.textContent = "You win! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                humanScore += 1;
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                result.textContent = "You lose! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                computerScore += 1;
            }
            else if (humanChoice === "scissors" && computerChoice === "rock") {
                result.textContent = "You lose! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                computerScore += 1;
            }
            else {
                result.textContent = "You win! The opponent played " + computerChoice + "\n Your Points: " + humanScore + "\n Computer Points: " + computerScore;
                humanScore += 1;
            }
        }
}

let humanSelection;
let computerSelection;

/* code that runs the whole game, not just individual rounds */

function displayWinner () {
    if (humanScore < computerScore) {
        result.textContent = "Game Over! You lose.";
    }
        else if (humanScore > computerScore) {
            result.textContent = "That's a W.";
        }
        else {
            result.textContent = "It looks like a draw.";
        }
}



const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const body = document.querySelector("body");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const result = document.createElement("div");
result.style.whiteSpace = "pre-line";
body.appendChild(result);

