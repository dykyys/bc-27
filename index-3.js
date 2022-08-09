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
/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//     for (let i = 0; i < phoneList.length; i += 1) {
//       console.log(i);
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// //   nameList.forEach((element, index) => {
// //     console.log(index);
// //     console.log(`${element}: ${phoneList[index]}`);
// //   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }

// //   args.forEach((el) => {
// //     total += el;
// //   });

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
