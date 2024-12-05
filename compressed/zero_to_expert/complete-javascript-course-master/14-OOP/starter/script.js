'use strict';
// class Person {
//   constructor(fullName, age) {
//     this.fullName = fullName;
//     this.age = age;
//   }
//   get fullName() {
//     return this.fullName;
//   }
// }

// const caleb = new Person('Caleb Arodu', 22);

//GETTERS AND SETTERS
/*
const account = {
  owner: 'Caleb',
  movements: [21, 3, 34, 53, 6, 75, 75, 47, 5],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 99;
console.log(account);

//setters and getters can be useful for validation
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear - this.birthYear);
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert('The given name is not a full name');
  }
  get fullName() {
    return this._fullName;
  }
}

const caleb = new Person('Caleb Arodu', 2002);
console.log(caleb);
console.log(caleb.age);
*/

//STATIC METHODS
//they are not availabble on the instance of the classes or constructor but on the classes or constructor itself
// static method to a constructor function
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
Person.hey = function () {
  console.log('Hey there');
};

Person.hey();
*/

//static method with classes
/*
class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear - this.birthYear);
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert('The given name is not a full name');
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hello there!');
  }
}

Personcl.hey();
*/

//OBJECT.CREATE
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const caleb = Object.create(PersonProto);
console.log(caleb);
caleb.name = 'Caleb';
caleb.birthYear = 2002;
caleb.calcAge(0);
console.log(caleb.__proto__ === PersonProto);

const joshua = Object.create(PersonProto);
joshua.init('Joshua', 2005);
joshua.calcAge();
*/

//CODING CHALLENGE
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}


const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 23;
console.log(ford);
  */

//INHERITANCE

//inheritance between classes using cobject.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const caleb = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2002, 'computer science');
jay.calcAge();
*/

//More examples on classes
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this, (currency = currency);
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  //public interface of the object
  deposit(amount) {
    this.movements.push(amount);
  }
  withdrawal(amount) {
    this.deposit(-amount);
  }
  approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this.approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan of ${amount} has been deposited into your account`);
    }
  }
}

const acc1 = new Account('Caleb', 'EUR', 2222);
acc1.deposit(223);
acc1.withdrawal(8877);
acc1.requestLoan(333);
*/

//ENCAPSULATION
//fake encapsulation
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this, (currency = currency);
    this._pin = pin;
    //protected
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  //public interface of the object
  getMovements() {
    return this._movements;
  }

  deposit(amount) {
    this._movements.push(amount);
  }
  withdrawal(amount) {
    this.deposit(-amount);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this.approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan of ${amount} has been deposited into your account`);
    }
  }
}

const acc1 = new Account('Caleb', 'EUR', 2222);
acc1.deposit(223);
acc1.withdrawal(8877);
acc1.requestLoan(333);
console.log(acc1.getMovements(0));
*/

/*
//encapsulation using class fields
//1. public fields
//2. private fields
//3. public methods
//4. private methos
class Account {
  //1. public field
  locale = navigator.language;
  //2. private
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  //3. public methods

  //public interface of the object
  getMovements() {
    return this.#movements;
  }

  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }
  withdrawal(amount) {
    this.deposit(-amount);
    return this;
  }

  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan of ${amount} has been deposited into your account`);
    }
    return this;
  }

  //4. private methods
  #approveLoan(amount) {
    return true;
  }
}

const acc1 = new Account('Caleb', 'EUR', 2222);
acc1.deposit(223);
acc1.withdrawal(8877);
acc1.requestLoan(333);
console.log(acc1.getMovements());

//CHAINING
acc1.deposit(33).withdrawal(3289).requestLoan(222).deposit(121);
console.log(acc1.getMovements());
*/

//FINAL CODING CHALLENGE
//parent class car
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

//child class EVCL

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian
  .brake()
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(33)
  .accelerate();
console.log(rivian);
console.log(rivian.speedUS);
