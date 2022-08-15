/*
 * Клас - шаблон за яким будуть створені однотипні об'єкти
 * Примірник/екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор

//TODO:  Створюємо людину за образом

function CreateUser({ name, email, age = 0 }) {
  // const { name, email } = params;
  this.name = name;
  this.email = email;
  this.age = age;
}

CreateUser.prototype.getName = function () {
  console.log(this.name);
};

// CreateUser.prototype.getEmail = function () {
//   console.log(this.email);
// };

const user = new CreateUser({
  name: 'mango',
  email: 'mango@gmail.com',
  age: 21,
});

console.log(user);

const user2 = new CreateUser({ name: 'kiwi', email: 'kiwi@gmail.com' });

console.log(user2);

user.getName();
