// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//coding challenge
const myArray = [17, 21, 23];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i + 1} days`);
  }
};
console.log(printForecast(myArray));
