'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = numbers.slice();

// const numbers2 = [...numbers];
// console.log(numbers2);

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const allNumbers = numbers.concat(numbers2);

// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//* Розпилення масиву у функцію
const numbers = [1, 2, 3, 4, 5];

// console.log({ ...numbers });
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, змінився і сам об'єкт

// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);
// cat.name = 'Kiwi';
// cat.age = 3;
// console.log(cat);

//https://lodash.com/docs/4.17.15#cloneDeep

// const newCat = _.cloneDeep(cat);
// const newCat = Object.assign(cat);
// const newCat = { ...cat };
// console.log(newCat);
// console.log(cat);
// console.log(newCat2);

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);

// user2.firstName = 'Birdie';
// console.log('---------------------');
// console.log('user: ', user);
// console.log('user2: ', user2);

//* Розпилення складних типів

//При розпиленні виокнується опверхневе копіювання.
//Якщо є складні типи даних, записується на них посилання
//*********** */
//При _.cloneDeep виконується глибоке копіювання
//Якщо є складні типи даних, вони також копіюються в нові,
//такі самі

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
//   location: { lat: 15, lon: 20 },
// };

// const user2 = _.cloneDeep(user);
// const user2 = { ...user };
// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);
// user2.someArr.push(10);
// user2.location.lat = 30;
// user2.lastName = 30;

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка додає довільну кількість аргументів які більше вказаного числа, вказане число передається першим аргументом

const sum = function (num, num2, num3, ...args) {
  let total = 0;
  for (const number of args) {
    if (number < num) {
      continue;
    }
    total += number;
  }
  return total;
};

const totalArgs = sum(20, 3, 5, 7, 8, 9, 23, 56, 7, 342, 647);

console.log(totalArgs);
