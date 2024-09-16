'use strict';

//capturing all the DOM element
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//function to switch players
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = 1 - activePlayer;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//adding event listener to the roll button
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating the random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //displaying the respective image
    diceEl.setAttribute('src', `dice-${diceNumber}.png`);
    diceEl.classList.remove('hidden');

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//adding event listener to the hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to total score
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //if equal to 100
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
