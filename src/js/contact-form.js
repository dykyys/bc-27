'use strict';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';

import storageAPI from './storage.js';

const STORAGE_FORM_KEY = 'form-key';

const formRef = document.querySelector('.js-contact-form');

initPage();

const handleInput = event => {
  let savedValue = storageAPI.load(STORAGE_FORM_KEY);

  if (!savedValue) {
    savedValue = {};
  }

  // if (savedValue === undefined) {
  //   savedValue = {};
  // }

  const { name, value } = event.target;

  savedValue[name] = value;

  storageAPI.save(STORAGE_FORM_KEY, savedValue);
};

formRef.addEventListener('input', throttle(handleInput, 300));

function initPage() {
  const savedValue = storageAPI.load(STORAGE_FORM_KEY);

  if (!savedValue) {
    return;
  }

  // if (savedValue === undefined) {
  //   return;
  // }

  Object.entries(savedValue).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const { name, email, message } = event.target;

  if (name.value === '' || email.value === '' || message.value === '') {
    Notify.failure('Заповніть всі поля!', {
      timeout: 1500,
    });
    return;
  }

  // const userData = {
  //   name: name.value,
  //   email: email.value,
  //   message: message.value,
  // };
  // console.log(userData);

  const userData = {};

  const data = new FormData(formRef);

  data.forEach((value, name) => {
    userData[name] = value;
  });

  console.log(userData);

  storageAPI.remove(STORAGE_FORM_KEY);

  event.target.reset();
  Notify.success("Дякуємо за зворотній зв'язок!");
};
formRef.addEventListener('submit', handleSubmit);
