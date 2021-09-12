// https://openweathermap.org/api

import api_key from './config.js';

let weather__temp = document.querySelector('.weather__temp .data');
let weather_description = document.querySelector('.weather__description');
// let weather__country = document.querySelector('.weather__country');
let weather__cord__lat = document.querySelector('.weather__cord__lat .data');
let weather__cord__lon = document.querySelector('.weather__cord__lon .data');
let btn = document.querySelector('.btn');   //TODO : add btn to generate random weater info

async function loadApi() {
    let lat = Math.floor(Math.random() * (90 - -90) - 90);
    let lon = Math.floor(Math.random() * (180 - -180) - 180);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    let data = await res.json();
    console.log(data);
    weather__temp.innerHTML = data.main.temp;
    weather_description.innerHTML = data.weather[0].description;
    // weather__country.innerHTML = data.sys.country;
    weather__cord__lat.innerHTML = data.coord.lat;
    weather__cord__lon.innerHTML = data.coord.lon;
}

loadApi();