import UnsplashAPI from './UnsplashAPI';
import { createGalleryCards } from './createGalleryCard';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const targetEl = document.querySelector('.target-element');

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observe) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting && entry.intersectionRect.bottom > 300) {
      unsplashApi.incrementPage();

      try {
        const photosResponse = await unsplashApi.getPhotos();

        if (unsplashApi.page === photosResponse.total_pages) {
          observer.unobserve(targetEl);
          return;
        }

        galleryListEl.insertAdjacentHTML(
          'beforeend',
          createGalleryCards(photosResponse.results)
        );
      } catch (err) {
        console.log(err);
      }
    }
  });
}, options);

const unsplashApi = new UnsplashAPI();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value;
  unsplashApi.query = searchQuery;

  unsplashApi.resetPage();

  try {
    const { results } = await unsplashApi.getPhotos();

    const markup = createGalleryCards(results);

    galleryListEl.innerHTML = markup;

    observer.observe(targetEl);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
