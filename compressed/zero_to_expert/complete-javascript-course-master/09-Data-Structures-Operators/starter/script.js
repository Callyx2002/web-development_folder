'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//working with the flights array
// console.log(flights.split('+'));
// //const flightArray = flights.split('+');
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const outputString = `${type.startsWith('_Delayed') ? '🛑 ' : ''}${type
    .replace(/_/g, ' ')
    .trimStart()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(outputString);
}

const newObject = { firstName: 'Caleb', lastName: 'Arodu' };
const weekdays = ['mon', 'tue', , 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [weekdays[0]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  newObject,
  //using a method for destructuring an array
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 0, mainIndex, time = '20:00', address }) {
    return `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
  orderPizza(main, ...others) {
    return `You odered pizza with ${main} and ${others}`;
  },
};
/*
console.log(
  setaurant.orderDelivery({
    time: '22:30',
    address: 'federal housing estate kaduna',
    mainIndex: 2,
    starterIndex: 2,
  })
);

console.log(
  setaurant.orderDelivery({
    address: 'federal housing estate kaduna',
    mainIndex: 2,
  })
);
*/
/*
////////////////////////////////////////////
//DESTRUCTING ARRAYS
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

const [first, , second] = setaurant.categories;
console.log(first, second);

// const [start, main] = setaurant.order(0, 2);
// console.log(start, main);

const nested = [2, 4, [3, 5]];
const [next, , old] = nested;
console.log(next, old);
*/
//DESTRUCTURING OBJECTS

// const { name, mainMenu, categories } = setaurant;
// console.log(name, mainMenu, categories);

//if we need new variable names, we insert colons
/*
const {
  name: newName,
  mainMenu: newMenu,
  categories: newCategories,
} = setaurant;
// console.log(setaurant.mainMenu);

// console.log(newName, newMenu, newCategories);
//DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = setaurant;
// console.log(menu, starters);
//MUTATING VAIABLES GOTTEN FROM OBJECTS

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const { open: o, close: c } = setaurant.openingHours.fri;
console.log(o, c);
*/

/*
//SPREAD OPERATOR
const arr = [1, 3, 5, 6];
const newArr = [...arr];
console.log(newArr);

//SPREAD OPERATOR USED TO COPY ARRAYS
const copyArray = [...setaurant.mainMenu];
console.log(copyArray);

//SPREAD OPERATOR USED TO JOIN 2 ARRAYS
const joinedArray = [...setaurant.mainMenu, ...setaurant.starterMenu];
console.log(joinedArray);

const myString = 'myself';
console.log(...myString);
const letters = [...myString];
console.log(letters);

//testing the assign method
const newsetaurant = Object.assign({}, setaurant);
setaurant.name = "Caleb's Delight";
console.log(setaurant);
console.log(newsetaurant);

//
const secondsetaurant = { ...newsetaurant };
secondsetaurant.name = 'Saviola';
console.log(secondsetaurant);*/
/*
//THE set OPERATOR
const myArray = [1, 3, ...[2, 4, 5]];
const [a, b, ...newArray] = myArray;
console.log(newArray);

const [...total] = [...setaurant.mainMenu, ...setaurant.starterMenu];
console.log(total);
//the set  element must be the last in the destructuring element otherwise, how will js know when it should stop

const { thu, ...others } = setaurant.openingHours;
console.log(thu, others);

const add = function (...input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    // if (typeof input[i] === Number) {
    console.log(input[i]);
    total += input[i];
    // }
  }
  return total;
};

console.log(add(2, 3, 4, 6, 'testing to see'));
console.log(add(...newArray));
setaurant.orderPizza('onions', 'meat', 'chese');
*/

//SHORTCIRCUITING USING LOGICAL OPERATORS
/*
console.log(true || 1);
console.log(1 || true);

setaurant.numGuests = 23;
const guests1 = setaurant.numGuests ? setaurant.numGuests : 10;
console.log(guests1);

const guests2 = setaurant.numGuests || 10;
console.log(guests2);

// console.log((true && false) || true);

//FHT NULLISH COALESCING OPERATOR
*/

// setaurant.numGuests = setaurant.numGuests && 10;
// const set = {
//   name: 'Giovanni',
//   ownwer: 'Caleb',
// };

// set.numGuests &&= 10;
// console.log(set);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * 1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1
/*
//1
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//2
const [neuer, ...fieldPlayers] = game.players[0];

//3
const allPlayers = [...game.players[0], ...game.players[1]];

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5
const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);

//6
const printGoals = function (...number) {
  let flag;
  for (let i = 0; i < number.length; i++) {
    flag = 0;
    for (let j = 0; j < Number(game.score[0]) + Number(game.score[2]); j++) {
      if (number[i] === game.scored[j]) {
        console.log(`${number[i]} scored a goal`);
        flag = 1;
        break;
      }
    }
    if (flag === 1) continue;
    console.log(number[i]);
  }
};
// console.log(game.score[0]);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// game.odds.team2 = 1;
game.odds.team1 < game.odds.team2 &&
  console.log('team 1 is likely to win team 2');
game.odds.team2 < game.odds.team1 &&
  console.log('team 2 is likely to win team 1');
*/
/*
//  THE FOR OF LOOP
const menu = [...setaurant.mainMenu, ...setaurant.starterMenu];

for (const item of menu) {
  console.log(`the no ${menu.indexOf(item) + 1} item of the menu is ${item}`);
}

console.log(false ?? 1);
console.log(false || 1);

for (const [i, el] of menu.entries()) {
  console.log(`the no ${i} item of the menu is ${el}`);
}
*/

// setaurant.orderPizza && setaurant.orderPizza('mayonnaise', 'onions', 'eggs');

/*console.log(setaurant.newObject);
console.log(setaurant);*/

// setaurant.openingHours.mon && console.log(setaurant.openingHours.mon.open);
// setaurant.openingHours.tue && console.log(setaurant.openingHours.tue.open);

// console.log(setaurant.closed?.tue?.open);
/*
const days = ['mon', 'tue', , 'wed', 'thu', 'fri', 'sat', 'sun'];

// console.log([[days[1]]]);
for (const i of days) {
  // console.log(i);
  const open = setaurant.openingHours[i]?.open ?? 8;
  console.log(`On ${i}, we open at ${open}`);
  // console.log(setaurant.openingHours?.[el]?.close);
}
// */

// console.log(
//   setaurant.orderPizza?.('meat', 'spinach') ?? "method doesn't exist"
// );
/*
  const me = {
    firstName: 'Caleb',
    lastName: 'Arodu',
    bio() {
      return `This is the bio of ${this.firstName}`;
    },
    introduceSelf() {
      return `I am ${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(me);
  
  console.log(me.introduceSelf());
  */

//looping through objects
/*
const properties = Object.keys(setaurant.openingHours);
let openStr = `we are open for ${properties.length} days: `;
let i = 0;
for (const item of Object.keys(setaurant.openingHours)) {
  if (i + 1 === properties.length) openStr += `and ${item}`;
  else openStr += `${item}, `;
  i++;
}

for (const [key, { open, close }] of Object.entries(setaurant.openingHours)) {
  console.log(`on ${key} we  open at ${open} and close at ${close}`);
}

// console.log(openStr);

// for (const item of Object.values(setaurant.openingHours)) {
//   console.log(item);
// }

// for (const [i, element] of Object.entries(setaurant.openingHours.mon)) {
//   console.log(i, element);
// }
*/

///CODING CHALLENGE 2
/**
 * Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �

 odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
 */
/*
//1
let i = 1;
for (const item of game.scored) {
  console.log(`Goal ${i}: ${item}`);
  i++;
}

//2
let total, average;
total = average = 0;
const key = Object.keys(game.odds);
const gameLength = key.length;

for (const item of Object.values(game.odds)) {
  total += item;
}
average = total / gameLength;
console.log(`the average of the odds is ${average}`);

//3
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(typeof key);
  const teamStr = key === 'x' ? 'Draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr} ${value}`);
}

//4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/
/*
//SETS
const orderArray = ['me', 1, 2, 3, 4, 'me', 'manager', 2, 3, 4, 5];
console.log(orderArray);
console.log(orderArray.includes('me'));

const orderSet = new Set(['me', 1, 2, 3, 4, 1, 2, 4, 5]);
orderSet && orderSet.add('Garlic Bread');
// orderSet.delete('newMe');
// orderSet.clear();

// console.log(new Set('joonasss'));
// console.log(orderSet.has('Bread'));

console.log(orderSet);
//USE CASE OF A SET IN A CODE BASE
const uniqueOrderSet = [...new Set(orderArray)];
console.log(uniqueOrderSet);

//
console.log('string'.length);
*/

//MAPS
/*
const newMap = new Map();
newMap
  .set(1, 3)
  .set('firstName', 'Caleb')
  .set('lastName', 'Arodu')
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('open', 11)
  .set('closed', 23);

const time = 1;
console.log(
  newMap.get(time > newMap.get('open') && time < newMap.get('closed'))
);

console.log(newMap);

//ANOTHER WAY OF POPULATING MAPS
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct option✅'],
  [false, 'Wrong option❌'],
]);
console.log(question);
console.log([...question]);

//converting objects to maps
const hours = new Map(Object.entries(restaurant.openingHours));
console.log(hours);

// let i = 1;
for (const [key, value] of question) {
  typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
  // i++;
}
*/
/*
const answer = Number(
  prompt('What is the best programming language in the world?')
);
*/

