'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

/*
 * Публічні властивості класу доступні на екземплярах
 * Публічні методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, отримати доступ до них можна за допомогою методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на самому класі
 * Статичні приватні властивості доступні на самому класі, всередині класу
 * Статичні методи доступні лише на самому класі
 * Статичні приватні методи доступні на самому класі, всередині методів класу
 */

class User {
  static ROLE = 'user';
  static #PASSWORD = 'qwert';

  static updateRole(password, newRole) {
    const isAdmin = User.#chechPassword(password);
    if (!isAdmin) {
      console.log('До побачення!');
      return;
    }
    User.ROLE = newRole;
  }
  static #chechPassword(password) {
    return User.#PASSWORD === password;
  }
  #email;
  constructor({ name, email }) {
    // const { name, email } = params;
    this.name = name;
    //this._age = 21; // неписане правило, так позначалися приватні властивості до появлення #
    this.#email = email;
  }

  getName() {
    console.log(this);
  }

  updateName(password, newName) {
    console.log('User.#PASSWORD', User.#PASSWORD);
    if (password !== User.#PASSWORD) {
      console.log('не вірний пароль');
    }
    this.name = newName;
  }

  getEmail() {
    return this.#email;
  }

  updateEmail(role, newEmail) {
    if (role !== 'user') {
      console.log('недостатньо прав для доступу');
      return;
    }
    // const valid = this.#ckechEmail(newEmail);

    // if (!valid) {
    //   console.log('Не валідний email');
    //   return;
    // }
    this.#email = newEmail;
    console.log('email був оновлений!');
  }

  #ckechEmail(email) {
    return email.includes('@gmail');
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    const valid = this.#ckechEmail(newEmail);
    if (!valid) {
      alert('Не валідний email');
      return;
    }
    this.#email = newEmail;
    // alert('email був оновлений!');
  }
}

const mango = new User({ name: 'Mango', email: 'mango@gmail' });

const kiwi = new User({ name: 'Kiwi', email: 'kiwi@gmail' });

// kiwi.updateName('Ser Kiwi');

// kiwi.getName();

// mango.updateEmail(User.ROLE, 'SerMango@gmail.com');
// mango.updateName('ddddd', 'Ser Mango');

// mango.getName();

// console.log(User.PASSWORD);

// console.log(mango.getName());
// mango.updateEmail('m@gmail.com');

// mango.email = 'm@gmail.com';
// console.log(mango.email);
// User.updateRole('qwert', 'super admin');
// console.log(User.ROLE);
// console.log(User.ROLE);
// console.log(kiwi);

class Developer extends User {
  constructor({ name, email, position }) {
    super({ name, email });
    this.position = position;
  }

  getProces() {
    console.log('Write code!');
  }
}

const ajax = new Developer({
  name: 'Ajax',
  email: 'ajax@gmail',
  position: 'developer',
});

// console.log(ajax.getEmail());
// console.log(ajax);
// ajax.getProces();

class Manager extends User {
  constructor({ name, email, work }) {
    super({ name, email });
    this.work = work;
  }
  getWorkPlace() {
    console.log(this.work);
  }
}

const polly = new Manager({
  name: 'polly',
  email: 'polly@gmail',
  work: 'office',
});

polly.updateEmail(User.ROLE, 'po@gmail');
console.log(polly);
