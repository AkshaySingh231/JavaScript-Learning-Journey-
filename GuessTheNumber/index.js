const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById("submit");
const userInput = document.getElementById("guessField");
const guessSlot = document.getElementsByClassName("guesses");
const lastResult = document.getElementsByClassName("lastResult");
const lowOrHi = document.getElementsByClassName("lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    previousGuesses.push(guess);
    displayGuesses(guess);
    
    if (numOfGuesses === 11) {
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 Correct! The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess is too low");
  } else {
    displayMessage("Your guess is too high");
  }
  numOfGuesses++
  ;
}

function displayGuesses(guess) {
  userInput.value = "";
  guessSlot[0].innerHTML += `${guess}, `;

    lastResult[0].innerHTML = `Remaining guesses: ${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi[0].innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  document.getElementById("newGame").addEventListener("click", function () {
    window.location.reload();
  });
}

function endGame() {
  userInput.value = "";
  userInput.disabled = true;

  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}
