export function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => /*html*/ `<li class="gallery__item">
    <img height="280px" src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`
    )
    .join('');
}
