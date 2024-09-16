const caleb = {
  name: "caleb",
  age: 12,
  state: "ondo state",
};

async function getName() {
  return "Caleb";
}

console.log(`my name is ${getName()}`);

getName().then(function (name) {
  console.log(`My name is Caleb Oluwafemi Arodu`);
});
