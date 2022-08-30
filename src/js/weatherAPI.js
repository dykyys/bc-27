import { createMarkup } from './createMarkup';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_KEY = '95632b02f9162f375a368971925f5209';
const searchParams = new URLSearchParams({
  units: 'metric',
  lang: 'ua',
});

export function getWeatherByCoords(lat, lon) {
  const weatherUrl = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&${searchParams}`;
  return fetch(weatherUrl).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function getWeatherByCityName(name) {
  const weatherUrl = `${BASE_URL}?q=${name}&appid=${WEATHER_KEY}&${searchParams}`;
  return fetch(weatherUrl).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
