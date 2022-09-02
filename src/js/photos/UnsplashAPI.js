export default class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  //   //   #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #query = '';
  #page = 1;
  #totaPages = 0;
  #searchParams = new URLSearchParams({
    client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
    color: 'black_and_white',
    orientation: 'portrait',
    per_page: 10,
  });

  getPhotos() {
    const URL = `${this.#BASE_URL}/search/photos/?page=${this.#page}&query=${
      this.#query
    }&${this.#searchParams}`;
    return fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  gethRandomPhotos() {
    const URL = `${this.#BASE_URL}/photos?${this.#searchParams}`;
    return fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get page() {
    return this.#page;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get totalPages() {
    return this.#totaPages;
  }

  set totalPages(newTotal) {
    this.#totaPages = newTotal;
  }

  resetPage() {
    this.#page = 1;
  }

  incrementPage() {
    this.#page += 1;
  }

  hasMorePhotos() {
    return this.#page < this.#totaPages;
  }
}
