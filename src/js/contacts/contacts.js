// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

// import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { createListContacts } from '../../templates/createListContacts';
import { createCardContact } from '../../templates/createCardcontact';

import { getRefs } from './getRers';

const refs = getRefs();

import {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from './service/contact.serviceAXIOS';

const getAllcontacts = async event => {
  try {
    const data = await getContacts();

    const sortedData = [...data].sort((a, b) => b.id - a.id);

    const markup = createListContacts(sortedData);

    refs.contactContainer.innerHTML = markup;
  } catch (error) {}
};

// initPage()

window.addEventListener('load', getAllcontacts);
refs.allContacts.addEventListener('click', getAllcontacts);

const handleClick = async event => {
  const card = event.target.closest('.js-contact-card');

  if (event.target.nodeName === 'A') {
    return;
  }
  if (event.target.nodeName === 'BUTTON') {
    try {
      const data = await deleteContact(card.dataset.id);
      card.remove();
      Notify.success(`${data.name} was deleted!`);
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
    return;
  }

  try {
    const data = await getContactById(card.dataset.id);

    const markup = createCardContact(data);

    refs.contactContainer.innerHTML = markup;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

refs.contactContainer.addEventListener('click', handleClick);

const handleClickUpdate = async () => {
  const updateData = {
    phone: '+553333333335',
    id: 5,
  };

  const data = await updateContact(updateData);
  console.log('update data', data);

  console.log('click update');
};

refs.update.addEventListener('click', handleClickUpdate);
