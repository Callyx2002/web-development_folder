'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/nigeria`);
request.send();
request.addEventListener('load', function () {
  console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);

  console.log(data);
  const HTML = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.NGN.name
            }</p>
        </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', HTML);
  countriesContainer.style.opacity = 1;
});
