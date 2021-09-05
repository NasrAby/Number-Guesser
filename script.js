let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
}

const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
}

const secretGuess = generateTarget();
const compareGuesses = (userGuess, computerGuess, secretGuess) => {
    if (getAbsoluteDistance(secretGuess, userGuess) < getAbsoluteDistance(secretGuess, computerGuess)) {
        return true;
    } else if (getAbsoluteDistance(secretGuess, userGuess) > getAbsoluteDistance(secretGuess, computerGuess)) {
        return false;
    } else {
        return true;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    currentRoundNumber = 1;
}


