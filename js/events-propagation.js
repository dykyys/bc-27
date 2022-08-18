'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const textRef = document.querySelector('.text');
const divRef = document.querySelector('.div');
const section = document.querySelector('.section');

window.addEventListener(
  'click',
  event => {
    console.group('Listener on window ( 5 -сплиття, подія на window)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  }
  // { capture: true, once: true }
);

document.addEventListener('click', event => {
  console.group('Listener on document (4 - сплиття, подія на document)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

section.addEventListener(
  'click',
  event => {
    console.group('Listener on section (3 - сплиття, подія на секції)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
    // event.stopPropagation();
  }
  // { capture: true, once: true }
);

divRef.addEventListener(
  'click',
  event => {
    console.group('Listener on div (2 - сплиття, подія на div)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  }
  // { capture: true, once: true }
);

textRef.addEventListener('click', event => {
  console.group('Listener on p (1 -  сплиття, подія на абзаці)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});
