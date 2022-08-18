'use strict';

// const user = {};

// if (user.location) {
//   if (user.location.lat) {
//    console.log(user.location.lat);
//  }
// }
// console.log(user?.location?.lat);

const palletItemsRef = document.querySelectorAll('.pallet__item');
const palletListRef = document.querySelector('.js-pallet');

palletItemsRef.forEach(item => {
  const randomColor = getRangomColor();
  item.style.backgroundColor = randomColor;
  // item.setAttribute('data-color', randomColor);
  item.dataset.color = randomColor;
});

const palleteHandleClick = ({ target }) => {
  if (target.nodeName === 'UL') {
    return;
  }

  const isActive = palletListRef.querySelector('.active');

  if (isActive?.firstElementChild === target || isActive === target) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
    return;
  }

  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }

  if (target.nodeName === 'SPAN') {
    target.parentNode.classList.add('active');
    target.textContent = target.parentNode.dataset.color;
    return;
  }

  target.classList.toggle('active');
  target.firstElementChild.textContent = target.dataset.color;
};
palletListRef.addEventListener('click', palleteHandleClick);

// const palletHandleClick = ({ target }) => {
//   const isActive = document.querySelector('.active');

//   // 3
//   if (target.nodeName === 'LI' && isActive === target) {
//     target.classList.remove('active');
//     target.firstElementChild.textContent = '...';
//     return;
//   }

//   // 4
//   if (target.nodeName === 'SPAN' && target.parentNode === isActive) {
//     target.parentNode.classList.remove('active');
//     target.textContent = '...';
//     return;
//   }

//   if (isActive) {
//     isActive.classList.remove('active');
//     isActive.firstElementChild.textContent = '...';
//   }

//   // 1
//   if (target.nodeName === 'LI') {
//     target.classList.add('active');
//     target.firstElementChild.textContent = target.dataset.color;
//     return;
//   }

//   // 2
//   if (target.nodeName === 'SPAN') {
//     target.parentNode.classList.add('active');
//     target.textContent = target.parentNode.dataset.color;
//   }
// };

// palletListRef.addEventListener('click', palletHandleClick);

// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
