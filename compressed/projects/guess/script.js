'use strict';
/**
 * had to write the code for the html, css and javascript for the
 * guess number game to show my understanding onn their respective ideas,
 * took me some time but it was worth it.
 * I made a more beautiful UI
 * using my small knowledge of CSS
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//special function for "message" class

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//to show the number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.insert').value);
  //document.querySelector('.guess').textContent = secretNumber;
  //if no input
  if (!guess) {
    displayMessage('⛔ No Value Entered');

    //if guess is right
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Guess');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.guess').style.width = '30rem';
    //document.querySelector('.guess').textContent = secretNumber;

    //code to do implement highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //if guess is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆 Too High' : '👇 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//function to reset the game.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.insert').value = '';
  document.querySelector('body').style.background = '#000';
  document.querySelector('.guess').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const guess = Number(document.querySelector('.insert').value);
    //document.querySelector('.guess').textContent = secretNumber;
    //if no input
    if (!guess) {
      displayMessage('⛔ No Value Entered');

      //if guess is right
    } else if (guess === secretNumber) {
      displayMessage('✅ Correct Guess');
      document.querySelector('body').style.background = 'green';
      document.querySelector('.guess').style.width = '30rem';
      //document.querySelector('.guess').textContent = secretNumber;

      //code to do implement highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //if guess is wrong
    } else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '👆 Too High' : '👇 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('❌ Game Over');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
