//? Запит за користувачем на колбэках

// const fetchUserByName = (name, onSuccess, onError) => {
// setTimeout(() => {
//   const isSucces = Math.random();

//   if (isSucces < 0.5) {
//     console.log('Success');
//     const user = {
//       name,
//       mail: 'mango@gmail.com',
//       age: 21,
//     };
//     onSuccess(user);
//   } else {
//     console.error("'Error");
//     onError(`${name} not found!`);
//   }
// }, 1500);
// };

// const onSuccess = user => {
//   console.log(`Succes found ${user.name}`);
// };

// const onError = message => {
//   console.log(`Error. ${message}`);
// };

// fetchUserByName('Mango', onSuccess, onError);

//? Запит за користувачем на промісах

// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер...');

//   const user = {
//     name,
//     mail: 'mango@gmail.com',
//     age: 21,
//   };

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSucces = Math.random();

//       if (isSucces < 0.5) {
//         console.log('Success');

//         resolve(user);
//       } else {
//         console.error("'Error");
//         reject(`${name} not found!`);
//       }
//     }, 1500);
//   });
// };

// const onSuccess = user => {
//   console.log(`Succes found ${user.name}`);
// };

// const onError = message => {
//   console.error(`Error. ${message}`);
// };

// fetchUserByName('Mango').then(onSuccess).catch(onError);

// fetchUserByName('Mango').then(onSuccess).catch(onError);

// https://api.github.com/users/dykyys
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

// const fetchUserByName = name => {
//   const url = `https://api.github.com/users/${name}`;
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.addEventListener('load', () => {
//       resolve(xhr);
//     });
//     xhr.addEventListener('error', () => {
//       reject(xhr);
//     });
//   });
// };

// fetchUserByName('mango')
//   .then(({ status, responseText }) => {
//     if (status === 200) {
//       return responseText;
//     }

//     const data = JSON.parse(responseText);

//     return Promise.reject(data.message);
//     // throw new Error(data.message);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error!!', error);
//   });
