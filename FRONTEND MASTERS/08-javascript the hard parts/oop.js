/*const user1 = {
  name: "Caleb",
  score: 87,
  increment() {
    this.score++;
  },
};

// user1.increment();
// console.log(user1.score);
const user2 = {};
user2.name = "Adeh";
user2.score = 90;
user2.increment = function () {
  this.score++;
};

const user3 = Object.create(null);
user3.name = "Moses";
user3.score = 30;
user3.increment = function () {
  this.score++;
};

console.log(user1, user2, user3);
*/
//THIS IS JUST BREAKING THE DRY RULE WHICH BRINGS US TO THE CONCEPT OF OOOP

//USE OF FUNCTIONS TO CREATE A TEMPLATE SO AS TO FOLLOW THE DRY RULE
//WHAT I JUST CREATED IS CALLED A FACTORY FUNCTION ACCORDING TO WILL SENTANCE
/*
function createObject(name, score) {
  const newObj = {
    name: name,
    score: score,
    increment() {
      this.score++;
    },
  };
  return newObj;
}

const user1 = createObject("Caleb", 89);
const user2 = createObject("Adeh", 95);
// user2.job = "Farming";
console.log(user1, user2);

//USING PROTOTYPE CHAIN TO SOLVE THE PROBLEM

function userCreate(name, score) {
  const newObj = Object.create(userFunctionStore);
  newObj.name = name;
  newObj.score = score;
  return newObj;
}

const userFunctionStore = {
  increment() {
    this.score++;
  },
  login() {
    this.login++;
  },
};

const player1 = userCreate("Dele", 33);
const player2 = userCreate("Ali", 21);
player1.increment();
player2.increment();
console.log(player1, player2);
console.log(Object.prototype);

*/

//USING THE NEW KEYWORD
/*
function newUserCreate(name, score) {
  this.name = name;
  this.score = score;
}

newUserCreate.prototype.increment = function () {
  this.score++;
};

const player1 = new newUserCreate("Dele", 33);
const player2 = new newUserCreate("Ali", 21);
player1.increment();
player2.increment();
console.log(player1, player2);
// console.log(Object.prototype);
console.log(newUserCreate.prototype);



*/

//USING THE CLASS KEYWORD
class UserCreate {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log(`${this.name}, you have successfully logged in!`);
  }
}

const user1 = new UserCreate("David", 45);
console.log(user1);
user1.login();
console.log(UserCreate);
