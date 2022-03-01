const coinFlipper = document.getElementById("coin-flipper");
const tailsBox = document.getElementById("tails-box");
const headsBox = document.getElementById("heads-box");

const totalGuessesContainer = document.getElementById("total-guesses");
const correctGuessesContainer = document.getElementById("correct-guesses");
const chosenSideContainer = document.getElementById("chosen-side");

const possibleOptions = ['heads', 'tails'];
let currentGuess;

let totalGuesses = 0;
let correctGuesses = 0;
let coinFlipping = false;

function renderGuessNumbers() {
  totalGuessesContainer.innerText = totalGuesses;
  correctGuessesContainer.innerText = correctGuesses;
}

function revealCoin() {
  const chosenSide = possibleOptions[Math.floor(Math.random() * possibleOptions.length)];
  
  coinFlipping = false;

  chosenSideContainer.innerText = chosenSide.toUpperCase();

  if (chosenSide === currentGuess) {
    correctGuesses += 1;
  }

  totalGuesses += 1;

  renderGuessNumbers();
}

renderGuessNumbers();

coinFlipper.addEventListener('click', () => {
  if (coinFlipping) return;
  
  if (tailsBox.checked) {
    currentGuess = 'tails';
  } else if (headsBox.checked) {
    currentGuess = 'heads';
  }
  
  chosenSideContainer.innerText = "The coin is flipping through the air..."
  
  coinFlipping = true;

  setTimeout(revealCoin, 1500)
});