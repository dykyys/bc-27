import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
axios.defaults.headers.Authorization =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
// axios.defaults.params = {
//   color: 'black_and_white',
//   orientation: 'portrait',
//   per_page: 20,
// };
export default class UnsplashAPI {
  #query = '';

  #searchParams = {
    params: {
      color: 'black_and_white',
      orientation: 'portrait',
      per_page: 4,
    },
  };

  async getTrendPhotos(page) {
    const { data } = await axios.get(
      `/?page=${page}&query=bad`,
      this.#searchParams
    );

    return data;
  }

  async getPhotos(page) {
    const { data } = await axios.get(
      `/?page=${page}&query=${this.#query}`,
      this.#searchParams
    );

    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
