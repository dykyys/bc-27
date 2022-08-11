'use strict';
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
?Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) => {
//   const onSale = cars.filter((car) => {
//     return car.onSale;
//   });

//   const models = onSale.map((car) => {
//     return car.model;
//   });
//   console.table(models);
// };

// const getAvailableCarNames = (cars) => {
//   return cars.filter(({ onSale }) => onSale).map(({ model }) => model);
// };

// const getAvailableCarNames = (cars) => {
//   return cars.reduce((acc, car) => {
//     console.log(acc);
//     if (car.onSale) {
//       // acc.push(car.model);
//       return [...acc, car.model];
//     }
//     return acc;
//   }, []);
// };

// const getAvailableCarNames = (cars) => {
//   return cars.reduce(
//     (acc, { model, onSale }) => (onSale ? [...acc, model] : acc),
//     []
//   );
// };

// const getAvailableCarNames = (cars) => {
//   return cars
//     .reduce((acc, { model, onSale }) => (onSale ? [...acc, model] : acc), [])
//     .sort((a, b) => b.localeCompare(a));
// };

// const models = getAvailableCarNames(cars);
// console.table(models);

/*
?Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale),
? відсортованих за зростанням ціни.
*/

// const getSortedCarsOnSale = (vehicles) => {
//   return vehicles
//     .filter(({ onSale }) => onSale)
//     .sort((a, b) => b.price - a.price)
//     .map(({ type }) => type)
//     .filter((elem, index, arr) => arr.indexOf(elem) === index);
// };

// console.table(getSortedCarsOnSale(cars));

/*
? Виконай рефакторинг makeDish так, щоб не потрібно було
? Щоразу передавати ім'я шефа.
? Напишіть функцію makeShef(shefName), яка повертає функцію
? makeDish(dish), що пам'ятає ім'я шефа під час її виклику
*/

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie');
// makeDish('Poly', 'muffins');

// const makeShef = (shefName) => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };

// const makeShef = function (shefName) {
//   /*
//    * Параметр shefName це локальна змінна для функції makeShef.
//    * Це означає, що вона буде доступна функції makeDish через
//    * замикання.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// // В змінній mango занходиться посилання на функцію, яка
// // повертається з функції makeShef

// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');

// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

// const foo = (...args) => { console.log(args);} foo(1,2,3)
// const numbers = [5,6,7] const newNumber = [...numbers]

// без архіва   =   архів
// архіва       =   без архіва
