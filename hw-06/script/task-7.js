import users from './users.js';

console.log('task 7 --------------------------------------------');

const calculateTotalBalance = (users) => users.reduce((acc, current) => acc + current.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
