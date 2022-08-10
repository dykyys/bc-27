'use strict';
/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колббек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/

// const numbers = [1, 2, 3, 4, 5, 6];

// const filteredNumbers = numbers.filter((element) => {
//   if (element % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// const filteredNumbers = numbers.filter((element) => element % 2 === 0);

// console.log(filteredNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише додатні числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// const positiveNumber = numbers.filter((element) => {
//   if (element > 0) {
//     return true;
//   }
//   return false;
// });

// const positiveNumber = numbers.filter((element) => element > 0);

// console.log(positiveNumber);

/*
? Відфільтруйте масив heroes за ключем об'єкта franchise.
*/

const heroes = [
  { name: 'Batman', franchise: 'DC' },
  { name: 'Ironman', franchise: 'Marvel' },
  { name: 'Thor', franchise: 'Marvel' },
  { name: 'Superman', franchise: 'DC' },
];

// const filteredByFranchise = (arr, franchis) => {
//   const filterdArr = arr.filter((element) => {
//     if (element.franchise === franchis) {
//       return true;
//     }
//     return false;
//   });

//   return filterdArr;
// };

// const filteredByFranchise = (arr, findFranchise) => {
//   return arr.filter(({ franchise }) => franchise === findFranchise);
// };
// const filteredFrans = filteredByFranchise(heroes, 'DC');

// console.log(filteredFrans);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
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

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({ price }) => {
//     if (price < threshold) {
//       return true;
//     }

//     return false;
//   });
// };

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({ price }) => price < threshold);
// };

// const filterdCars = filterByPrice(cars, 25000);
// console.table(filterdCars);

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => {
//     if (car.onSale === true) {
//       return true;
//     }

//     return false;
//   });
// };

// const getCarsWithDiscount = (cars) => {
//   return cars.filter(({ onSale }) => onSale);
// };

// const withSale = getCarsWithDiscount(cars);

// console.table(withSale);

/*
?Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/

// const getCarsWithType = (cars, findType) => {
//   return cars.filter(({ type }) => type === findType);
//   return cars.filter((el, idx, arr) => el.type === type);
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// ?Залишити тільки унікальні числа
const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// 1 ітерація
// el = 1; idx = 0;
// 0 === 0

// 2 ітерація
// el = 2; idx = 1;
// 1 === 1

// 3 ітерація
// el = 3; idx = 2;
// 2 === 2

// 4 ітерація
// el = 3; idx = 3;
// 2 === 3

// 5 ітерація
// el = 2; idx = 4;
// 1 === 4

// const filteredNumbers = numbers.filter((element, index, array) => {
//   if (array.indexOf(element) === index) {
//     return true;
//   }
//   return false;
// });

// const filteredNumbers = numbers.filter((el, i, arr) => arr.indexOf(el) === i);

// console.log(filteredNumbers);
