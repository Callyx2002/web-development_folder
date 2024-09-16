"use strict";
const newGame = document.querySelector(".newgame");
const emoji = document.querySelector(".guess");
const guess = document.querySelector(".myInput");
const comment = document.querySelector(".commend");
// const current = document.querySelector(".current");
// const highScore = document.querySelector(".highscore");

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  comment.textContent = message;
};
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const value = Number(guess.value);
    // console.log(value);
    if (!value) {
      comment.textContent = "No Input Entered❌";

      //for correct guess
    } else if (value === secretNumber) {
      emoji.textContent = "✅";
      comment.textContent = "Guess Correct";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;

        //for incorrect guess
      }
    } else {
      if (score > 1) {
        displayMessage(value > secretNumber ? "👆 Too High" : "👇 Too Low");
        score--;
        document.querySelector(".current").textContent = score;
      } else {
        //game over functionality
        displayMessage("❌ Game Over");
        document.querySelector(".current").textContent = 0;
      }
    }
  }
});

//to add the new game functionality
newGame.addEventListener("click", function () {
  emoji.textContent = "?";
  guess.value = "";
  document.querySelector(".current").textContent = 0;
  displayMessage("Start Guessing");
});
