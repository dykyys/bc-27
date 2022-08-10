/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колббек-функції
// });

//? Помножте всі числа на 2
const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((element, index, arr) => {
//   return element * 2;
// });
// const result = numbers.map((element) => element * 2);
// console.log(result);
// console.log('numbers.length', numbers.length);
// console.log('result.length', result.length);

/*
?Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить довжини рядків:
*/

// const wordsArr = ['Існує', 'життя', 'на', 'Марсі', '!'];
// const wordsArr2 = ['отримує', 'з', 'масиву', 'рядків'];
// const wordsLength = wordsArr.map((element) => {
//   return element.length;
// });

// const wordsLength = wordsArr.map((element) => element.length);
// console.log(wordsLength);

// const getElementsLength = (array) => {
//   return array.map((element) => element.length);
// };

// console.log(getElementsLength(wordsArr));
// console.log(getElementsLength(wordsArr2));

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const farengeits = celsius.map((elem) => {
//   return elem * 1.8 + 32;
// });
// const farengeits = [...celsius].map((elem) => elem * 1.8 + 32);

// const farengeits = celsius.map((elem) => elem * 1.8 + 32);

// console.log(farengeits);
// console.log(celsius);

/*
? Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.
*/

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//1 варіант
// const getModel = (cars) => {
//   const models = cars.map((car) => {
//     return car.model;
//   });

//   return models;
// };

// const models = getModel(cars);
// console.log(models);

//2 варіант
// const getModel = (vehicles) => {
//   return vehicles.map(({ model }) => model);
// };

// const models = getModel(cars);
// console.log(models);
// console.log(cars);

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (vehicles, discont) => {
//   const carsWithDiscont = vehicles.map((car) => {
//     return {
//       ...car,
//       price: car.price * (1 - discont / 100).toFixed(2),
//     };
//   });
//   return carsWithDiscont;
// };

// const makeCarsWithDiscount = (vehicles, discont) => {
//   return vehicles.map((car) => ({
//     ...car,
//     price: car.price * (1 - discont / 100).toFixed(2),
//   }));
// };

// const withSale70 = makeCarsWithDiscount(cars, 70);

// console.table(withSale70);

const students = [
  {
    name: 'Манго',
    courses: ['математика', 'фізика', ,],
  },
  { name: 'Полі', courses: ['інформатика', 'математика'] },
  { name: 'Ківі', courses: ['фізика', 'біологія'] },
];

// const courses = students.map((student) => {
//   return student.courses;
// });

// const courses = students.map(({ courses }) => courses);

// console.log(courses.flat());

const courses = students.flatMap(({ courses }) => courses);

console.log(courses);

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
