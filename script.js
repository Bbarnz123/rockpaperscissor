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

function getHumanChoice () {
    let input = prompt("What is your final decision?");
    let humanChoice = input.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log("valid input");
    }  else {
        console.log("invalid input")
        getHumanChoice();
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice ();
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

function playGame () {
    playRound (humanSelection, computerSelection);
    playRound (humanSelection, computerSelection);
    playRound (humanSelection, computerSelection);
    playRound (humanSelection, computerSelection);
    playRound (humanSelection, computerSelection);

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

playGame ();

