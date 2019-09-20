console.log('Задание 6  --------------------');

let input;
let total = 0;

do {
  input = prompt('Введите число!', '');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    console.log('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
console.log(`Общая сумма чисел равна ${total}`);
