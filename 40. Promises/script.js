'use strict'

//////Promises and fetch api


const countriesContainer = document.querySelector('.countries')
const btn = document.querySelector('.btn-country')

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
            ( +data.population / 1000000).toFixed(1)} milion people</p>
            <p class="country__row"><span>🗣️</span> ${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.EUR.name} </p>
            </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
  };
