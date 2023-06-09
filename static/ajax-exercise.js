'use strict';

// PART 1: SHOW A FORTUNE
fetch("/fortune")
  .then((response) => response.text())
  .then((responseData) => {
    document.querySelector('#fortune-text').innerText = responseData;
  }
  );
function showFortune(evt) {


 
    const fortune = `/fortune{#fortune-text}`;

}
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch('/weather.json?zipcode=${zipcode}')
    .then((response) => response.json())
    .then((forecast) => {
      document.querySelector('#weather-info').innerHTML = forecast.temp;
     });

  
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
