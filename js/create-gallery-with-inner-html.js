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

const galeeryRef = document.querySelector('#js-gallery');
// console.log(galeeryRef.innerHTML);

let listItems = pictures
  .map(
    ({ url, alt, height, width }) =>
      `<li><a href=""><img src="${url}" alt="${alt}" width="${width}" height="${height}"> </a></li>`
  )
  .join('');

const addBtn = document.querySelector('[data-action="add"]');
console.log(addBtn);

galeeryRef.innerHTML = listItems;

addBtn.addEventListener('click', () => {
  listItems += listItems;
  console.log(listItems);
  galeeryRef.innerHTML = listItems;
  galeeryRef.insertAdjacentHTML('beforeend', listItems);
});

// galeeryRef.innerHTML = '';

galeeryRef.style.display = 'flex';
galeeryRef.style.flexWrap = 'wrap';
galeeryRef.style.gap = '15px';
