'use strict';
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні властивості об'єкта та не власні властивості

// prototype є лише у класві і у функцій конструкторів
//__proto__ є у всіх об'єктів

const user = {
  firstName: 'Isaac',
  age: 40,
};

// console.log('user', user);

// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(Object.prototype.__proto__);
// const obj = {}; // new Object

const user2 = Object.create(user);

user2.lastName = 'Nyton';
user2.sex = 'man';

// console.log('proto', user2.__proto__);

// console.log(user.isPrototypeOf(user2));

// console.log(user2);

// console.log(user2.hasOwnProperty('age'));

// user2.age = 21;

// console.log(user2);

const user3 = Object.create(user2);
user3.email = 'nyton@gmai.com';

// console.log(user3.firstName);

//* Перевірка приватних властивостей obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('age'));

//* Цикл for...in, перебирає всі властивості, і власні та не власні.

// for (const key in user3) {
//   if (user3.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const user3Keys = Object.keys(user3);

// console.log(user3Keys);

// const numbers = [1, 2, 3];
// numbers.push();
// console.log(numbers.__proto__);

// new Array

// new String(str);

// new Number(num);
// const val = 5.456452345;

// console.dir(val.toFixed(2));

// console.dir(String);

// console.log(num.toFixed(1));
