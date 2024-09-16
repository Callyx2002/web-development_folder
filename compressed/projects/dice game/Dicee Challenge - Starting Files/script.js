"use strict";
// document.querySelector("div").classList.add
var randomNumber1 = Math.trunc(Math.random() * 6 + 1);

var randomNumber2 = Math.trunc(Math.random() * 6 + 1);

//setting the images to corellate to the values of the respective random numbers
document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice` + randomNumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice` + randomNumber2 + ".png");

//creating a function to set the value of the h1 respectively
const setH1 = function (message) {
  document.querySelector("h1").textContent = message;
};
if (randomNumber1 > randomNumber2) {
  setH1("🚩 Player 1 wins");
} else if (randomNumber1 < randomNumber2) {
  setH1("Player 2 wins 🚩");
} else {
  setH1("Draw, No player won!");
}
