'use strict';
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function фм'я_функції(праметр_1, параметр_2...) {
// Тіло функції
// }

// const showMessage = function (userName = 'Some user') {
//   return `Hello ${userName}!`;
// };

// // console.log(showMessage());
// console.log(showMessage('Josie Pierce'));
// showMessage('Vera Knight');
// showMessage('Alan Lamb');

// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers2 = [6, 7, 8, 9];

// function foo(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 3;
//   }
// }

// foo(numbers2);
// console.log(numbers2);
// console.log(numbers);

// function consoleMessage(message = 'Some text', start = 0, end = 5) {
//   for (let i = start; i < end; i += 1) {
//     console.log(i + ' - ' + message);
//   }
// }
// // consoleMessage('Hello', 5, 9);
// consoleMessage('Hello', 3, 15);

// function addNumbers(a, b) {
//   // const total = a + b;
//   // return total;
//   return a + b;
// }

// const sum1 = addNumbers(2, 5);
// console.log(sum1);
// const sum2 = addNumbers(3, 6);
// console.log(sum2);

// function add(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Вхідні дані передали не вірно!';
//   }
//   // const total = a + b;
//   // if (total >= 100) {
//   //   return total;
//   // }
//   // return 'Результат  менше 100';
//   const total = a + b;
//   return total >= 100 ? total : 'Результат  менше 100';
// }

// console.log(add(2, '600'));

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
*/

// function calcAverage() {
//   let count = 0;
//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== 'number') {
//       continue;
//     }
//     count += 1;
//     total += arguments[i];

//     // if (typeof arguments[i] === 'number') {
//     //   total += arguments[i];
//     //   count += 1;
//     // }

//     // total += arguments[i] / arguments.length;
//   }
//   console.log(total / count);
//   // console.log(total / arguments.length);
// }
// calcAverage(2, 'e', 3, 'd', 5, 6, 'g', 'd', 69, 65);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини (зросту).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {
//   let normalizeWeight = Number.parseFloat(weight.replace(',', '.'));
//   let normalizeHeight = Number.parseFloat(height.replace(',', '.'));
//   // const BMI = normalizeWeight / Math.pow(normalizeHeight, 2);
//   const BMI = normalizeWeight / normalizeHeight ** 2;
//   return BMI.toFixed(1);
// }
// const mangoBIM = calcBMI('88,3sm', '1.75');
// console.log(mangoBIM);

// const pollyBMI = calcBMI('80,3', '1,95');
// console.log(pollyBMI);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
? Добав перевірку, що параметри це числа
*/

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return ' Однин із параметрів не число!';
//   }
//   // if (a < b) {
//   //   return a;
//   // } else {
//   //   return b;
//   // }

//   // if (a < b) {
//   //   return a;
//   // }

//   // return b;

//   return a < b ? a : b;

//   // return Math.min(a, b);
// }

// console.log(min(9, 3));

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const dimensionsToArray = dimensions.split(" ");
//   return Number(dimensionsToArray[0]) * Number(dimensionsToArray[1]);
// }

// function getRectArea(dimensions) {
//   const dimensionsToArr = dimensions.split(' ');
//   return Number(dimensionsToArr[0]) * Number(dimensionsToArr[1]);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
? який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// const logItems = function (items = []) {
//   for (let i = 0; i < items.length; i += 1) {
//     const element = items[i];
//     console.log(`${i + 1} - ${element}`);
//   }
// };

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} : ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// logItems();

// function logItems(...args) {
//   // const array = Array.from(arguments);
//   console.log(args);
//   for (let i = 0; i < args.length; i++) {
//     const element = args[i];
//     console.log(element);
//   }
// }
// logItems('🍎', '🍇', '🍑', '🍌', '🍋', '🍑', '🍌', '🍋');

/*Стек */

// function task1() {
//   console.log('2 - before task 2');
//   task2();
//   console.log('7 - after task 2');
//   console.log('8 - Completed task 1');
// }
// function task2() {
//   console.log('3 - before task 3');
//   task3();
//   console.log('5 - after task 3');
//   console.log('6 - Completed task 2');
// }

// function task3() {
//   console.log('4 - Completed task 3');
// }

// console.log('1 - before task 1');
// task1();
// console.log('9 - after task 1');

// function foo() {
//   console.log('foo - start');
//   console.log('foo - 1');
//   baz();
//   console.log('Code back 202');
//   bar();
//   console.log('Code back 204');
//   console.log('foo- end');
// }
// function baz() {
//   console.log('baz - start');
//   console.log('baz - 2');
//   console.log('baz - end');
// }
// function bar() {
//   // foo();
//   console.log('bar - start');
//   console.log('bar-3');
//   console.log('bar - end');
// }

// foo();

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${i + 1} : ${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers1, numbers2) {
//   const allarays = numbers1.concat(numbers2);
//   let largestNumber = allarays[0];
//   for (const number of allarays) {
//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([25555, 17, 94, 1, 23, 37], [49, 4, 7, 83, 12])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     // if (number > largestNumber) {
//     //   largestNumber = number;
//     // }
//     // if (number < largestNumber) {
//     //   continue;
//     // }
//     // largestNumber = number;
//     largestNumber = number > largestNumber ? number : largestNumber;
//   }
//   return largestNumber;
// }

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   const isIncludes = courses.includes(course);
//   if (isIncludes) {
//     console.log(`${course} вже є в списку!`);
//     return;
//   }
//   courses.push(course);
// }

// function removeCourse(name) {
//   const indexOfcourse = courses.indexOf(name);
//   if (indexOfcourse === -1) {
//     console.log(`${name} такога курса в списку немає, видалити неможливо!`);
//     return;
//   }
//   courses.splice(indexOfcourse, 1);
// }
// function updateCourse(oldName, newName) {
//   const indexOfcourse = courses.indexOf(oldName);
//   if (indexOfcourse === -1) {
//     console.log(`${oldName} такога курса в списку немає, замінити неможливо!`);
//     return;
//   }
//   courses.splice(indexOfcourse, 1, newName);
// }

// addCourse("Express");
// addCourse("React");
// removeCourse("CSS");
// removeCourse("Linux");
// updateCourse("HTML", "Vue");
// updateCourse("Linux", "Windows");
// console.table(courses);
