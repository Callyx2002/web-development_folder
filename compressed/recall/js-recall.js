'use strict';

//09 DATA STRUCTURES SECTION
/*
//destructuring arrays
var myArray = [1, 2, 4, 5, 'I am the best in the world'];
var [precious, , , , caleb] = myArray;
[precious, caleb] = [caleb, precious];
console.log(precious, caleb);

const [i, , j] = [1, 2, [4, 5, 6]];
console.log(j[1]);

//destructuring objects
const me = {
  firstName: 'Caleb',
  lastName: 'Arodu',
  age: 21,
  freeTime: {
    mon: {
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
};

const { firstName: myName, age: myAge } = me;
console.log(`My name is ${myName} and I am ${myAge}`);

//the spread operator
const newArray = [...myArray, ...j];
console.log(newArray);

const newObj = { ...me.freeTime };
console.log(newObj?.sat?.open);

//the rest operator
const [...resting] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 87];
console.log(resting);

// || and && shortcuiting evaluation, considering the nullish coalescence operator alsoo

const value = me.freeTime.sat.open ?? 12;
console.log(value);

resting && console.log(resting);

var numMe = undefined;

numMe ??= 13;

console.log(numMe);

//Testing the for of loop

const menu = [1, 33, 4, 5, 6, 8, 8, 8, 8, 'I am the best in the world'];

for (const item of menu) {
  if (item === 8) continue;
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  if (el === 8) continue;
  console.log(`This is the number ${i} element of the array and is ${el}`);
}
*/

//using the entries method

//Talking on enhanced object literals
/*

const bio = {
  firstName: 'Caleb',
  lastName: 'Arodu',
  age: 21,
};
console.log(bio.displayBio());

//testing the optional chaining property
console.log(bio.displayBi?.());
*/

//looping over objects
/**
 const properties = Object.keys(freeTime);
 for (const [i, { open, close }] of Object.entries(freeTime)) {
   console.log(`On ${i} we open at ${open} and close at ${close} gmt`);
 }

 

//working on sets
const orderSet = new Set('Jonas is a mad man');

console.log(orderSet);
const mySet = new Set([1, 1, 2, 3, 4, 5, 65, 6, 7, 8, 8, 8, 8, 8, 9, 0]);
console.log(mySet.size);
mySet.clear();
console.log(mySet);

for (const item of orderSet) {
  console.log(item);
}

//using sets to remove iterables in arrays
const order = [
  'caleb',
  'arodu',
  'oluwafemi',
  'emmanuel',
  'joshua',
  'caleb',
  'caleb',
  'caleb',
];
const uniqueOrder = [...new Set(order)];
console.log(uniqueOrder);

//working with maps

const freeTime = {
  mon: {
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
};

const myMap = new Map();
myMap
  .set(true, 'I am the best in the world!')
  .set(false < 'I am a very very bad boy')
  .set('name', 'My name is Caleb Arodu');

console.log(myMap);
const tempMap = new Map([
  [true, 'I am caleb arodu'],
  [false, 'I am not happy'],
]);
console.log(tempMap);

//converting objecst to maps
const permMap = new Map(Object.entries(freeTime));
console.log(permMap);

//converting maps to arrays
const mapArray = [...permMap];
console.log(mapArray);
*/

/*
//////////////////////////////////////////////////////////////////////////////
//WORKING WITH STRINGS
const myString =
  'Caleb Arodu Oluwafemi is the best in the world of progeamming';
console.log(myString.indexOf(' '));
console.log(myString.lastIndexOf('best'));

//to extract the first word of a string
console.log(myString.slice(0, myString.indexOf(' ')));
//to extract the last word of a string
console.log(myString.slice(myString.lastIndexOf(' ') + 1));

//negative slicing and end parameters
console.log(myString.slice(1, -1));

//case conversion
console.log(`${myString.toLowerCase()}\n${myString.toUpperCase()}`);

console.log(
  '  I am just so tired now  '.trimStart(),
  '  I am just so tired now  '.trimEnd()
);

//replacing elements or words in a string
console.log(myString.replace('Caleb', 'Oluwafemi'));

//working with the split methods on strings
const spliString = myString.split(' ');
console.log(spliString);
const joinedString = spliString.join('++');
console.log(joinedString);

//padding the start and end of a string and also the repat function
console.log('My name is caleb arodu'.padStart(30, '@'));
console.log('My name is caleb arodu'.padEnd(30, '@'));

console.log(myString.repeat(12));
*/

//finally finished revising the jotted code snippet from jonas schmedtmann.. onto the next thing

//getting ready for the functions part
