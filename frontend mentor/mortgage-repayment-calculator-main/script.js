const button = document.querySelector("button");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const form = document.querySelector("form");
const reset = document.querySelector(".clear");
const choices = document.querySelectorAll(".choices");
const radioButtons = document.querySelectorAll(`input[type="radio"]`);
const indicator = document.querySelectorAll(".indicator");
const inputText = document.querySelectorAll(`input[type="number"]`);
const inputField = document.querySelectorAll(".input-field");
const smallerField = document.querySelectorAll(".input-field div");
// alert(smallerField[0]);
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const fieldset = document.querySelector("fieldset");
let parameters;

//validator text adder
function validatorText(element) {
  if (element.lastElementChild.tagName.toLowerCase() === "p") return;
  const p = document.createElement("p");
  p.textContent = "This field is required";
  p.classList.add("not-valid");
  element.appendChild(p);
  // element.innerHTML += `<p class="not-valid">This field is required</p>`;
}

//focus using indicators
function focusText() {
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].addEventListener("click", () => {
      inputText[i].focus();
    });
  }
}

function focusChoices() {
  for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", () => {
      // choices[i].focus();
      for (let choice of choices) {
        choice.classList.remove("checked");
      }
      radioButtons[i].checked = true;
      choices[i].classList.add("checked");
    });
  }
}

//function to calculate mortgage and display;
function calcMortage(amount, term, rate) {
  // alert(`${rate + term}`);
  let temp = term;
  const monthlyInterest = (amount * rate) / 1200;
  const totalInterest = monthlyInterest * term * 12;
  rate /= 1200;
  term *= 12;
  const monthly =
    (amount * (rate * (1 + rate) ** term)) / ((1 + rate) ** term - 1);
  const total = monthly * 12 * temp;
  for (const elem of radioButtons) {
    if (elem.id === "repayment" && elem.checked === true) {
      // alert(elem.id);
      document.querySelector("#monthly-interest").textContent =
        "Your monthly repayment";
      document.querySelector("#total-interest").textContent =
        "Total you'll repay over the term";
      h3.textContent = `£${monthly.toFixed(2)}`;
      h4.textContent = `£${total.toFixed(2)}`;
    }
    if (elem.id === "interest" && elem.checked === true) {
      document.querySelector("#monthly-interest").textContent =
        "Your monthly interest";
      document.querySelector("#total-interest").textContent =
        "Total interest you'll repay over the term";
      h3.textContent = `£${monthlyInterest.toFixed(2)}`;
      h4.textContent = `£${totalInterest.toFixed(2)}`;
    }
  }
}

function validatorColor(index) {
  inputText[index].classList.add("invalid-input");
  indicator[index].classList.add("redBg");
}

function removeColor(index) {
  indicator[index].classList.remove("redBg");
  inputText[index].classList.remove("invalid-input");
}
focusChoices();
focusText();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //validate the textfields
  for (let i = 0; i < inputText.length; i++) {
    if (!inputText[i].value.trim()) {
      validatorText(inputField[i]);
      validatorColor(i);
      // return;
    } else {
      if (inputField[i].lastElementChild.tagName.toLowerCase() === "p") {
        // alert("test");
        inputField[i].removeChild(inputField[i].lastElementChild);
        removeColor(i);
      }
    }
    // alert(indicator.length);
  }

  //validate the radio buttons
  if (!radioButtons[0].checked && !radioButtons[1].checked) {
    validatorText(fieldset);
    return;
  } else {
    if (fieldset.lastElementChild.tagName.toLowerCase() === "p") {
      // alert("test");
      fieldset.removeChild(fieldset.lastElementChild);
    }
  }

  for (const elem of inputText) {
    if (!elem.value.trim()) {
      return;
    }
  }

  let values = [];
  for (const elem of inputText) {
    values.push(parseFloat(elem.value));
  }
  // alert(values);
  calcMortage(...values);
  first.classList.add("hidden");
  second.classList.add("shown");
});
//get the input values
reset.addEventListener("click", () => {
  form.reset();
  first.classList.remove("hidden");
  second.classList.remove("shown");
  for (let i = 0; i < inputText.length; i++) {
    if (inputField[i].lastElementChild.tagName.toLowerCase() === "p") {
      // alert("test");
      inputField[i].removeChild(inputField[i].lastElementChild);
      removeColor(i);
    }
  }
  if (fieldset.lastElementChild.tagName.toLowerCase() === "p") {
    // alert("test");
    fieldset.removeChild(fieldset.lastElementChild);
  }
});
