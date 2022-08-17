'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

const keyBoardPress = (event) => {
  console.log('key', event.key);
  console.log('code', event.code);
  console.log('keyCode', event.keyCode);
  if (event.keyCode === 27) {
    alert('ESC');
  }
  if (event.code === 'KeyJ') {
    alert('KeyJ');
  }
};

document.addEventListener('keydown', keyBoardPress);
document.addEventListener('keyup', (event) => {
  console.log('key', event.key);
});
