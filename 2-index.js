'use strict';
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

// const num = 3;
// const num2 = 2;

// console.log(num + num2);

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

// const a = 2;
// const b = 3;

// const pow = a ** b;
// const total = a + b;
// console.log(total);

//? Перевірте чи парні числа 15, 20, 45, 30.

// const isEven = 30 % 2 === 0;

// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

//01:30

// const totalMinutes = 62;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// hours = String(hours).padStart(2, 0);

// let minutes = totalMinutes % 60;
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

/*
 * Number.parseInt() Number.parseFloat()
 */
// const num = Number(prompt('Введіть перше число'));
// const num2 = Number(prompt('Введіть друге число'));
// console.log(num);
// console.log(num2);

// const total = num + num2;
// console.log(total);

// let number = '102.12fsadf';
// console.log(Number.parseFloat(number));

// console.log(Number.isNaN(15));

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const userInput = Number(prompt('Введіть число!'));

// console.log(userInput);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.

// const number = Number.parseInt('24px');
// console.log(number);

// const number = Number.parseFloat('24.5px');
// console.log(number);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.

// const number = Number.parseFloat('25.5%');
// console.log(number);

//? Спробуйте привести до числа рядок 'abc'.

// const number = Number('abc');
// console.log(number);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */
// console.log(Math.floor(3.9)); //3
// console.log(Math.ceil(3.01)); //4
// console.log(Math.round(3.41));
// console.log((12345.6859).toFixed(1));
// console.log(Math.max(20, 10, 50, 40)); // 50
// console.log(Math.min(20, 10, -8, 50, 40, 94, -4)); // -4
// console.log(Math.pow(2, 3));
// console.log(2 ** 4);
// console.log(Math.random());
// console.log(Math.round(Math.random() * (100 - 1) + 1));
/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

// console.log(Math.ceil(23.1));

/*
  ? Попросіть користувача ввести число та ступінь.
  ?Зведіть число до ступеня і виведіть результат у консоль.
*/

// const number = Number(prompt('Ваше число'));
// const pow = Number(prompt('Введіть ступінь'));

// console.log(Math.pow(number, pow));
// console.log(number ** pow);

/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const min = 10;
// const max = 50;

// console.log(Math.floor(min + Math.random() * (max + 1 - min)));

// console.log(randomNumber);
//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = 50;
// const max = 100;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
