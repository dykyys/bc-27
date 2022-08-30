'use strict';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getWeatherByCityName } from './weatherAPI';
import { createMarkup } from './createMarkup';
import { setBackgroung } from './setBackground';
import refs from './refs';

const handleSubmit = event => {
  event.preventDefault();

  const { user_country } = event.target.elements;
  const searchValue = user_country.value.trim();

  if (!searchValue) {
    Notify.failure('Введіть місто для пошуку погоди!');
    return;
  }

  setBackgroung(searchValue);

  getWeatherByCityName(searchValue)
    .then(data => {
      const markup = createMarkup(data);
      refs.weatherBox.innerHTML = markup;
    })
    .catch(error => {
      // Error handling
    });
  Notify.success(`Погода в ${searchValue} на сьогодні!`);
};

refs.form.addEventListener('submit', handleSubmit);
