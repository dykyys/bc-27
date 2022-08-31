import refs from '../refs';
import UnsplashAPI from './UnsplashAPI';
import { createGalleryCards } from './createGalleryCard';

const unsplashAPI = new UnsplashAPI();

const handleSubmit = event => {
  event.preventDefault();

  const { query } = event.target.elements;
  const searchQuery = query.value.trim();

  if (!searchQuery) {
    console.log('Введіть дані для пошуку!');
    return;
  }

  refs.photosList.innerHTML = '';

  unsplashAPI.query = searchQuery;

  unsplashAPI.resetPage();

  unsplashAPI
    .getPhotos()
    .then(({ results, total_pages }) => {
      const markup = createGalleryCards(results);
      refs.photosList.insertAdjacentHTML('beforeend', markup);
      refs.photosLoadMore.classList.remove('is-hidden');
      unsplashAPI.totalPages = total_pages;
    })
    .catch(error => {
      refs.photosList.innerHTML = '';
    });
};

refs.photosForm.addEventListener('submit', handleSubmit);

const handleMoreClick = () => {
  unsplashAPI.incrementPage();

  const hasMorePhotos = unsplashAPI.hasMorePhotos();

  if (!hasMorePhotos) {
    refs.photosLoadMore.classList.add('is-hidden');
  }

  unsplashAPI
    .getPhotos()
    .then(({ results, total_pages, total }) => {
      const markup = createGalleryCards(results);
      refs.photosList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      refs.photosList.innerHTML = '';
      refs.photosLoadMore.classList.add('is-hidden');
    });
};

refs.photosLoadMore.addEventListener('click', handleMoreClick);
