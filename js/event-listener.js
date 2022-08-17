'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

const changeBtnREf = document.querySelector('.js-swap-btn');
const imgRef = document.querySelector('.js-img');
const removeListnerBtn = document.querySelector('.js-remove-listener');

const changePhoto = function () {
  console.log('this', this);
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random photo';
};

const removeListner = () => {
  console.log('remove');
  changeBtnREf.removeEventListener('click', changePhoto);
};

changeBtnREf.addEventListener('click', changePhoto);

removeListnerBtn.addEventListener('click', removeListner);

// // https://picsum.photos/200/300
