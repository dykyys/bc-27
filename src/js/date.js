import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
// Створення нової дати

// const data = new Date();

// setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// console.dir(data.getMinutes());

// Методи дати

//? TASK 01
// Створіть об'єкт Date для дати: 21 лютого 2021 року, 3 години 12 хвилин.

const targetDate = new Date(2021, 1, 21, 3, 12, 34);
// console.log('👀 > targetDate', targetDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = data => {
//   console.log(format(data, 'EEEEEE', { locale: uk }));
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const index = data.getDay();
//   return daysArr[index];
// };
// console.log(getWeekDay(targetDate));

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   const data = new Date(year, month + 1, 0);

//   const number = data.getDate();
//   const index = data.getDay();

//   console.log(`${number} - ${daysArr[index]}`);

//   console.log(format(data, 'dd - EEEEEE', { locale: uk }));
// };
// getLastDayOfMonth(2012, 1);

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   //   const now = Date.now();
//   const tomorrow = new Date(2022, 7, 26, 11, 45);
//   console.log(Date.now());
//   setInterval(() => {
//     const delta = tomorrow.getTime() - Date.now();
//     console.log('delta', delta);
//     const seconds = Math.floor(delta / 1000);
//     console.log('seconds', seconds);
//   }, 1000);
// };

// getSecondsToTomorrow();
