'use strict';
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(i);
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log(client);
// }

// const fruits = ['🍎', '🍑', '🍇', '🍑', '🍌', '🍋', '🍑'];

// for (const fruit of fruits) {
//   console.log(fruit);
//   if (fruit === '🍑') {
//     break;
//   }
// }

// for (const fruit of fruits) {
//   if (fruit === '🍑') {
//     continue;
//   }
//   console.log(fruit);
// }

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// // genres[2] = "rock'n'roll";💩

// genres.push("rock'n'roll");

// console.log(genres.shift());

// genres.unshift('Country', 'Reggy');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.table(genres);

/*
 * Передача за посиланням та за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a); // 10
// console.log('b: ', b); // 10

// a = 20;

// console.log(a === b);
// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]

/*
 * Перебір масиву циклами for и for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   //   console.log(i + 1 + ' : ' + fruits[i]);
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -50, 23, 37];

// let min = numbers[0];

// 1 Варіант розв'язання
// for (const number of numbers) {
//   if (min > number) {
//     min = number;
//   }
// }

// console.log(min);

// 2 Варіант розв'язання
// for (let i = 0; i < numbers.length; i += 1) {
//   //   console.log(numbers[i]);
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

// const genres = ['Jazz', 'Blues', "rock'n'roll", 'Country', 'Reggy'];

// let longestWord = genres[0];

// for (const genre of genres) {
//   if (genre.length > longestWord.length) {
//     longestWord = genre;
//   }
// }

// console.log(longestWord);

/*
? У нас є масив із зарплатами працівників,
? потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// // // 1 Варіант розв'язання
// for (const salari of salaries) {
//   //   total = total + salari;
//   total += salari;
// }
// console.log(total);

// 2 Варіант розв'язання
// for (let i = 0; i < salaries.length; i += 1) {
//   // console.log(salaries[i]);
//     total = total + salaries[i];

//   total += salaries[i];
// }

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 15000, 40000];

// 1 Варіант розв'язання
// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

// 2 Варіант розв'язання
// const salaries = [].concat(developersSalaries, managerSalaries);

// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// 3 Варіант розв'язання
// const salaries = [];

// for (const salary of managerSalaries) {
//   salaries.push(salary);
// }

// for (const salary of developersSalaries) {
//   salaries.push(salary);
// }

// console.log(salaries);

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінних значеннях у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const sidesArr = values.split(' ');

// const area = Number(sidesArr[0]) * Number(sidesArr[1]);

// console.log(area);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(', ');
// const phonesArr = phones.split(',');

// for (let i = 0; i < phonesArr.length; i += 1) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// 1 Варіант розв'язання
// const string = 'Welcome to the future!';

// const strToArr = string.split('');
// const reverseStrToArr = strToArr.reverse();
// const reverseStr = reverseStrToArr.join('');

// const reverseStr = string.split('').reverse().join('');

// console.log(reverseStr);

// 2 Варіант розв'язання
// const string = 'Welcome to the future!';
// let reverseString = '';

// for (let i = 0; i < string.length; i+=1) {
//   reverseString += string[string.length - 1 - i];
// }

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseString += string[i];
// }

// console.log(reverseString);

// 3 Варіант розв'язання
// const string = 'Welcome to the future!';

// const reverseArr = [];

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(string[i]);
// }

// const reverseStr = reverseArr.join('');

// console.log(reverseStr);

/* Потрібно розвернути масив у зворотньому напрямку
 не використовуючи методів масива і не створюючи нові масиви
 */
// const array = [7, 7, 7, 3, 5, 5, 5];
// console.log(array.reverse());

// for (let i = 0; i < array.length / 2; i++) {
//   // console.log(array[i]);
//   // console.log(array[array.length - 1 - i]);
//   let temp = array[i];
//   array[i] = array[array.length - 1 - i];
//   array[array.length - 1 - i] = temp;
// }

// console.log(array);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Watkins', 'Ray'];
// const filteredEmployees = [];
// // console.log(employees.indexOf("Dennis"));
// // //'Dennis' index -> 0 === indexOf -> 0   true
// // //'Dennis' index -> 1 === indexOf -> 0   false
// // //'Shaw'   index -> 2 === indexOf -> 2   true
// // //'Watkins'index -> 3 === indexOf -> 3   true
// // //'Watkins'index -> 4 === indexOf -> 3   false
// // // 'Ray'   index -> 5 === indexOf -> 5   true

// for (let i = 0; i < employees.length; i += 1) {
//   const epmloyeer = employees[i];
//   console.log('i', i);
//   console.log('indexOf', employees.indexOf(epmloyeer));
//   console.log('employees[i]', epmloyeer);
//   console.log('--------------------');
//   if (i === employees.indexOf(epmloyeer)) {
//     filteredEmployees.push(epmloyeer);
//   }
// }

// console.log(filteredEmployees);
// //? Співробітник Shaw звільнився, видаліть його з масиву

// const index = employees.indexOf('Shaw');
// employees.splice(index, 1);

// //? Додати нового співробітника Thornton, перед Watkins;

// const indexOfTargetName = employees.indexOf('Watkins');
// console.log(indexOfTargetName);

// employees.splice(indexOfTargetName, 0, 'Thornton');
// console.log(employees);

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// // const copyFruits = fruits.slice(0, 3);
// // const copyFruits = fruits.slice(3);
// const copyFruits = fruits.slice(-4, -1);
// console.log(copyFruits);
// console.log(fruits);

/*Потрібно перевітири чи є речення палінром*/

// const str = 'Я несу гусеня';
//янесугусеня
// const str = 'Де помити мопед';
const str = 'І була пані на палубІ';

// const strUpdate = str.toLowerCase();
// const strUpdateWithoutSpase = strUpdate.replaceAll(' ', '');
// // console.log(strUpdateWithoutSpase);
// const strUpdateWithoutSpaseToArray = strUpdateWithoutSpase.split('');

// console.log(strUpdateWithoutSpase);

// const strUpdateWithoutSpaseToArrayReverse =
//   strUpdateWithoutSpaseToArray.reverse();
// const strUpdateWithoutSpaseToArrayReverseToString =
//   strUpdateWithoutSpaseToArrayReverse.join('');

// console.log(strUpdateWithoutSpaseToArrayReverseToString);

// console.log(
//   strUpdateWithoutSpaseToArrayReverseToString === strUpdateWithoutSpase
// );
// console.log(strUpdateWithoutSpaseToArrayReverseToString);

// 💩const strUpdate = str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');//💩

// const strUpdate = str.toLowerCase().replaceAll(' ', '');
// console.log(strUpdate);
// const strReversed = strUpdate.split('').reverse().join('');
// console.log(strReversed);
// console.log(strUpdate === strReversed);
