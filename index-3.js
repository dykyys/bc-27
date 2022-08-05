/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

//TODO: Через for...in
// let total = 0;
// for (const key in salaries) {
//   total += salaries[key];
// }
// console.log(total);

//TODO: Через Object.keys();

// const salariesKeys = Object.keys(salaries);
// let total = 0;
// for (const key of salariesKeys) {
//   total += salaries[key];
// }
// console.log(total);

//TODO: Через Object.values();

// const salariesValues = Object.values(salaries);
// console.log(salariesValues);
// let total = 0;
// for (const salary of salariesValues) {
//   total += salary;
// }
// console.log(total);

//TODO: Через Object.entries();

// const salaryEntries = Object.entries(salaries);
// let total = 0;
// for (const array of salaryEntries) {
//   total += array[1];
// }
// console.log(total);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = Object.create(obj);

// console.log(obj1);

// const hero = {
//   heals: 100,
//   power: 15,
//   d: 20,
// };

// const mango = Object.create(hero);

// mango.pocketSize = 1000;

// for (const key in mango) {
//   if (mango.hasOwnProperty(key)) {
//     console.log(mango[key]);
//   }
// }

// const mangoKeys = Object.keys(mango);
// console.log(mangoKeys);

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const developersSalaaries = Object.create(salaries);
developersSalaaries.Obivan = 200;
developersSalaaries.Yoda = 500;
developersSalaaries.Chybaka = 50;
developersSalaaries.DartVaider = 250;

const managerSalaries = Object.create(developersSalaaries);

console.log(managerSalaries);
console.log(managerSalaries.hasOwnProperty('Ann'));

let total = 0;

//TODO: Через forin;

// for (const key in developersSalaaries) {
//   if (developersSalaaries.hasOwnProperty(key)) {
//     total += developersSalaaries[key];
//   }
// }

//TODO: Через Object.keys();

const devSalariesKeys = Object.keys(developersSalaaries);

for (const daveloper of devSalariesKeys) {
  total += developersSalaaries[daveloper];
}

console.log(total);
