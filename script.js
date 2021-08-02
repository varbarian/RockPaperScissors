const buttons = document.querySelectorAll('button');
const resultBoard = document.querySelector('p');
const scoreBoard = document.querySelectorAll('p')[1];
const statusMsg = document.querySelectorAll('p')[2];

function computerPlay() {
    //Defining options of a RPS game.
    const gameOptions = ['rock', 'paper', 'scissors'];
    //Adding the random value, row below returns an integer from 0 to 2 and selects
    //it in the array that has all the options. Adding the selection in the
    //computerPick var.
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    //Make your function’s playerSelection parameter case-insensitive
    const playerSelectionFiltered = playerSelection.toLowerCase();
    //console.log(computerSelection);
    if (playerSelectionFiltered === 'rock' && computerSelection === 'scissors') {
        resultBoard.textContent = `You win! Rock beats scissors!`;
        playerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return playerScore;
    } else if (playerSelectionFiltered === 'rock' && computerSelection === 'paper') {
        resultBoard.textContent = 'You lose! Paper beats rock!';
        computerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return computerScore;
    } else if (playerSelectionFiltered === 'rock' && computerSelection === 'rock') {
        resultBoard.textContent = `Rock vs Rock! It's a tie!`;
        draw++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return draw;
    } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'paper') {
        resultBoard.textContent = 'You win! Scissors beats paper!';
        playerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return playerScore;
    } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'rock') {
        resultBoard.textContent = 'You lose! Rock beats Scissors!';
        computerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return computerScore;
    } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'scissors') {
        resultBoard.textContent = `Scissors vs Scissors! It's a tie!`;
        draw++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return draw;
    } else if (playerSelectionFiltered === 'paper' && computerSelection === 'rock') {
        resultBoard.textContent = 'You win! Paper beats rock!';
        playerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return playerScore;
    } else if (playerSelectionFiltered === 'paper' && computerSelection === 'scissors') {
        resultBoard.textContent = 'You lose! Scissors beats paper!';
        computerScore++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return computerScore;
    } else if (playerSelectionFiltered === 'paper' && computerSelection === 'paper') {
        resultBoard.textContent = `Paper vs Paper! It's a tie!`;
        draw++;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        return draw;
    } else {
        resultBoard.textContent = `something is wrong.`;
        scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore} Draw: ${draw}`;
        }
    };

let playerScore = 0;
let computerScore = 0;
let draw = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (playerScore == 5) {
            statusMsg.textContent = `player won! *mvp chants in the arena*`;
        } else if (computerScore == 5) {
            statusMsg.textContent = 'no chance. that computer is unbeatable!';
        } else {
            statusMsg.textContent = 'game in progress';
        }
    });
});