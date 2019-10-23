import users from './users.js';

console.log('task 3 --------------------------------------------');

const getUsersWithGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