// console.log(question.get('correct') === answer);
// console.log(question.get(question.get('correct') === answer));

///CODING CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
/*
/**
 * 1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �


//1
const events = [...new Set([...gameEvents.values()])];
// console.log(setEvents);
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents.size);
// console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
/*
const time = [...gameEvents.keys()].pop();
console.log(time);


//4
for (const [key, value] of gameEvents) {
  const openStr = key < 45 ? `[FIRST HALF ${key}]` : `[SECOND HALF ${key}]`;
  console.log(`${openStr}: ${value}`);
}
*/

//WORKING WITH STRINGS
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.length);
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('z'));
console.log(airline[0]);
const country = airline.slice(4, 9);
console.log(airline);
console.log(country);
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
const me = 'calebarodu';
console.log(me.slice(1, -1));

const checkMiddle = function (seat) {
  console.log(
    seat.slice(-1) === 'E' || seat.slice(-1) === 'B'
      ? 'Seat is in the middle of the row'
      : 'Seat is not in the middle of the row'
  );
};
checkMiddle('11B');
checkMiddle('12E');
checkMiddle('1A');
checkMiddle('23U');
*/
/*
//FIX CAPITALIZATION
const passenger = 'cAleB';
const correctPassenger = passenger.toLowerCase();
console.log(`${correctPassenger[0].toUpperCase()}${correctPassenger.slice(1)}`);

//EMAIL VALIDATION
const email = 'hello@gmail.io';
const userEmail = '   Hello@gmail.iO';
const trimmedEmail = userEmail.toLowerCase().trim();
console.log(trimmedEmail);
const checkEmail = function (real, unset) {
  return unset === real;
};
console.log(checkEmail(email, trimmedEmail));

//REPLACE FUNCTION

const priceGB = '233,45#';
const priceUS = priceGB.replace(',', '.').replace('#', '$');
console.log(priceUS);

const myName =
  "My Caleb name is Caleb Arodu and i am the best Caleb of all Caleb's";
console.log(myName.replaceAll('Caleb', 'Victor Adekunle'));

//a substitute for the replaceAll function
console.log(myName.replace(/Caleb/g, 'Victor Adekunle'));

//BOOLEANS
const airplane = 'I am the airplane 001A';
console.log(airplane.includes('airplane'));
console.log(airplane.startsWith('I am'));
console.log(airplane.endsWith('1A'));

//practice exercise
const checkBaggage = function (items) {
  const test = items.toLowerCase();
  if (test.includes('knife') || test.includes('gun')) {
    console.log('You are not allowed to board the plane');
  } else {
    console.log('You can now board the plane');
  }
};

checkBaggage('I am with a Knife, a Gun and chocolate');
checkBaggage('I am with my bible and handout');

//WORKING WITH STRINGS PART 3
const myString = 'i+am+a+very+good+boy=caleb+arodu=the man of the season';
console.log(myString.split('+'));
//we can add destructuring
const [firstName, lastName] = 'Caleb Arodu'.split(' ');
console.log(firstName);
console.log(lastName);

//the joint method
const name = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(name);

//function to capitalize the first word of each string

const capitalizeString = function (name) {
  const newName = name.toLowerCase().split(' ');
  const capitalizeArray = [];

  for (const n of newName) {
    // capitalizeArray.push(n[0].toUpperCase() + n.slice(1));
    capitalizeArray.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return capitalizeArray.join(' ');
};
console.log(capitalizeString('CALEB ARODU IS THE BEST IN THE WORLD OF TECH'));

//credit card application
const maskedCard = function (number) {
  const last = number + '';
  return last.slice(-4).padStart(last.length, '*');
};

console.log(maskedCard(1234645));
console.log(maskedCard(1234645124335));

//CODING CHALLENGE 4

/**
 * Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
 */
/*
//SOLUTION TO THE CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const all = document.querySelector('textarea').value;
  const text = all.split('\n');
  // console.log(text);

  // console.log(text.entries());

  for (const [i, el] of text.entries()) {
    const [first, second] = el.toLowerCase().trim().split('_');
    // console.log(first);
    // console.log(second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(24)}${'✅'.repeat(i + 1)}`);
  }
});

*/
// const changeFunction = function (text) {
//   const str = text.toLowerCase().trim();
//   const [first, last] = str.split('_');
//   const newStr = `${first}${last[0].toUpperCase()}${last.slice(1)}`;
//   return newStr;
// };

// console.log(changeFunction('delayed_departure'));
// console.log(changeFunction(' calculate_AGE'));
// underscoreCase;
// firstName;
// someVariable;
// calculateAge;
// delayedDeparture;
console.log('I am testing the live server option');
