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

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1;
}
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res =>{
        console.log(res);
        if(!res.ok){
            throw new Error(`Country not found ${res.status}`)
        }
        
        return res.json()
    })
    .then(data => {
        const second = data[0].borders

        if(!second) return

        renderCountry(data[0])
        return fetch(`https://restcountries.com/v3.1/name/${country}`)
    }).then(res => res.json())
    .then(data=> renderCountry(data[0]))
    .catch(err => renderError(`Something went wrong ${err.message}. Try again!`))
    .finally(()=>{
        countriesContainer.style.opacity = 1;
    })
}

btn.addEventListener('click', function(){
    getCountryData('portugal') 
})
