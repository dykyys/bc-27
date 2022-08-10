'use strict';
/*
 * Грязні і чисті функції
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * value;
//   }
// };
// dirtyMultiply(numbers, 5);

// console.log(numbers);

// const pushNumbers = (...args) => {
//   console.log(args);
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   return [...numbers, ...args];
// };

// const pushNumbers = (...args) => [...numbers, ...args];

// const changedNumbers = pushNumbers(9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', changedNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 2;
//   }
// };
// doubleMulti(numbers);
// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   console.log(arr);
//   const numbersCopyArr = [...arr];

//   for (let i = 0; i < numbersCopyArr.length; i += 1) {
//     numbersCopyArr[i] *= 2;
//   }

//   return numbersCopyArr;
// };

// const result = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', result);
