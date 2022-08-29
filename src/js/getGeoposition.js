import { setBackgroung } from './setBackground';

import { getWeatherByCoords } from './getWeatherByCoords';
import { getPlaceInfo } from './getPlaceInfo';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    getPlaceInfo(latitude, longitude).then(({ results }) => {
      setBackgroung(results[0].components.country);
    });
    getWeatherByCoords(latitude, longitude);
  });
}
