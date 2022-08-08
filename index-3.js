'use strict';

const logFunction = function ({
  firstName: name = 'some name',
  lastName = 'some last name',
  age = '16',
  gender = 'some gender',
  userEmail: email = 'someMail@gmail.com',
} = {}) {
  console.log(name);
  console.log(lastName);
  console.log(gender);
  console.log(age);
  console.log(email);
};

// logFunction();

logFunction({
  firstName: 'Amelia',
  lastName: 'Burgess',
  age: 30,
  gender: 'female',
  // userEmail: 'apjez@eh.aq',
  // userPhoneNumber: '(096) 35-21-476',
});
