// script.js

let playerScore = 4;
let computerScore = 4;
const winningScore = 5; 

const choices = ['rock', 'paper', 'scissors'];

const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');
const wonGame = document.getElementById('wonGame');
const resetButton = document.getElementById('reset')
resetButton.style.visibility = "hidden";
resetButton.disabled = true;
resetButton.addEventListener('click', resetGame);

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        updateScores(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScores(result) {
    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    if (result === 'draw') {
        resultText.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (result === 'player') {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    if (playerScore === winningScore) {
        endGame('Player');
    } else if (computerScore === winningScore) {
        endGame('Computer');
    }
}

function endGame(winner) {
    wonGame.textContent = `${winner} wins the game!`;
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = true;
    });
    resetButton.style.visibility = "visible";
    resetButton.disabled = false;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    resultText.textContent = '';
    wonGame.textContent = '';
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = false; // Enable buttons
    });
    resetButton.style.visibility = "hidden";
    resetButton.disabled = true;
}