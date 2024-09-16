'use strict';
/*
function logger() {
  console.log(`My name is Caleb`);
}

logger();
logger();
logger();

function fruitJuice(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `fruit juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}

const result = fruitJuice(4, 5);
console.log(result);
*/
/*
const myArr = [`fidelity`, `keystone`, `guarantee trust`];
console.log(myArr[myArr.length - 1]);

//there are actually countless array methods on arrays.
//add elements
const friends = [`Timothy`, `Bekee`, "Caleb"];
const newLength = friends.push(`Habila`);
console.log(friends);
console.log(newLength);
const finalLength = friends.unshift(`Levino`);
console.log(finalLength);

//remove elements
const popped = friends.pop();
console.log(friends);
console.log(popped);
const removedElement = friends.shift();
console.log(friends);
console.log(removedElement);

//checking the position of an element

console.log(friends.indexOf(`Timothy`));
console.log(friends.indexOf("Dylan")); //returns -1 if not in the array
console.log(friends.includes(`Timothy`)); //returns true or false.

if (friends.includes("Caleb")) {
  console.log("HAHA, yuou can't be friends with yourself");
} else {
  console.log(`Better!`);
}
*/
/*
function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//logging the tips to the console
console.log(`Below are the individual tips in an array`);
console.log(tips);

//loogging the total money to the console
console.log(`Below are the individual total money in an array`);
console.log(total);
*/
//creating objects in javascript
/*
console.log(caleb);
//dot notation is the first way of getting properties from an object.
console.log(caleb.firstname);
console.log(caleb.friends[1]);
//bracket notation is the other and harder way of getting properties from an object.
console.log(caleb["age"]);
console.log(typeof caleb);
//type of caleb.friends is showing objects??? i don't know why............
console.log(typeof caleb.friends);
console.log(typeof caleb.friends[3]);
*/
/*
const caleb = {
  firstname: `Caleb`,
  lastname: `Arodu`,
  birthYear: 2002,
  job: `Student`,
  friends: [`Timothy`, `Bekee`, `Rockus`, 12],
  hasDriversLicense: false,

  // calcaAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcaAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcaAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.summary = `My name is ${this.firstname} ${this.lastname}, I am a ${
      this.job
    } and I am ${this.calcaAge()} years old`;
    return this.summary;
  },
};
// caleb.middleName = "Oluwafemi";
// console.log(caleb.middleName);
console.log(caleb.calcaAge());
console.log(caleb.age);
console.log(caleb.age);
console.log(caleb.getSummary());
console.log(caleb.summary);
*/

//coding challenge
/*
const mark = {
  firstName: "Mark",
  lastName: "Asadel",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: " John",
  lastName: "Remis",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(
  mark.bmi > john.bmi
    ? `Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})`
    : `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})`
);
*/

//for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

//testing for loops
/*
for (let i = 0; i < 10; i++) {
  console.log(`this is the no ${i} time`);
}
*/
const myArr = [`fidelity`, `keystone`, `guarantee trust`, true, false];
//let newArr = [];
/*
const newArr = [];
for (let i = 0; i < myArr.length; i++) {
  // newArr += typeof myArr[i];
  // if (i !== myArr.length - 1) newArr += " ";
  //newArr[i] = typeof myArr[i];
  newArr.push(typeof myArr[i]);
}

console.log(newArr);*/
/*
//construct an array of ages from an array of birthyears
const birthYear = [1991, 2002, 2007, 1996, 2001];
const age = [];
const myFunct = (param) => 2024 - param;
for (let i = 0; i < birthYear.length; i++) {
  if (typeof birthYear[i] !== "number") continue;
  age.push(myFunct(birthYear[i]));
}
*/

//console.log(age);

//loopiing backwards in an array
/*
for (let i = birthYear.length - 1; i >= 0; i--) {
  console.log(
    `You were given birth to in ${birthYear[i]} and your age is ${age[i]}`
  );
}

//nesting of loops in javascript
for (let exercise = 1; exercise <= 5; exercise++) {
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Starting exercise ${exercise + "." + rep}`);
  }
}
*/
/*
//checking while looops
let counter = 1;
while (counter <= 12) {
  console.log(counter);
  counter++;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}*/

// coding challenge
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

const calcAverage = function (arr) {
  if (typeof arr !== 'object') return;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  //console.log(typeof average);
  return average / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

//calling the calcAverage function
console.log(calcAverage(bills));

//
*/
