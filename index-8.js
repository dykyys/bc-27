// let a;
// const b = 2;

// a ??= b;

// if (a === null || a === undefined) {
//   a = b;
// }
// console.log('a', a);

/* ============== Метод map() ============== */

// const ownMap = function (array, callback) {
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i], i, array));
//   }

//   return newArr;
// };

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, (planet) => planet.toUpperCase());

// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = ownMap(planets, (planet) => planet.toLowerCase());

// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// const planetsLength = ownMap(planets, (planet) => planet.length);
// console.log(planetsLength);

/* ============== Метод filter() ============== */

// const values = [51, -3, 27, 100500, 21, 68, -42, -37, 100001];
// // const positiveValues = values.filter((value) => value >= 0);
// // console.log(positiveValues); // [51, 27, 21, 42]

// const ownFilter = function (array, callback) {
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       newArr.push(array[i]);
//     }
//   }

//   return newArr;
// };

// const positiveValues = ownFilter(values, (value) => value > 0);
// console.log(positiveValues);

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }
//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const findEl = colorPickerOptions.find(({ label }) => label === 'pink');

// const ownFind = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
//   return undefined;
// };
// const findEl = ownFind(
//   colorPickerOptions,
//   ({ label }) => label === 'gredsfgen'
// );
// console.log(findEl);

/* ============== Метод findIndex() ============== */

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const ownFind = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return i;
//     }
//   }
//   return -1;
// };
// const index = ownFind(colorPickerOptions, ({ label }) => label === 'pifgsdfnk');

// console.log(index);

/* ============== Метод every() ============== */

// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 10 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук
// console.log(fruits.every((fruit) => fruit.amount > 0));

// const ownEvery = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i], i, array)) {
//       return false;
//     }
//   }
//   return true;
// };

// const allAvailable = ownEvery(fruits, ({ amount }) => amount > 0);

// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     //   console.log(callback(arr[i], i, arr));
//     if (callback(arr[i], i, arr)) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 10 },
//   { name: 'grapes', amount: 50 },
// ];

// //  some поверне true якщо хоча б одного фрукта буде більше ///// ніж 0 штук

// const ownSome = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       return true;
//     }
//   }
//   return false;
// };

// const anyAvailable = ownSome(fruits, ({ amount }) => amount === 0);

// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
// const ownReduce = function (arr, callback, initialValue = arr[0]) {
//   for (let i = 0; i < arr.length; i++) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }
//   return initialValue;
// };

const students = [
  { name: 'Манго', score: 80 },
  { name: 'Поли', score: 50 },
  { name: 'Аякс', score: 30 },
  { name: 'Киви', score: 90 },
  { name: 'Хьюстон', score: 60 },
];

// const totalScore = students.reduce((acc, elem) => {
//   return acc + elem.score;
// }, 0);
// console.log(totalScore);

students.reduce(() => {}, 0);

const ownReduce = function (array, callback, initialValue = array[0]) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i], i, array);
  }

  return initialValue;
};
// const totalScore = ownReduce(
//   students,
//   (acc, elem, index, arr) => {
//     console.log('acc', acc);
//     console.log('elem', elem);
//     console.log('index', index);
//     console.log(arr);
//     console.log('--------------');
//     return acc + elem.score;
//   },
//   0
// );

// const names = ownReduce(
//   students,
//   (acc, elem, index, arr) => {
//     acc.push(elem.name);
//     return acc;
//   },
//   []
// );

const names = ownReduce(students, (acc, { name }) => [...acc, name], []);

console.log('names', names);
