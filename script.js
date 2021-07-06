function computerPlay() {
    //Defining options of a RPS game.
    const gameOptions = ['rock', 'paper', 'scissors'];
    //Adding the random value, row below returns an integer from 0 to 2 and selects
    //it in the array that has all the options. Adding the selection in the
    //computerPick var.
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;

function game() {
    for (let round = 0; round < 5; round ++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt(`What do you pick?`);
    function playRound(playerSelection, computerSelection) {
        //Make your function’s playerSelection parameter case-insensitive
        const playerSelectionFiltered = playerSelection.toLowerCase();
        //console.log(computerSelection);
        if (playerSelectionFiltered === 'rock' && computerSelection === 'scissors') {
            console.log(`You win! Rock beats scissors!`);
            playerScore++;
            return playerScore;
        } else if (playerSelectionFiltered === 'rock' && computerSelection === 'paper') {
            console.log('You lose! Paper beats rock!');
            computerScore++;
            return computerScore;
        } else if (playerSelectionFiltered === 'rock' && computerSelection === 'rock') {
            console.log(`Rock vs Rock! It's a tie!`);
            draw++;
            return draw;
        } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'paper') {
            console.log('You win! Scissors beats paper!');
            playerScore++;
            return playerScore;
        } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'rock') {
            console.log('You lose! Rock beats Scissors!');
            computerScore++;
            return computerScore;
        } else if (playerSelectionFiltered === 'scissors' && computerSelection === 'scissors') {
            console.log(`Scissors vs Scissors! It's a tie!`);
            draw++;
            return draw;
        } else if (playerSelectionFiltered === 'paper' && computerSelection === 'rock') {
            console.log('You win! Paper beats rock!');
            playerScore++
            return playerScore;
        } else if (playerSelectionFiltered === 'paper' && computerSelection === 'scissors') {
            console.log('You lose! Scissors beats paper!');
            computerScore++;
            return computerScore;
        } else if (playerSelectionFiltered === 'paper' && computerSelection === 'paper') {
            console.log(`Paper vs Paper! It's a tie!`);
            draw++;
            return draw;
        } else {
            console.log(`something is wrong.`);
            }
        }
    playRound(playerSelection, computerSelection);
    console.log(`the result is: Player Wins ${playerScore}, Computer Wins ${computerScore}, Draws ${draw}`);
}
    if (playerScore > computerScore) {
        console.log(`End of round 5: Victory!`);
    } else if (computerScore > playerScore) {
        console.log('End of round 5: The computer won.');
    } else 
    console.log('End of round 5: No winner - draw.');
}

game();