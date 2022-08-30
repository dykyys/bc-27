// 'use strict';
// https://jsonplaceholder.typicode.com/
import { createPostCard } from './createPostCard';
import { JsonplaceholderAPI } from './jsonplaceholder-api';
import refs from '../refs';

const jsonplaceholderAPI = new JsonplaceholderAPI({ page: 1, limit: 25 });
console.log(jsonplaceholderAPI);
jsonplaceholderAPI
  .getPosts()
  .then(posts => {
    const markup = createPostCard(posts);
    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.loadMore.classList.remove('is-hidden');
  })
  .catch(error => {
    // Error handling
  });

const handleMoreClick = () => {
  jsonplaceholderAPI.incrementPage();

  const hasMore = jsonplaceholderAPI.hasMorePosts();

  if (!hasMore) {
    refs.loadMore.classList.add('is-hidden');
  }

  jsonplaceholderAPI
    .getPosts()
    .then(posts => {
      const markup = createPostCard(posts);
      refs.list.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      refs.loadMore.classList.add('is-hidden');
    });
};

refs.loadMore.addEventListener('click', handleMoreClick);

// import { JsonplaceholderAPI } from './jsonplaceholder-api';
// import { createPostsCards } from '../templates/createPostsCards';

// const postsListRef = document.querySelector('.js-posts');
// const loadMoreBtn = document.querySelector('.js-load-more');

// const jsonplaceholderApi = new JsonplaceholderAPI();

// jsonplaceholderApi.updateLimit(1000);

// console.log(jsonplaceholderApi);

// jsonplaceholderApi
//   .getPosts()
//   .then(data => {
//     if (jsonplaceholderApi.page === 1) {
//       loadMoreBtn.classList.remove('is-hidden');
//     }
//     const markup = createPostsCards(data).join('');
//     postsListRef.insertAdjacentHTML('beforeend', markup);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const handleClickLoadMore = () => {
//   jsonplaceholderApi.incrementPage();

//   const hasMorePages = jsonplaceholderApi.hasMorePages();

//   if (!hasMorePages) {
//     loadMoreBtn.classList.add('is-hidden');
//   }

//   jsonplaceholderApi
//     .getPosts()
//     .then(data => {
//       const markup = createPostsCards(data);
//       postsListRef.insertAdjacentHTML('beforeend', markup.join(''));
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// loadMoreBtn.addEventListener('click', handleClickLoadMore);
