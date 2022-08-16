'use strict';
//* Об'єкт style, cssText

const btnRef = document.querySelector('.js-modal-btn');

// btnRef.className = 'btn-active';
// btnRef.classList.add('btn-active');
// btnRef.classList.remove('modal-btn');
// btnRef.setAttribute('class', 'btn-active');
// btnRef.style.backgroundColor = 'blue';
// btnRef.style.fontSize = '25px';
// btnRef.style.color = 'red';
// btnRef.removeAttribute('style');
// btnRef.classList.replace('modal-btn', 'new-modal-btn');

//* Методи об'єкту classList (add, remove, toggle, contains)

// const backdropEl = document.querySelector('.js-backdrop');
// const modalBtnEl = document.querySelector('.js-modal-btn');

// const modalRef = document.querySelector('.js-backdrop');

const btnList = document.querySelectorAll('button[data-modal]');

btnList.forEach(btn =>
  btn.addEventListener('click', () => {
    const number = btn.dataset.modal;

    const modalRef = document.querySelector(`div[data-modal='${number}']`);

    btn.classList.toggle('btn-active');
    modalRef.classList.toggle('is-backdrop-open');
  })
);
