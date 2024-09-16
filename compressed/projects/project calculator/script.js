"use strict";
let buffer = "";
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector(".screen");
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
    // console.log(value);
  }
}

function handleNumber(value) {
  if (screen.innerText === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  rerender();
  //   console.log(buffer);
  //   console.log(screen);
}

function runMath(intBuffer) {
  console.log(previousOperator);
}
function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "del":
      if (buffer.length === 1) {
        buffer = "0";
      }
      buffer = buffer.slice(0, -1);
      // rerender();
      break;
    case "+":
    case "/":
    case "-":
    case "x":
      if (screen.innerText === "0") {
        return;
      }
      const intBuffer = parseInt(buffer);
      runningTotal = intBuffer;
      previousOperator = symbol;
      // rerender();
      // buffer = "0";
      console.log(runningTotal);
      runMath(runningTotal);
      //   console.log(`${typeof runningTotal} ${runningTotal}`);
      break;
  }
}
function runMath(intBuffer) {}
function rerender() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
