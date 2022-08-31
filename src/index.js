// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { createListContacts } from './templates/createListContacts';
import { createCardContact } from './templates/createCardcontact';

import { getRefs } from './js/getRers';

const refs = getRefs();

import {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from './js/service/contact.service';

getContacts().then(data => {
  const sortedData = [...data].sort((a, b) => b.id - a.id);

  const markup = createListContacts(sortedData);

  refs.contactContainer.insertAdjacentHTML('beforeend', markup);
});

// getContactById(28).then(data => {
//   const markup = createCardContact(data);
//   refs.contactContainer.innerHTML = markup;
// });

const handleClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const card = event.target.closest('.js-contact-card');

  deleteContact(card.dataset.id).then(data => {
    card.remove();
    Notify.success(`${data.name} was deleted!`);
  });
};

refs.contactContainer.addEventListener('click', handleClick);

const handleClickUpdate = () => {
  const updateData = {
    phone: '+5555555',
    id: 23,
  };
  updateContact(updateData).then(data => {
    console.log('update data', data);
  });
  console.log('click update');
};

refs.update.addEventListener('click', handleClickUpdate);
