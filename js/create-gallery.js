'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListRef = document.querySelector('.js-gallery');

const itemsList = pictures.map(({ url, alt, height, width }) => {
  const liItem = document.createElement('li');
  const linkRef = document.createElement('a');
  const imgItem = document.createElement('img');
  imgItem.src = url;
  imgItem.alt = alt;
  imgItem.style.width = width;
  imgItem.style.height = height;
  linkRef.append(imgItem);
  liItem.append(linkRef);
  return liItem;
});
galleryListRef.append(...itemsList);
