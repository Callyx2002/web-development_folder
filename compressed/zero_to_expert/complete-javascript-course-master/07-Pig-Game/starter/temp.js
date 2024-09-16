'use strict';
/*
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
*/
//Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
//adding the dice element
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
//initialization function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${1 - activePlayer}`).textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScore = activePlayer = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
};

init();
//finction to switch colors

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//adding an event listener to the roll dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. display the dice and set the image to the generated random number
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${diceNumber}.png`);

    //.3 check for a rolled one.
    if (diceNumber !== 1) {
      //add dice to the current score
      currentScore += diceNumber;

      //inplementing the current score value
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if true, switch to next player.
      switchPlayer();
    }
  }
});

//adding an event listener to the hold button function
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to the active player's score
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //2. check if player's score >= 100
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
  //finish the game
});

btnNew.addEventListener('click', init);
