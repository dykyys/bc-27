/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 */

// Сутність фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
const film = {
  title: 'Matrix',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
};

// priority{
// comedy: true,
// space: true
// }

// film.location.district = 'qwe';

// film.priority = {};
// film.priority.comedy = true;
// film.priority.space = true;

film.priority = {
  comedy: true,
  space: true,
};

// const genre = 'space';

// film['priority'] = {
//   comedy: true,
//   [genre]: true,
// };

console.log(film);

// const local = 'location';
// console.log(film[local]['country']);

// film.subTitle = 'Quasi, nemo iusto! Et doloribus praesentium laboriosam';

// film.title = 'Matrix2';

// const copyFilm = film;
// console.log(copyFilm === film);

// const age = 21;
// const name = 'Mango';

// const user = {
//   name,
//   age,
// };

// const userName = 'name';

// console.log(user[userName]);

// const propName = 'name';

// const user = {
//   age: 25,
// };

// user[propName] = 'Генрі Сибола';
// // user.propName = 'Генрі Сибола';
// console.log(user);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

const img = 'preview';

// film['preview'] = './images/img.jpg';
// film.preview = './images/img.jpg';
// film[img] = './images/img.jpg';

// film.isAdult = false;
// film['isAdult] = false;

/*
 *Короткий запис властивостей
 */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const name = prompt("Введіть ваше ім'я");
// const email = prompt('Ваш email');
// const phone = prompt('Ваш phone');
// let name = 'Mango';
// const email = 'maggo@gmail';
// const phone = '1234123';

// const userData = {
//   name,
//   email,
//   phone,
// };

// name = 'Poly';
// console.log(name);
// console.log(userData);

/*
 * Посилальний тип
 */

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj2 = obj;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

// obj2.c = 5;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

/*
 *Все у цьому світі об'єкти
 */

// const arr = [1, 2, 3, 4];
// const obj = {
//   a: 1,
//   b: 2,
// };

// // const obj = {
// //   0: 1,
// //   1: 2,
// //   2: 3,
// //   3: 4,
// //   length: 4,
// // };

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
