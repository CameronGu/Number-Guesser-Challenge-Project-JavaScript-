let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

//new code for making abs difference via a function
const getAbsoluteDistance = (number1, number2) => {
  const numberDifference = Math.abs(number1 - number2);
  return numberDifference
}

// updated compareGuesses via getAbsoluteDistance function
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = getAbsoluteDistance(humanGuess, secretTarget);
    const computerDifference = getAbsoluteDistance(computerGuess, secretTarget);
    if (humanGuess > 9) {
        alert ('out of range.  Please choose between 0 and 9');
    }

    if (humanDifference > computerDifference) {
        return false;
    };
    if (humanDifference <= computerDifference) {
        return true;
    };
};


//original compareGuesses function
/*
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = (Math.abs(humanGuess - secretTarget));
    const computerDifference = (Math.abs(computerGuess - secretTarget));
    if (humanDifference > computerDifference) {
        return false;
    }
    if (humanDifference <= computerDifference) {
        return true;
    }
}
*/

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    }
    if (winner === 'computer') {
        computerScore += 1;
    } 
}


const advanceRound = () => {
    currentRoundNumber += 1;
}