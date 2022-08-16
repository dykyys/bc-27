'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listRef = document.querySelector('.js-gallery');

const liItem = document.createElement('li');
const linkREf = document.createElement('a');
const imgItem = document.createElement('img');
imgItem.src = 'https://picsum.photos/id/237/200/300';
imgItem.alt = 'photo';

linkREf.appendChild(imgItem);
liItem.appendChild(linkREf);
listRef.append(liItem);

const liItem2 = document.createElement('li');
const linkREf2 = document.createElement('a');
const imgItem2 = document.createElement('img');
imgItem2.src = 'https://picsum.photos/id/237/200/300';
imgItem2.alt = 'photo';

linkREf2.appendChild(imgItem2);
liItem2.appendChild(linkREf2);
listRef.append(liItem2);
