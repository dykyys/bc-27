'use strict';
/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName присвоє змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
// */

// const { firstName, age: userAge, isAdmin = false } = user;

// console.log('firstName: ', firstName);
// console.log('userAge: ', userAge);
// console.log('isAdmin: ', isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */

// const defaultImg =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

// const team = {
//   number: 4,
//   //   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     location: { lat: 15, lon: 20 },
//     original: 'uk',
//     secondary: 'pl',
//   },
// };

// const {
//   number,
//   flag: counriFlag = defaultImg,
//   employees,
//   langs: { original: originLang, secondary: secondLang },
// } = team;

// console.log(counriFlag);

/*
 * Деструктуризація масивів
 */

const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, , , user4] = names;
// console.log(user1);

// console.log(user4);

// const user = {
//   name: 'mango',
//   age: 21,
//   lastName: 'Todd',
// };

// const entry = Object.entries(user);

// for (const [key, value] of entry) {
//   console.log(key);
//   console.log(value);
//   console.log('----------');
// }

// const rgb = [250, 45, 24];

// const [red = 0, green = 0, blue = 0] = rgb;

// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 2500,
// };

// // console.log(Object.entries(salaries));

// // [
// //   ['John', 100],
// //   ['Pete', 300],
// //   ['Mary', 2500]
// // ]

// const topSalary = function (salaries) {
//   const salariesArr = Object.entries(salaries);

//   let maxSalary = salariesArr[0][1];
//   let employName = salariesArr[0][0];

//   for (const [name, salary] of salariesArr) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       employName = name;
//     }
//   }
//   console.log(employName);
// };

// topSalary(salaries);
