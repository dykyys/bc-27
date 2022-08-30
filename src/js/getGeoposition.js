import { setBackgroung } from './setBackground';
import { getWeatherByCoords } from './weatherAPI';
import { getPlaceInfo } from './getPlaceInfo';
import { createMarkup } from './createMarkup';

import refs from './refs';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;

    getPlaceInfo(latitude, longitude)
      .then(({ results }) => {
        setBackgroung(results[0].components.country);
      })
      .catch(error => {
        // Error handling
      });

    getWeatherByCoords(latitude, longitude)
      .then(data => {
        const markup = createMarkup(data);
        refs.weatherBox.innerHTML = markup;
      })
      .catch(error => {
        // Error handling
      });
  });
}
