'use strict';

/*
//selecting the text content of an html element using DOM
console.log(document.querySelector('.message').textContent);
//setting the text content of an html element using DOM
document.querySelector('.message').textContent = 'Correct Number👌';
console.log(document.querySelector('.message').textContent);
document.querySelector('.label-score').textContent = 'New-Score: 
document.querySelector('.number').textContent = 23;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
//working with event listeners

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔ Correct Number';
    //styling the body
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high
  } else {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = '⚡ Too high')
        : (document.querySelector('.message').textContent = '👇 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
