import { Notify } from 'notiflix/build/notiflix-notify-aio';
const TIMER_DEADLINE = new Date(2022, 7, 25, 13, 59);

const timerRef = document.querySelector('.timer__items');

const timer = {
  intervalId: null,
  refs: {},
  datasetValues: {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  },
  start(rootSelector, deadLine) {
    const delta = deadLine.getTime() - Date.now();

    if (delta <= 0) {
      Notify.failure('Вибраний минулий час!', { position: 'center-center' });
      return;
    }

    Notify.success('Відлік почався', { position: 'center-center' });

    this.getRefs(rootSelector);

    this.intervalId = setInterval(() => {
      const delta = deadLine.getTime() - Date.now();

      if (delta <= 0) {
        clearInterval(this.intervalId);
        Notify.success('Досягли вибраної дати!', { position: 'center-center' });

        return;
      }

      const time = this.convertMs(delta);
      console.log(Object.entries(time));
      Object.entries(time).forEach(([name, value]) => {
        this.refs[name].textContent = this.addLeadinfZero(value);

        this.refs[name].dataset.title = this.declensionNum(
          value,
          this.datasetValues[name]
        );
      });

      // this.refs.days.textContent = time.days;
      // this.refs.hours.textContent = time.hours;
      // this.refs.minutes.textContent = time.minutes;
      // this.refs.seconds.textContent = time.seconds;
    }, 1000);
  },
  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('.js-timer__days');
    this.refs.hours = rootSelector.querySelector('.js-timer__hours');
    this.refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    this.refs.seconds = rootSelector.querySelector('.js-timer__seconds');
  },
  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinfZero(value) {
    return String(value).padStart(2, 0);
  },
};
timer.start(timerRef, TIMER_DEADLINE);

// class Timer {
//   #intervalId = null;
//   #refs = {};
//   #datasetValues = {
//     days: ['день', 'дня', 'днів'],
//     hours: ['година', 'години', 'годин'],
//     minutes: ['хвилина', 'хвилини', 'хвилин'],
//     seconds: ['секунда', 'секунди', 'секунд'],
//   };

//   constructor({ rootSelector, deadLine }) {
//     this.rootSelector = rootSelector;
//     this.deadLine = deadLine;
//   }

//   start() {
//     const delta = this.deadLine.getTime() - Date.now();

//     if (delta <= 0) {
//       Notify.failure('Вибраний минулий час!', { position: 'center-center' });
//       return;
//     }

//     Notify.success('Відлік почався', { position: 'center-center' });

//     this.#getRefs(this.rootSelector);

//     this.#intervalId = setInterval(() => {
//       const delta = this.deadLine.getTime() - Date.now();

//       if (delta <= 0) {
//         clearInterval(this.#intervalId);
//         Notify.success('Досягли вибраної дати!', { position: 'center-center' });

//         return;
//       }

//       const time = this.#convertMs(delta);
//       console.log(Object.entries(time));
//       Object.entries(time).forEach(([name, value]) => {
//         this.#refs[name].textContent = this.#addLeadinfZero(value);

//         this.#refs[name].dataset.title = this.#declensionNum(
//           value,
//           this.#datasetValues[name]
//         );
//       });

//       // this.refs.days.textContent = time.days;
//       // this.refs.hours.textContent = time.hours;
//       // this.refs.minutes.textContent = time.minutes;
//       // this.refs.seconds.textContent = time.seconds;
//     }, 1000);
//   }
//   #declensionNum(num, words) {
//     return words[
//       num % 100 > 4 && num % 100 < 20
//         ? 2
//         : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   }
//   #getRefs(rootSelector) {
//     this.#refs.days = rootSelector.querySelector('.js-timer__days');
//     this.#refs.hours = rootSelector.querySelector('.js-timer__hours');
//     this.#refs.minutes = rootSelector.querySelector('.js-timer__minutes');
//     this.#refs.seconds = rootSelector.querySelector('.js-timer__seconds');
//   }
//   #convertMs(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;
//     return { days, hours, minutes, seconds };
//   }
//   #addLeadinfZero(value) {
//     return String(value).padStart(2, 0);
//   }
// }

// const timer1 = new Timer({ rootSelector: timerRef, deadLine: TIMER_DEADLINE });
// timer1.start();
