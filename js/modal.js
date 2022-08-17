'use strict';

const openModalBtnRef = document.querySelector('.js-modal-open');
const closeModalBtnRef = document.querySelector('.js-modal-close');
const backdropRef = document.querySelector('.js-backdrop');

const keyBoardPress = (event) => {
  if (event.code === 'Escape') {
    handleCloseModal();
  }
};

const handeOpenModal = () => {
  backdropRef.classList.add('is-open');
  document.addEventListener('keydown', keyBoardPress);
};

const handleCloseModal = () => {
  backdropRef.classList.remove('is-open');
  document.removeEventListener('keydown', keyBoardPress);
};

openModalBtnRef.addEventListener('click', handeOpenModal);
closeModalBtnRef.addEventListener('click', handleCloseModal);
