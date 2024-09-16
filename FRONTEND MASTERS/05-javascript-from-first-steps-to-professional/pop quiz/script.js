// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div
const statement = document.querySelector("#statement");
const optionButtons = document.querySelectorAll("#options button");
const explanation = document.querySelector("#explanation");
const again = document.getElementById("again");
let i = 0;
let score = 0;

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation{
const fact = [
  {
    statement: "JavaScript is also known as the language of the web",
    answer: "true",
    explanation:
      "Yes, Javascript is known as the language of the web because it gives functionality to our websites",
  },
  {
    statement: "JavaScript is a not programming language",
    answer: "false",
    explanation: "No, JavaScript is a programming language",
  },
  {
    statement: "programming and coding are used interchangably",
    answer: "true",
    explanation: "Yes, programming is sometimes called coding",
  },
  {
    statement: "Computer is an electromechanical device",
    answer: "false",
    explanation:
      "Computer is an electronic device, not an electromeahcnical device",
  },
];

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element
function disable(button) {
  button.setAttribute("disabled", "");
}
function enable(button) {
  button.removeAttribute("disabled");
}
statement.textContent = fact[i].statement;

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer
const isCorrect = (guess) => guess === fact[i].answer.toString();

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
for (let options of optionButtons) {
  // TODO 3: Set the text of the statement element to the fact's statement
  options.addEventListener("click", () => {
    if (options.value != "next") {
      // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
      explanation.textContent = fact[i].explanation;
      //   console.log(explanation.textContent);
      // TODO 7: Within the event handler function,
      // Use a for loop to disable all the option buttons
      for (let options of optionButtons) {
        options.value === "next" ? enable(options) : disable(options);
      }

      if (isCorrect(options.value)) {
        options.classList.add("correct");
        score++;
      } else {
        options.classList.add("incorrect");
      }
    } else {
      for (options of optionButtons) {
        if (options.value != "next") {
          enable(options);
          if (options.classList.contains("correct"))
            options.classList.remove("correct");
          if (options.classList.contains("incorrect"))
            options.classList.remove("incorrect");
        } else {
          disable(options);
        }
      }
      if (options.value === "next") {
        i++;
        if (i <= 3) statement.textContent = fact[i].statement;
        console.log(i);
        if (i === 4) {
          document.querySelector("#score").textContent = score;
          document.querySelector(".main").classList.add("hidden");
          document.querySelector("#result").classList.add("visible");
        }
      }
    }
  });
}

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate
