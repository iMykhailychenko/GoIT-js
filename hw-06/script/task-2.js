import users from './users.js';

console.log('task 2 --------------------------------------------');

const getUsersWithEyeColor = (users, color) => users.filter((user) => color === user.eyeColor);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr
