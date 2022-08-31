import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import localStorApi from './localestorage';
import { createContact } from './service/contact.service';
import { createCardContact } from '../templates/createCardContact';

import { getRefs } from './getRers';

const refs = getRefs();

const LOCAL_STORAGE_KEY = 'user-data';
initForm();

const handleSabmit = event => {
  event.preventDefault();
  const { name, email, phone } = event.target.elements;

  if (name.value === '' || email.value === '' || phone.value === '') {
    Notify.failure('Заповніть всі поля і спробуйте ще раз!');
    return;
  }

  const userData = {};

  const formData = new FormData(refs.form);

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  createContact(userData).then(data => {
    const markup = createCardContact(data);
    refs.contactContainer.insertAdjacentHTML('afterbegin', markup);
  });

  toggleModal();

  event.currentTarget.reset();
  localStorApi.remove(LOCAL_STORAGE_KEY);
  // Notify.success("Дякуємо за зворотній зв'язок!");
};

const handleInput = event => {
  const { name, value } = event.target;
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  persistedData = persistedData ? persistedData : {};

  persistedData[name] = value;
  localStorApi.save(LOCAL_STORAGE_KEY, persistedData);
};

refs.form.addEventListener('input', throttle(handleInput, 300));
refs.form.addEventListener('submit', handleSabmit);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function initForm() {
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
