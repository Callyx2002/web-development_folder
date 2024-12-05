const form = document.querySelector("form");
const inputFields = document.querySelectorAll(".input-fields");
const success = document.querySelector(".success");
const inputTexts = document.querySelectorAll(".input-fields input");
const fieldset = document.querySelector("fieldset");
const radioButtons = document.querySelectorAll("fieldset label");
const paths = document.querySelectorAll("fieldset label path");
const radioSVGs = document.querySelectorAll("fieldset label svg");
const textarea = document.querySelector("textarea");
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const checkDiv = document.querySelector(".check div");
const checkPath = document.querySelector(".check path");
const btnSubmit = document.querySelector("button");
const main = document.querySelector("main");
//aimate success
/*
btnSubmit.onclick = (e) => {
  e.preventDefault();
  //   alert("test");
  success.style.display = "block";
  success.style.animation = "slideIn 2s ease";
};
*/

//text validator
const validatorText = function (element) {
  if (element.lastElementChild.tagName.toLowerCase() === "p") return;
  const p = document.createElement("p");
  p.classList.add("invalid--text");
  p.textContent =
    element.lastElementChild.type === "email"
      ? "Please enter a valid email"
      : "This field is required";
  if (element === fieldset) {
    p.textContent = "Please select a query type";
  } else if (element === message) {
    p.textContent = "This field is required";
  } else if (element === check) {
    p.textContent = "To submit this form, please consent to being contacted";
  }

  element.appendChild(p);
};

//red border validator
const validatorInput = function (element) {
  element.classList.add("redBd");
};

//remove red border
const removeBorder = function (element) {
  element.classList.remove("redBd");
};

//remove border and text on focus
const focusText = function (fields) {
  fields.forEach((field, i) => {
    field.addEventListener("click", () => {
      // field.focus();
      if (inputFields[i].lastElementChild.tagName.toLowerCase() === "p") {
        inputFields[i].removeChild(inputFields[i].lastElementChild);
        removeBorder(field);
      }
    });
  });
};
//helper function to make the background white
const makeWhite = function (buttons) {
  buttons.forEach((button, i) => {
    button.classList.add("whiteBg");
    button.classList.remove("checkedBg");
    button.checked = false;
    paths[i].classList.remove("fill");
    radioSVGs[i].classList.remove("svg");
  });
};
//make a radiobutton checked  on click
const radioCheck = function (buttons) {
  buttons.forEach((button, i) => {
    button.addEventListener("focus", (e) => {
      // button.focus();
      // alert(button.checked);
      makeWhite(buttons);
      button.checked = true;
      button.classList.add("checkedBg");
      paths[i].classList.add("fill");
      radioSVGs[i].classList.add("svg");
      if (fieldset.lastElementChild.tagName.toLowerCase() === "p") {
        fieldset.removeChild(fieldset.lastElementChild);
      }
    });
  });
};
//remove red background from message on focus
const messageNormal = function (message) {
  textarea.addEventListener("focus", () => {
    if (message.lastElementChild.tagName.toLowerCase() === "p") {
      message.removeChild(message.lastElementChild);
    }
  });
};

//helper function to make the radio
//apply check property on check box
checkDiv.checked = false;
const boxCheck = function (box) {
  // box.checked = false;
  box.addEventListener("click", () => {
    box.checked = box.checked ? false : true;
    // alert(box.checked);
    if (box.checked === true) {
      // alert(checkPath);
      checkPath.style.fill = "var(--medium-green)";
      if (check.lastElementChild.tagName.toLowerCase() === "p") {
        check.removeChild(check.lastElementChild);
      }
    } else {
      checkPath.style.fill = "var(--white)";
    }
  });
};

///validate all
const validateAll = function () {
  //validate inputs
  inputTexts.forEach((text, i) => {
    if (!text.value.trim()) {
      validatorText(inputFields[i]);
      validatorInput(text);
    } else {
      if (inputFields[i].lastElementChild.tagName.toLowerCase() === "p") {
        inputFields[i].removeChild(inputFields[i].lastElementChild);
        removeBorder(text);
      }
    }
  });

  //validate radio
  if (!radioButtons[0].checked && !radioButtons[1].checked) {
    validatorText(fieldset);
  }

  //validate textarea
  if (!textarea.value.trim()) {
    validatorText(message);
  }

  //validate checkbox
  if (!checkDiv.checked) {
    validatorText(check);
  }
};

//hide success message
const hideSuccess = function () {
  success.addEventListener("click", () => {
    if (success.classList.contains("shown")) {
      success.classList.remove("shown");
    }
  });
};
focusText(inputTexts);
radioCheck(radioButtons);
messageNormal(message);
boxCheck(checkDiv);
hideSuccess();
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  validateAll();

  if (!radioButtons[0].checked && !radioButtons[1].checked) {
    return;
  }
  if (!textarea.value.trim()) {
    return;
  }
  flag = 0;
  inputTexts.forEach((text) => {
    if (!text.value.trim()) {
      flag = 1;
      // alert(flag);
    }
  });
  if (flag === 1) {
    return;
  }
  if (!checkDiv.checked) {
    return;
  }
  success.classList.add("shown");
  setTimeout(function () {
    success.classList.remove("shown");
  }, 4000);
  makeWhite(radioButtons);
  checkPath.style.fill = "var(--white)";
  checkDiv.checked = false;
  form.reset();
});
