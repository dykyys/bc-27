export const getPlaceInfo = (lat, lon) => {
  const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';
  const URL = `${BASE_URL}?q=${lat},${lon}&key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
