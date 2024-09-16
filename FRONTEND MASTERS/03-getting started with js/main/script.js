// function school(name) {
//   this.name = name;
// }

// school.prototype.ask = function (question) {
//   console.log(this.name, question);
// };

// we can use class to do this
class school {
  constructor(name) {
    this.name = name;
  }
  ask(question) {
    console.log(this.name, question);
  }
}
var classical = new school("classical");
var harmony = new school("harmony");

classical.ask("Is the best school");
harmony.ask("Is the second best school");

const name = () => "mane";
