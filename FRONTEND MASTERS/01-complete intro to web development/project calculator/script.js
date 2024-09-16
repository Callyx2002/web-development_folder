"use strict";
let buffer = "0";
let runningTotal = 0;
let pervOp = null;

const screen = document.querySelector(".screen");

function buttonHandle(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleValue(value);
  }
  rerender();
}

function handleSymbol(symbol) {
  //   console.log(`${symbol} is a symbol`);
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "del":
      buffer.length === 1 ? (buffer = "0") : (buffer = buffer.slice(0, -1));
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      calculateMath(symbol);
      break;
    case "=":
      if (pervOp === null) return;
      flushOperation(parseInt(buffer));
      pervOp = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
  }
}

function calculateMath(value) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  pervOp = value;
  buffer = "0";
  //   console.log(runningTotal);
}

function flushOperation(value) {
  switch (pervOp) {
    case "+":
      runningTotal += value;
      break;
    case "/":
      runningTotal /= value;
      break;
    case "x":
      runningTotal *= value;
      break;
    case "-":
      runningTotal -= value;
      break;
  }
}
function handleValue(value) {
  //   console.log(`${value} is a value`);
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  //   console.log(buffer);
}

function rerender() {
  screen.innerText = buffer;
  //   buffer = "0";
}

document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (event) {
    buttonHandle(event.target.innerText);
  });
