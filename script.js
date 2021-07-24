// Global variables
// Initialize player, computer and games played to zero
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
gameButtons = document.querySelectorAll(".game_selection");


// Event listerner for click

document.addEventListener("click", gameSelectionListener);
function gameSelectionListener(event) {
    let element = event.target;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    // ROCK SELECTION
    if (element.classList.contains("game_selection") && element.id === ("rock_div")) {
        playRound(rock);
        console.log("submitted rock");
    }  else if (element.classList.contains("game_selection_img") && element.id === ("rock_img")) {
        playRound(rock);
        console.log("submitted rock");
    } else if (element.classList.contains("game_selection") && element.id === ("paper_div")) {
        playRound(paper);
        console.log("submitted paper");
    }  else if (element.classList.contains("game_selection_img") && element.id === ("paper_img")) {
        playRound(paper);
        console.log("submitted paper");
    } else if (element.classList.contains("game_selection") && element.id === ("scissors_div")) {
        playRound(scissors);
        console.log("submitted scissors");
    }  else if (element.classList.contains("game_selection_img") && element.id === ("scissors_img")) {
        playRound(scissors);
        console.log("submitted scissors");
    }
}

// Function to randomly generate computer game entries and assosciate them with a sign

function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3)
    if (randomGameValue == "0") {
        return "rock";
    }
    if (randomGameValue == "1") {
        return "paper";
    } else {
        return "scissors";
    }
}

// Main game functions

function playRound(playerSelection) {
    console.log(playerSelection);
    // Generate computer selection
    const computerSelection = computerPlay();
    // Set variable for the player's div
    const rockSelected = document.getElementById("rock_div");
    const paperSelected = document.getElementById("paper_div");
    const scissorsSelected = document.getElementById("scissors_div");
    // Set variable for the computer's div
    const computerRockSelected = document.getElementById("computer_rock_div");
    const computerPaperSelected = document.getElementById("computer_paper_div");
    const computerScissorsSelected = document.getElementById("computer_scissors_div");
    // Show the computer selection
    if (computerSelection == "rock") {
        computerRockSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "#505050";
        computerScissorsSelected.style.backgroundColor = "#505050";
    } else if (computerSelection == "paper") {
        computerRockSelected.style.backgroundColor = "#505050";
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "#505050";
    } else if (computerSelection == "scissors") {
        computerRockSelected.style.backgroundColor = "#505050";
        computerPaperSelected.style.backgroundColor = "#505050";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    // convert Player entry
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // Show the player selection by coloring div and comparison to computer selection
    if (playerSelectionLowercase === "rock") {
        rockSelected.style.backgroundColor = "white";
        paperSelected.style.backgroundColor = "#505050";
        scissorsSelected.style.backgroundColor = "#505050";
        if (computerSelection === "rock") {
            console.log("computer chose rock!");
            console.log("Draw!");
            const currentResultRound = document.getElementById("result_round").innerHTML = `It's a draw !`;
            game(playerScore, computerScore);
            return "draw";
        } else if (computerSelection === "paper") {
            computerScore++;
            console.log("computer chose paper!");
            console.log("You lose!");
            const currentResultRound = document.getElementById("result_round").innerHTML = `You lose !`;
            const currentComputerScore = document.getElementById("computer_score").innerHTML = `${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        } else {
            playerScore++;
            console.log("computer chose scissors!");
            console.log("You win!");
            const currentPlayerScore = document.getElementById("player_score").innerHTML = `${playerScore}`;
            const currentResultRound = document.getElementById("result_round").innerHTML = `You win !`;
            game(playerScore, computerScore);
            return "win";
        }
    }   else if (playerSelectionLowercase === "paper") {
        rockSelected.style.backgroundColor = "#505050";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "#505050";
        if (computerSelection === "rock") {
            playerScore++;
            console.log("computer chose rock!");
            console.log("You win!");
            const currentPlayerScore = document.getElementById("player_score").innerHTML = `${playerScore}`;
            const currentResultRound = document.getElementById("result_round").innerHTML = `You win !`;
            game(playerScore, computerScore);
            return "win";
        } else if (computerSelection === "paper") {
            console.log("computer chose paper!");
            console.log("Draw !");
            const currentResultRound = document.getElementById("result_round").innerHTML = `It's a draw !`;
            game(playerScore, computerScore);
            return "draw";
        } else {
            computerScore++;
            console.log("computer chose scissors!");
            console.log("You lose");
            const currentResultRound = document.getElementById("result_round").innerHTML = `You lose !`;
            const currentComputerScore = document.getElementById("computer_score").innerHTML = `${computerScore}`;
            game(playerScore, computerScore);
            return "lose"
        } 
    }   else if (playerSelectionLowercase === "scissors") {
        rockSelected.style.backgroundColor = "#505050";
        paperSelected.style.backgroundColor = "#505050";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection === "rock") {
            computerScore++;
            console.log("computer chose rock!");
            console.log("You lose!");
            const currentResultRound = document.getElementById("result_round").innerHTML = `You lose !`;
            const currentComputerScore = document.getElementById("computer_score").innerHTML = `${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        } else if (computerSelection === "paper") {
            playerScore++;
            console.log("computer chose paper!");
            console.log("You win !");
            const currentPlayerScore = document.getElementById("player_score").innerHTML = `${playerScore}`;
            const currentResultRound = document.getElementById("result_round").innerHTML = `You win !`;
            game(playerScore, computerScore);
            return "win";
        } else {
            console.log("computer chose scissors");
            console.log("Draw!")
            const currentResultRound = document.getElementById("result_round").innerHTML = `It's a draw !`;
            game(playerScore, computerScore);
            return "draw"
        }
    }   else {
        console.log("Invalid entry, try again");
        return null;
    }
}

// Score tracker

function game(playerScore, computerScore) {
    const playAgainSection = document.getElementById("result_container");
    const winnerText = document.getElementById("game_result")
    if (playerScore == 5 || computerScore == 5) {
        document.removeEventListener("click", gameSelectionListener);
        playAgainSection.style.display = "flex";
        if (playerScore > computerScore) {
            winnerText.innerHTML = "You win the match !"
        } else {
            winnerText.innerHTML = "You lose the match !"
        }
    } 
}
