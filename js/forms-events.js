'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

// {
//     name: 'Mango'
//     email: 'mango@gmail.com'
//  }

const formSubmitRef = document.querySelector('.js-contact-form');
const inputNameRef = document.querySelector('.js-username-input');
const submitBtnRef = document.querySelector('.js-contact-form-submit');

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { name, email, accept },
  } = event.currentTarget;

  if (
    name.value.trim() === '' ||
    email.value.trim() === '' ||
    !accept.checked
  ) {
    console.log(' не всі поля заповнені');
    return;
  }

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
  };
  console.log(userData);
  //   const { name, accept } = event.currentTarget.elements;
};
formSubmitRef.addEventListener('submit', handleSubmit);

//DRY

const changeClasses = (addClass, removeClass, element) => {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
};

const validatioInputValue = (event) => {
  const requiredLength = Number(event.target.dataset.length);
  const inputValueLength = event.target.value.length;
  if (requiredLength === inputValueLength) {
    changeClasses('valid', 'invalid', event.target);
    // event.target.classList.add('valid');
    // event.target.classList.remove('invalid');
    // event.target.className = 'valid';
  } else {
    // event.target.className = 'invalid';
    changeClasses('invalid', 'valid', event.target);
    // event.target.classList.add('invalid');
    // event.target.classList.remove('valid');
  }
  //   console.log(event.target.dataset.length);
};

formSubmitRef.addEventListener('change', validatioInputValue);

/*
Перевірка input при вводі даних
const handleInput = (event) => {
  const {
    elements: { name, email, accept },
  } = event.currentTarget;
  if (name.value.trim() && email.value.trim() && accept.checked) {
    console.log('remove disabled');
    submitBtnRef.removeAttribute('disabled');
  }
};
formSubmitRef.addEventListener('input', handleInput);
*/
