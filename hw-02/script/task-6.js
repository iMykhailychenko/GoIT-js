console.log('Модуль 2, Задание 6 ----------------------------------');

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число', '');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(Number(input));
} while (input !== null);

total = getSumOfArray(numbers);
alert(`Общая сумма чисел равна ${total}`);

function getSumOfArray(array) {
  let totalAmount = 0;

  for (const item of array) {
    totalAmount += Number(item);
  }

  return totalAmount;
}
