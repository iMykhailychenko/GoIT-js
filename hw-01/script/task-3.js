console.log('Задание 3  --------------------');

let message = '';
const ADMIN_PASSWORD = 'jqueryismyjam';
const enterPassword = prompt('Введите пароль: ', '');

if (enterPassword === null) {
  message = 'Отменено пользователем!';
} else if (enterPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
console.log(message);
