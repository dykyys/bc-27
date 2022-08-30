export class JsonplaceholderAPI {
  static #BASE_URL = 'https://jsonplaceholder.typicode.com';

  #page = 1;
  #limit = 25;
  #total = 100;
  #totalPage;
  constructor({ page, limit }) {
    this.#limit = limit;
    this.#page = page;
  }

  getPosts() {
    this.calculateLimit();
    const URL = `${JsonplaceholderAPI.#BASE_URL}/posts?_page=${
      this.#page
    }&_limit=${this.#limit}`;
    return fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  incrementPage() {
    this.#page += 1;
  }

  calculateLimit() {
    this.#totalPage = this.#total / this.#limit;
  }
  hasMorePosts() {
    return this.#page < this.#totalPage;
  }
}

// export class JsonplaceholderAPI {
//   #BASE_URL = 'https://jsonplaceholder.typicode.com/';
//   #page;
//   #limit;
//   #total;

//   constructor() {
//     this.#page = 1;
//     this.#limit = 25;
//     this.#total = 100;
//   }

//   getPosts() {
//     return fetch(
//       `${this.#BASE_URL}posts?_page=${this.#page}&_limit=${this.#limit}`
//     ).then(responce => {
//       if (!responce.ok) {
//         throw new Error(responce.statusText);
//       }
//       return responce.json();
//     });
//   }
//   get page() {
//     return this.#page;
//   }

//   incrementPage() {
//     this.#page += 1;
//   }

//   hasMorePages() {
//     return this.#total / this.#limit > this.#page;
//   }

//   updateLimit(newLimit) {
//     this.#limit = newLimit > this.#total ? this.#total : newLimit;
//   }
// }
