import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import refs from './refs';
import UnsplashAPI from './UnsplashAPI';
import { createGalleryCards } from './createGalleryCard';

const unsplashAPI = new UnsplashAPI();

const options = {
  totalItems: 0,
  itemsPerPage: 5,
  visiblePages: 4,
  page: 1,
};

const pagination = new Pagination('tui-pagination-container', options);

const page = pagination.getCurrentPage();

unsplashAPI.getTrendPhotos(page).then(({ results, total }) => {
  pagination.reset(total);

  const markup = createGalleryCards(results);

  refs.photosList.insertAdjacentHTML('beforeend', markup);
  refs.paginationContainer.classList.remove('is-hidden');
});

async function trendPhotos(event) {
  const currentPage = event.page;

  try {
    const { results } = await unsplashAPI.getTrendPhotos(currentPage);

    const markup = createGalleryCards(results);

    refs.photosList.innerHTML = markup;
  } catch (error) {
    refs.paginationContainer.classList.add('is-hidden');
  }
}

pagination.on('afterMove', trendPhotos);

const handleSubmit = async event => {
  event.preventDefault();

  const { query } = event.target.elements;
  const searchQuery = query.value.trim();

  if (!searchQuery) {
    Notify.failure('Введіть дані для пошуку!');
    return;
  }

  refs.photosList.innerHTML = '';

  unsplashAPI.query = searchQuery;

  pagination.off('afterMove', trendPhotos);
  pagination.off('afterMove', handleMoreClick);

  pagination.on('afterMove', handleMoreClick);

  try {
    console.log('start');
    const { results, total } = await unsplashAPI.getPhotos(page);
    if (total === 0) {
      Notify.failure(`По запиту ${searchQuery} ми знайшли ${total} картинок`);
      refs.paginationContainer.classList.add('is-hidden');
      refs.photosList.innerHTML = '';
      return;
    }

    pagination.reset(total);

    const markup = createGalleryCards(results);

    refs.photosList.innerHTML = markup;
    refs.paginationContainer.classList.remove('is-hidden');
  } catch (error) {
    refs.paginationContainer.classList.add('is-hidden');
    refs.photosList.innerHTML = '';
  } finally {
    console.log('end');
  }
};

refs.photosForm.addEventListener('submit', handleSubmit);

async function handleMoreClick(event) {
  const currentPage = event.page;

  try {
    const { results } = await unsplashAPI.getPhotos(currentPage);

    const markup = createGalleryCards(results);

    refs.photosList.innerHTML = markup;
  } catch (error) {
    refs.photosList.innerHTML = '';
  }
}
