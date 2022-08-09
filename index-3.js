/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (element, index, array) {
//   console.log('element', element);
//   console.log('index', index);
// });

// numbers.forEach((element, index, array) => {
//   console.log('element', element);
//   console.log('index', index);
//   console.log(array);
// });

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// };

// ownForEach(numbers, (element, index, array) => {
//   console.log('element', element);
//   console.log('index', index);
//   console.log('array', array);
// });

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// const getTotal = function (numbersArr) {
//   let total = 0;
//   //   // Через звичайний for
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }

//   // Через звичайний for...of
//   // for (const num of numbersArr) {
//   //   total += num;
//   // }

//   //   // Через forEach();
//   numbersArr.forEach((number) => (total += number));

//   //   numbersArr.forEach((el) => {
//   //     total += el;
//   //   });

//   return total;
// };

// console.log(getTotal(numbers));

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function logItems(items) {
//   console.log(items);

//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }

//   items.forEach((element, index) => console.log(`${index + 1} - ${element}`));
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [5, 6, 3];

const newArr = [];

numbers.forEach((num) => {
  if (numbers2.includes(num)) {
    newArr.push(num);
  }
});

console.log(newArr);
