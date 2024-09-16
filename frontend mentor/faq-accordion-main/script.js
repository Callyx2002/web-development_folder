const plusArray = document.querySelectorAll(".plus");
const minusArray = document.querySelectorAll(".minus");
const contentArray = document.querySelectorAll(".main__content--answer");
const question = document.querySelectorAll(".main__content--question");
// console.log(contentArray);
for (let i = 0; i < plusArray.length; i++) {
  plusArray[i].addEventListener("click", () => {
    plusArray[i].classList.add("hidden");
    minusArray[i].classList.add("shown");
    contentArray[i].classList.add("shown");
  });
  question[i].addEventListener("click", () => {
    if (!plusArray[i].classList.contains("hidden")) {
      plusArray[i].classList.add("hidden");
      minusArray[i].classList.add("shown");
      contentArray[i].classList.add("shown");
    } else {
      plusArray[i].classList.remove("hidden");
      minusArray[i].classList.remove("shown");
      contentArray[i].classList.remove("shown");
    }
  });
  minusArray[i].addEventListener("click", () => {
    plusArray[i].classList.remove("hidden");
    minusArray[i].classList.remove("shown");
    contentArray[i].classList.remove("shown");
  });
}
