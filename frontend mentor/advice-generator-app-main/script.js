const randomButton = document.querySelector(".dice__container");
const quote = document.querySelector(".advice__content--quote");
const idNumber = document.querySelector(".advice__id");

//function to get and parse the advice from the api
async function fetchQuote(url) {
  const getApi = await fetch(url);
  const response = await getApi.json();
  const { id, advice } = response.slip;
  return [id, advice];
}

function renderQuote(id, advice) {
  idNumber.textContent = id;
  quote.textContent = advice;
}

//function to set display the quote
async function displayQuote() {
  const parameters = await fetchQuote("https://api.adviceslip.com/advice");
  renderQuote(...parameters);
}
randomButton.addEventListener("click", displayQuote);
