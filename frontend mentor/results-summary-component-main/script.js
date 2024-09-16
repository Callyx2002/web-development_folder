"use strict";
let value = document.querySelectorAll(".value");
let total = document.querySelector(".total");
let newTotal = 0;
const btn = document.querySelector(".btn");
let remarks = document.querySelector(".say");
let title = document.querySelector(".title");

// total.textContent = newTotal;
btn.addEventListener("click", function () {
  for (let i = 0; i < value.length; i++) {
    //   console.log(value[i].textContent);
    //   value[i].value
    newTotal += Number(value[i].value);
    console.log(newTotal);
  }
  total.textContent = newTotal / value.length;
  newTotal = 0;
  if (Number(total.textContent) >= 0 && Number(total.textContent) <= 100) {
    if (Number(total.textContent) > 39 && Number(total.textContent) <= 50) {
      remarks.textContent = "You can do better next time";
      title.textContent = "Nice Try";
    } else if (
      Number(total.textContent) > 50 &&
      Number(total.textContent) <= 69
    ) {
      remarks.textContent = "You're a star, shine on";
      title.textContent = "Awesome⚡";
    } else if (
      Number(total.textContent) > 69 &&
      Number(total.textContent) <= 100
    ) {
      remarks.textContent = "You're simply the best";
      title.textContent = "Mafnificient🌟⭐";
    } else {
      remarks.textContent = "You can do better";
      title.textContent = "Try Again";
    }
  }

  //initializing all the values to null
  for (let i = 0; i < value.length; i++) {
    value[i].value = "";
  }
});
