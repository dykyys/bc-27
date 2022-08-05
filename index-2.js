/*
 * Методи об'єкта і this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

const filmDuna = {
  title: 'Duna',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  newFilm: {
    title: 'Mango',
    updadeNewFilm(title) {
      console.log(' in new film', this);
      this.title = title;
    },
  },
  adult: false,

  getTitle() {
    // console.log(filmDuna.title); //💩
    return this.title;
  },

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    const inArray = this.actors.includes(newActor);
    if (inArray) {
      console.log(`${newActor} вже є в списку акторів`);
      return;
    }
    this.actors.push(newActor);
  },

  updateRating(newRating = 0) {
    this.rating = newRating;
  },

  updateAdult() {
    this.adult = !this.adult;
  },

  isAdult() {
    return this.adult;
  },
};

filmDuna.changeTitle('Matrix');
// console.log(filmDuna.getTitle());
filmDuna.addActor('Eddie');
filmDuna.addActor('Rosetta Pena');
filmDuna.updateRating(15);
filmDuna.updateAdult();
console.log(filmDuna.isAdult());
