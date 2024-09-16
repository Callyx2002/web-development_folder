'use strict';

///////////////////////////////////////////////////////////////////////////
//WORKING WITH DEFAULT PARAMETERS

/*
const flightPlane = [];

const createBooking = function (
  flightNum = 'CA123',
  numPassegers = 1,
  price = 12334
) {
  const booking = {
    flightNum,
    numPassegers,
    price,
  };
  console.log(booking);
  flightPlane.push(booking);
};

createBooking(123, 23, 22333);
createBooking();
*/

/////////////////////////////////////////////////////////////////////////
//PASSING OBJECTS AND PRIMITIVES TO A FUNCTION

/*
const flight = 'CA1213';
const caleb = {
  name: 'Caleb Arodu',
  number: 34567893456789,
};

const bookings = function (flightNum, passenger) {
  flightNum = 'DD123';
  passenger.name = 'Mr ' + passenger.name;
  alert(passenger.number === 34567893456789 ? `Checked In` : `Wrong passport`);
};

// bookings(flight, caleb);
// console.log(flight);
// console.log(caleb);

const changeNum = function (passenger) {
  passenger.number = Math.trunc(Math.random() * 1000000000000000);
};

changeNum(caleb);
bookings(flight, caleb);

*/

/////////////////////////////////////////////////////////////////////////////
//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
/*
const firstOne = function (myString) {
  return myString.replace(/ /g, '+');
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, funct) {
  console.log(`The Original string is>>> ${str}`);
  console.log(`The transformed string is>>>>>> ${funct(str)}`);
};

transformer('JavaScript it the best language', upperFirstWord);

const student = {
  name: 'Caleb',
  age: 34,
};

const hasName = function (obj) {
  return obj.name ? `${'Mr/Mrs ' + obj.name}` : 'Has no Name';
};

const hasAge = function (obj) {
  return obj.age ? `${'You are ' + obj.age + ' years old'}` : 'Has no Age';
};

const checker = function (one, two, obj) {
  console.log(one(obj));
  console.log(two(obj));
};

checker(hasName, hasAge, student);
////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS RETURNING OTHER FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Caleb');
greetHey('Arodu');
//or
greet('Hello')('Caleb Arodu');

//TO REWRITE THE FUNCTION USING ARROW FUNCTION

const arrow = greeting => name => console.log(`${greeting} ${name}`);
arrow('senior man')('Arodu');
*/

///////////////////////////////////////////////////////////////////////////////
//THE CALL AND BIND FUNCTION
/*
const airpeace = {
  airline: 'Airpeace',
  iactaCode: 'AP',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight with ${this.airline} with the flight number ${this.iactaCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iactaCode}${flightNum}`, name });
  },
};

const book = airpeace.book;
// airpeace.book(123, 'Arodu Caleb Oluwafemi');
// airpeace.book(243, 'Favour Nkem');
// console.log(airpeace);

const dallas = {
  airline: 'Dallas',
  iactaCode: 'DS',
  bookings: [],
};

/////////////////
//THE CALL METHOD
book.call(dallas, 234, 'Arodu Caleb Oluwafemi');
console.log(dallas);

////////////////
//THE APPLY FUNCTION
book.apply(dallas, [12, 'Mary Arodu']);

//we can also use the call function on arrays
book.call(dallas, ...[123, 'Caleb Arodu']);

//////////////
//THE BIND FUNCTION
const bookDal = book.bind(dallas, 34, 'Calab Arodu');
bookDal();
console.log(dallas);

//using the bind function with event listeners
dallas.planes = 200;
dallas.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', dallas.buyPlane.bind(dallas));

//partial application
const tax = (rate, value) => value + value * rate;
console.log(tax(0.17, 300));

const nigTax = tax.bind(null, 0.15);
console.log(nigTax(400));

//LITTLE CHALLENGE ON HOW TO USE A FUNCTION RETURNING ANOTHER FUNCTION
const retFunct = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(retFunct(0.18)(1200));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHALLENE 1
/** 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �
*/
// const options = ['0: JavaScript', '1: Python', '2: Rust', '3: C++'];
// console.log(typeof options);
// console.log(options.join('\n'));

//THIS IS MY ANSWER FOR THE CHALLENGE 1 OF THIS SECTION
/*
console.log(new Array(4).fill(0).join(', '));
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  //the register new answer method
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // console.log(this.options);
    const answer = prompt(
      `${this.question}\n${this.options.join('\n')}\n('Write option number')`
    );
    if (Number(answer) >= 0 && Number(answer) < 4) {
      this.answers[answer]++;
    }
    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },

  //the display result method
  displayResults(type = 'array') {
    console.log(
      type === 'string'
        ? `Poll results are ${this.answers.join(', ')}`
        : `${this.answers}`
    );
    // if (type === 'string') {
    //   console.log(`Poll results are ${this.answers.join(', ')}`);
    // } else {
    //   console.log(this.answers);
    // }
    // This generates [0, 0, 0, 0]. More in the next section!
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//the bonus part
const display = poll.displayResults;
display.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function () {
  console.log('This function will only run once');
})();
//using arrow functions
(() => console.log('This can never run again, this i know'))();
const meSelf = {
  me: 'Caleb Arodu',
  age: 2,
};

//////////////////////////////////////////////////////////////////////////////
//CLOSURES
function newMe() {
  var me = 'Caleb';
  console.log('Function successful');
}
newMe();
// console.log(me);
