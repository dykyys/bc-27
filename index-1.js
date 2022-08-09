'use strict';
/*
 * Колбеки, функції вищого порядку
 */

// const foo = function (message, callback) {
//   callback(message);
// };

// function loger(str) {
//   console.log(str);
// }

// foo('Hello world!', loger);

//? Запит на сервер

// const fetchUser = async function (user, callback) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const result = await response.json();
//   callback(result);
// };

// const logerUserInfo = function (obj) {
//   console.log(obj);
// };

// fetchUser('dykyys', logerUserInfo);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.user-email');

// userEmail.addEventListener('input', logValue);

// function logValue() {
//   console.log('hi');
// }

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// const add = function (num) {
//   return num + 3;
// };

// const multi = function (num) {
//   return num * 2;
// };

// const pow = function (num) {
//   return num ** 2;
// };

// const each = function (numbers, callback) {
//   const newArray = [];

//   for (const num of numbers) {
//     const afterCallback = callback(num);
//     newArray.push(afterCallback);
//   }

//   return newArray;
// };

// // const numbers = [1, 2, 3];

// const numbers2 = [5, 8, 9, 7];

// const arrPow = each(numbers2, pow);
// console.log(arrPow);
// const addNumbers = each(numbers, add);
// console.log(addNumbers);

// const multiNumbers = each(numbers, multi);
// console.log(multiNumbers);

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/

// const createProduct = function (product, callback1, totalPrice) {
//   const newObj = {
//     ...product,
//     id: Date.now(),
//   };

//   callback1(newObj);
//   console.log(totalPrice(newObj));
// };

// const logProduct = function (obj) {
//   console.log(obj);
// };

// const logTotalPrice = function ({ price, quantity }) {
//   return price * quantity;
// };

// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice
// );
// createProduct(
//   { name: '🍋', price: 20, quantity: 5 },
//   logProduct,
//   logTotalPrice
// );
// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice
// );

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// function registerGuest(name, callback) {
//   callback(name);
// }

// registerGuest('Mango', greet);

// Передаємо інлайн функцію greet у якості колбека

// function registerGuest(name, callback) {
//   callback(name);
// }

// registerGuest('Mango', function (name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: 'Mango',
//   balance: 0,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }

//     if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }
//     if (amount === this.balance) {
//       onError(`Amount must be more than 0 credits`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// // account.withdraw(700, handleSuccess, handleError);
// account.deposit(900, handleSuccess, handleError);
