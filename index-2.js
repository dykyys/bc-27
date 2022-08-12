'use strict';
/*
 * Методи функції call и apply
 */

/*
 * Якщо прив'язати контекст через bind
 * при передачі функції як callback контекст зберігається
 */

//*Функції це об'єкти зі своїми властивостями та методами

// const greet = function () {
//   console.log('Hello');
// };
// greet();
// greet.test = 5;

// console.dir(greet);
// console.log(greet.test);

//* call і apply

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} years old ${this.age}, ${num}`
//   );
// };

// showFullName();

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// user.show = showFullName;
// console.log(user);
// user.show('Hello', 15);

// showFullName.call(user, 'Hello', 20, 21);
// showFullName();
// showFullName.apply(user, ['Hello', 20]);
// showFullName();
// showFullName.call(anotherUser, 'Hi', 5);

//? Викличте функцію showFullName у контексті об'єкта anotherUser

// const showFullName = function (message) {
//   console.log(this);
//   console.log(`${message} ${this.firstName} ${this.lastName}!`);
// };

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hello');

// showFullName.apply(anotherUser, ['Hello']);

//* bind

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const mango = {
//   firstName: 'Mango',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserName = showFullName.bind(user);
// const showMangoName = showFullName.bind(mango);

// showUserName();
// showMangoName();
// console.dir(showMangoName);

// const someFunction = function (callback) {
//   console.log(callback === showMangoName);

//   callback();
// };
// someFunction(showMangoName);

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// user.showThis();

// const someFunction = function (callback) {

//   callback();
// };
// someFunction(user.showThis);

// const showUserName = user.showName.bind(user);
// someFunction(showUserName);

// someFunction(user.showName.bind(user));

/*
? Що виведе цей код?
*/

// const f = function (message) {
//   console.log(`${message}, ${this.name}!`);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const foo = f.bind(anotherUser, 'Hello');
// // foo();

// const copyFunc = f.bind(anotherUser).bind(user);

// copyFunc('Hi');

/*
? Визов checkPassword() у наведеному нижче коді повинен перевірити пароль і потім викликати user.loginOk/loginFail в залежністі від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (userPassword, ok, fail) {
//   const PASSWORD = 'rockstar';

//   if (PASSWORD === userPassword) {
//     console.log('Password Ok!');
//     ok();
//   } else {
//     console.log('Password not Ok!');
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log('this', this);
//     console.log(`${this.name} logged in!`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in!`);
//   },
// };

// const loginOk = user.loginOk.bind(user);
// const loginFail = user.loginFail.bind(user);
// checkPassword('rockstar', loginOk, loginFail);

// checkPassword('rockstar', user.loginOk.bind(user), user.loginFail.bind(user));
