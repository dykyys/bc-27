'use strict';
// Функціональний підхід

const menuRef = document.querySelector('.js-menu');
const menuRef2 = document.querySelector('.js-second-menu');

const handleBtnClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const { action } = target.dataset;

  // if (action === 'load') {
  //   console.log('loading...');
  // } else if (action === 'save') {
  //   console.log('saving..');
  // } else if (action === 'search') {
  //   console.log('searching...');
  // }

  switch (action) {
    case 'load':
      load();
      break;
    case 'save':
      save();
      break;
    case 'search':
      search();
      break;

    default:
      console.log('oops!');
      break;
  }
};
menuRef.addEventListener('click', handleBtnClick);
menuRef2.addEventListener('click', handleBtnClick);

const load = () => {
  console.log('loading...');
};

const save = () => {
  console.log('saving...');
};

const search = () => {
  console.log('searching...');
};

// ООП підхід
// class Menu {
//   #rootSelector;
//   constructor(cssSelector) {
//     this.#rootSelector = document.querySelector(cssSelector);
//     this.#rootSelector.addEventListener('click', this.handleBtnClick);
//   }

//   handleBtnClick({ target }) {
//     if (target.nodeName !== 'BUTTON') {
//       return;
//     }
//     const { action } = target.dataset;

//     switch (action) {
//       case 'load':
//         load();
//         break;
//       case 'save':
//         save();
//         break;
//       case 'search':
//         search();
//         break;

//       default:
//         console.log('oops!');
//         break;
//     }
//   }
// }
// const menu1 = new Menu('.js-menu');
// const menu2 = new Menu('.js-second-menu');

// class Menu {
//   constructor(rootSelector) {
//     rootSelector.addEventListener('click', this.onBtnClick.bind(this));
//   }

//   onBtnClick({ target }) {
//     if (target.nodeName !== 'BUTTON') {
//       return;
//     }
//     const { action } = target.dataset;
//     switch (action) {
//       case 'save':
//         this.save();
//         break;
//       case 'load':
//         this.load();
//         break;
//       case 'search':
//         this.search();
//         break;

//       default:
//         break;
//     }
//   }
//   save() {
//     console.log('savin...');
//   }
//   load() {
//     console.log('loadin...');
//   }
//   search() {
//     console.log('searching...');
//   }
// }

// new Menu(document.querySelector('.js-menu'));
// new Menu(document.querySelector('.js-second-menu'));
