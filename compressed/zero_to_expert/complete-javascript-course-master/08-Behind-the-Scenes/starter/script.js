'use strict';
/*
function calcAge(birthYear) {
  console.log(`my name is ${firstName}`);
  const age = 2024 - birthYear;

  function printAge() {
    let output = `You are ${age}, and you were born in ${birthYear}`;

    if (birthYear > 1990) {
      var greater = true;
      const firstName = 'Jeffery';
      const str = `Oh, you're a millenial ${firstName}`;
      const output = 'mee';
    }

    // console.log(output);
    // console.log(str);
    console.log(greater);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Caleb';
calcAge(1991);
*/

// const arr = 1;
// console.log(caleb.calcAge());
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
  console.log(2024 - birthYear);
};

calcAge(2002);

const calcArrow = birthYear => {
  console.log(this);
  console.log(2024 - birthYear);
};

calcArrow(2004);
*/
/*
const calcAge = function () {
  return 2024 - this.year;
};

const caleb = {
  name: 'Caleb',
  year: 2002,
  calcAge: function () {
    console.log(this.name);

    const calcArrow = () => {
      console.log(this.name);
    };
  },
};
*/

const me = {
  name: 'Caleb',
  age: 21,
  job: 'Student',
};

const peter = me;
peter.name = 23;
console.log(me, 'me');
console.log(peter, 'peter');
