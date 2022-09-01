const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = async () => {
  const URL = `${BASE_URL}/contacts`;

  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

// GET -> /contacts/:id
export const getContactById = async id => {
  const URL = `${BASE_URL}/contacts/${id}`;

  const response = await fetch(URL);

  return await response.json();
};

// POST -> /contacts
export const createContact = async contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const URL = `${BASE_URL}/contacts`;

  const response = await fetch(URL, options);
  return await response.json();
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const URL = `${BASE_URL}/contacts/${newContact.id}`;

  const response = await fetch(URL, options);

  return await response.json();
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {
//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(newContact),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// };

// DELETE -> /contacts/:id
export const deleteContact = async id => {
  const option = {
    method: 'DELETE',
  };
  const URL = `${BASE_URL}/contacts/${id}`;

  const response = await fetch(URL, option);

  return await response.json();
};
