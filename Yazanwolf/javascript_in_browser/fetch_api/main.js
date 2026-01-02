'use strict';

const cityIput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('country-name');
const temperature = document.getElementById('temperature');
const wind = document.getElementById('wind');

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = cityIput.value.trim();
    if (city === '') {
        alert('Please enter a city name.');
    }
    getCityWeatherInfo(city);
});

const getCityWeatherInfo = (city) => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=${city}`)
    .then((data) => {
        if (!data) {
            return Promise.reject('Error while searching for city');
        }
        if (!data.ok) {
            return Promise.reject('Network response was not ok');
        }
        return data.json();
    })
    .then((data) => {
        if (!data.results || data.results.length === 0) {
            return Promise.reject('City not found');
        }
        const { country, name, latitude, longitude } = data.results[0];
        cityName.textContent = name;
        countryName.textContent = country;
        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    })
    .then((data) => {
        if (!data) {
            return Promise.reject('Error while fetching weather data');
        }
        if (!data.ok) {
            return Promise.reject('Network response was not ok');
        }
        return data.json()
    })
    .then((data) => {
        console.log(data);
        weatherResult.classList.remove('hidden');
        const { temperature: temp, windspeed } = data.current_weather;
        temperature.textContent = temp;
        wind.textContent = `${windspeed} km/h`;
    })
    .catch((error) => console.error('Error fetching weather data:', error));
}
