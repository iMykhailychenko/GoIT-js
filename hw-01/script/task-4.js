console.log('Задание 4  --------------------');

const credits = 23580;
const pricePerDroid = 3000;
const countOfDroid = prompt(
  'Укажите количество дроидов, которое вы хотите приобрести',
  '',
);
let message;

if (countOfDroid === null) {
  message = 'Отменено пользователем!';
} else if (isNaN(countOfDroid)) {
  message = 'Введите число!';
} else {
  const totalPrice = pricePerDroid * countOfDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    const balance = credits - pricePerDroid * countOfDroid;
    message = `Вы купили ${countOfDroid} дроидов, на счету осталось ${balance} кредитов.`;
  }
}

console.log(message);
