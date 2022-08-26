/*
 * Проміси
 */

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

/*
1 - console.log('console.log: 1');
2 - console.log('console.log: 2');
3 - console.log('promise: 1');
4 - console.log('promise: 2');
5 - console.log('setTimeout');
*/

//? конструктор new Promise(callback(resolve, reject));

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = Math.random() < 0.3;
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(21);
//     } else {
//       reject(34);
//     }
//   }, 1500);
// });

// const onResolve = value => {
//   console.log(value);
//   return value;
// };

// const onReject = error => {
//   console.error(error);
// };

// promise
//   .then(value => {
//     console.log(value);
//     return 50;
//   })
//   .then(data => {
//     console.log('data', data);
//     return data * 50;
//   })
//   .then(data2 => {
//     console.log('data2', data2);
//     return data2 * 50;
//   })
//   .catch(onReject)
//   .finally(() => {
//     console.log('final');
//   });

// console.log(number);

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise
//   .then(
//     // onResolve will run third or not at all
//     value => {
//       console.log('onResolve call inside promise.then()');
//       console.log(value); // "Success! Value passed to resolve function"
//     },
//     // onReject will run third or not at all
//     error => {
//       console.log('onReject call inside promise.then()');
//       console.error(error); // "Error! Error passed to reject function"
//     }
//   )
//   .then(
//     data => {
//       console.log('data', data);
//       console.log('second then success');
//     },
//     () => {
//       console.log('second then error');
//     }
//   )
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('The end');
//   });

// // Will run second
// console.log('After promise.then()');

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   setTimeout(() => {
//     if (isDone < 0.5) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1500);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => console.error(error))
//   .finally(() => {
//     console.log('The end!');
//   });

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   setTimeout(() => {
//     if (isDone < 0.5) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1000);
// });

// promise
//   .then(data => {
//     console.log(data);
//     data += '!';
//     return data;
//   })
//   .then(str => {
//     console.log(str);
//     str += '!!';
//     return str;
//   })
//   .then(someStr => {
//     console.log(someStr);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log('The end');
//   });

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   resolve(1);
//   //   reject(5);
//   setTimeout(() => {
//     console.log('134');
//     resolve(2);
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//   })
//   .then(data => {
//     console.log(data); // undefined
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

const makePromise = (delay, position) => {
  const isSuccess = getRandomNumber();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess <= 2) {
        resolve({ delay, position });
      } else {
        reject({ delay, position });
      }
    }, delay);
  });

  return promise;
};
// const onResolve = ({ delay, position }) => {
//   console.log(`On resolve, delay ${delay}`);
// };
// const onReject = ({ delay, position }) => {
//   console.log(`On reject, delay ${delay}`);
// };

let delay = 1000;
const step = 500;
const amount = 5;

for (let i = 1; i < amount; i++) {
  makePromise(delay, i)
    .then(({ delay, position }) => {
      console.log(`On resolve, delay ${delay}, position ${position}`);
    })
    .catch(({ delay, position }) => {
      console.log(`On reject, delay ${delay}, position ${position}`);
    });
  delay += step;
}
