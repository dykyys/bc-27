const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = () => {
  const URL = `${BASE_URL}/contacts`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// GET -> /contacts/:id
export const getContactById = id => {
  const URL = `${BASE_URL}/contacts/${id}`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// POST -> /contacts
export const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const URL = `${BASE_URL}/contacts`;

  return fetch(URL, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// PUT -> /contacts/:id
export const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const URL = `${BASE_URL}/contacts/${newContact.id}`;

  return fetch(URL, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
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
export const deleteContact = id => {
  const option = {
    method: 'DELETE',
  };
  const URL = `${BASE_URL}/contacts/${id}`;

  return fetch(URL, option).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
