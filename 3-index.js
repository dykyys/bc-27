'use strict';
//https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter
// const guestName = "Манго!";
// console.log(guestName[5]);
/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const userName = prompt('Your name?');
// const userAge = prompt('Your age?');

// const message = 'Hello' + ' ' + userName + ' ' + 'your age is' + ' ' + userAge;
// const message = `Hello ${userName}, your age is ${userAge}`;

//? Виконайте завдання вище, використовуючи шаблонні рядки

/*
 * Властивості та методи рядків
 */
// const string = 'Welcome to Bahamas!';
// const find = 'TO'.toLowerCase();
// console.log(string.toLowerCase().includes(find));
// console.log(string.length); //21
// console.log(string.toUpperCase());

//? Запросіть у користувача ім'я та дізнайтесь з кількох символів, що складається з ім'я.
// const userName = prompt('Your name?');
// console.log(userName.length);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// let userEmail = prompt('Your email?');
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр

// let userEmail = prompt('Your email?');
// userEmail = userEmail.toUpperCase();
// console.log(userEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій перебувати цей підрядок
*/

// let languagesStr =
//   'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++, Javascript';

// languagesStr = languagesStr.toLowerCase();

// const findWord = 'CSS'.toLowerCase();

// const inString = languagesStr.indexOf(findWord);

// console.log(inString);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;

// const str = '24px';
// const subStr = 'px';
// console.log(str.endsWith(subStr));
// console.log(str.startsWith('24'));

//? У нас є рядок '23,4', замініть кому на крапку

// const str = '23,4,5,6';
// const srt2 = str.replaceAll(',', '.');

// console.log(str);
// console.log(srt2);

const cssFileNames = 'styles.css, about.css, portfolio.css';

const minCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
console.log(minCssFileNames);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// let str =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// str = str.replaceAll("dog", "monkey");

// console.log(str);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// let someDate = "13:06:22";
// someDate = someDate.replaceAll(":", ".");

// console.log(someDate);

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const someStr = "Vasyl Pupkin is 24 years old";
// // const subStr = someStr.slice(0, 12);
// const indexAge = someStr.indexOf("24");
// console.log(indexAge);
// console.log(someStr.slice(indexAge, someStr.length));
