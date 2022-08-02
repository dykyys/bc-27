'use strict';
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 18;

// if (num > 18) {
//   console.log('Hi!');
// } else {
//   console.log('Good bye!');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';

// if (str.includes('t')) {
//   console.log('Yes!');
// } else {
//   console.log('No!');
// }

// const message = str.includes('d') ? 'Yes' : 'NO!';
// console.log(message);

/*
? Запросити у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Неправильно'.
*/

// const userInput = Number(prompt('Введіть число'));

// if (userInput === 10) {
//   alert('Вірно');
// } else {
//   alert('Непрвильно');
// }

// const message = typeof userInput === 'number' ? 'Вірно' : 'Невірно';
// alert(message);

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/

// const min = 21;

// if (min >= 0 && min < 15) {
//   console.log('перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('Вийшли за діапазон години!');
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

// const userInput = prompt('Яка «офіційна» назва JavaScript?');
// const normalizeUserInput = userInput.toLowerCase().trim();

// if (userInput === 'ECMAScript') {
//   console.log('Вірно!');
// } else {
//     console.log('Не знаєте? ECMAScript!');
// }

// const NAME_JAVA_SCRIPT = 'ECMAScript'.toLowerCase();

// const message =
//   normalizeUserInput === NAME_JAVA_SCRIPT ? 'Вірно!' : 'Не знаєте? ECMAScript!';

// console.log(message);

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

// const userInput = Number(prompt('Введіть число!'));

// if (userInput > 0) {
//   console.log(1);
// } else if (userInput < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? Перевірте за допомогою об'єкта navigator та властивості userAgent
? який браузер у користувача, результат вивести в консоль
*/

// const userBrouser = navigator.userAgent;
// console.log(userBrouser);
// if (userBrouser.includes('Mozilla')) {
//   console.log('Браузер Mozilla');
// } else if (userBrouser.includes('Chrome')) {
//   console.log('Браузер Chrome');
// } else if (userBrouser.includes('IE')) {
//   console.log('Браузер IE');
// } else {
//   console.log('Вашого браузера в нашому скиску немає');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

/*
? Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = 9;

// switch (number) {
//   case 1:
//     console.log('Змінна number має значення 1');
//     break;
//   case 2:
//     console.log('Змінна number має значення 2');
//     break;
//   case 3:
//     console.log('Змінна number має значення 3');
//     break;
//   case 4:
//     console.log('Змінна number має значення 4');
//     break;
//   default:
//     console.log('більше 4');
//     break;
// }

// const userBrouser = 'Mozilla';

// switch (userBrouser) {
//   //userBrouser === 'Chrome'
//   case 'Chrome':
//     console.log('Браузер Chrome');
//     break;
//   //userBrouser === 'Mozilla'
//   case 'Mozilla':
//     console.log('Браузер Mozilla');
//     break;
//   case 'IE':
//     console.log('Браузер IE');
//     break;
//   default:
//     console.log('Вашого браузера в нашому скиску немає');
//     break;
// }

// const min = 27;

// const inTime = true;

// switch (inTime) {
//   case min >= 0 && min < 15:
//     console.log('перша чверть години');
//     break;
//   case min >= 15 && min < 30:
//     console.log('друга чверть години');
//     break;
//   case min >= 30 && min < 45:
//     console.log('третя чверть години');
//     break;
//   case min >= 45 && min < 60:
//     console.log('четверта чверть години');
//     break;
//   default:
//     console.log('Вийшли за діапазон години!');
// }

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
 * Тернарний оператор
 */

//<умова>? <вираз_якщо_умова_істинна> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 3;
// let message = "";

// const message = a + b < 4 ? "Мало" : "Багато";

// if (a + b < 4) {
//   message = "Мало";
// } else {
//   message = "Багато";
// }

// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Директор';
// let message =
//   login === "Співробітник"
//     ? "Привіт"
//     : login === "Директор"
//     ? "Здравствуйте"
//     : login === null
//     ? "Немає логіна"
//     : "Ми вас не знаєм";

// let message = login === 'Співробітник' ? 'Привіт' : 'Ви не співробітник';
// console.log(message);
// const login = prompt('Введіть логін!');

// let message = "Ми вас не знаєм!!!";

// if (login === "Співробітник") {
//   message = "Привіт";
// } else if (login === "Директор") {
//   message = "Здравствуйте";
// } else if (login === null) {
//   message = "Немає логіна";
// }

// console.log(message);
