'use strict';
//* Атрибути як властивості об'єкту

// const titleRef = document.querySelector('[data-title]');
// titleRef.textContent = 'New title';
// titleRef.style.fontSize = '45px';
// titleRef.style.color = 'tomato';
// titleRef.style.display = 'flex';
// console.log(titleRef.textContent);

// const imgRef = document.querySelector('[title]');

// const swapBtnRef = document.querySelector("[data-swap='false']");

// swapBtnRef.addEventListener('click', () => {
//   imgRef.src = 'https://picsum.photos/200/300';
//   imgRef.alt = 'random pfoto';
//   swapBtnRef.style.background = 'fuchsia';
// });

// https://picsum.photos/200/300

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

// const imgRef = document.querySelector('[title="image"]');

// // console.log(imgRef.hasAttribute('data-source'));
// // console.log(imgRef.getAttribute('src'));
// const swapBtnRef = document.querySelector("[data-swap='false']");

// swapBtnRef.addEventListener('click', () => {

//   imgRef.src = 'https://picsum.photos/200/300';
//   // imgRef.setAttribute('src', 'https://picsum.photos/200/300');
//   // imgRef.removeAttribute('src');

//   imgRef.alt = 'random pfoto';

//   //   swapBtnRef.disabled = true;
//   // swapBtnRef.setAttribute('disabled', true);
// });

// console.log(imgRef.attributes);

/*
data-atributes
 */

const saveBtn = document.querySelector('button[data-action="save"]');
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(saveBtn);
console.log(closeBtn);

// const saveBtnRef = document.querySelector('button[data-action="save"]');
// const closeBtnRef = document.querySelector('button[data-action="close"]');
// console.log(saveBtnRef.dataset.action);
// saveBtnRef.setAttribute('disabled', true);
// saveBtnRef.removeAttribute('disabled');
// console.log(saveBtnRef.getAttribute('data-action'));
closeBtn.addEventListener('click', () => {
  //   saveBtn.removeAttribute('disabled');🤠
  //   saveBtn.disabled = false;'🤠
  //   saveBtn.setAttribute('disabled', false); //💩
  //   saveBtn.setAttribute('disabled', true);
  //   saveBtn.disabled = true;
});
