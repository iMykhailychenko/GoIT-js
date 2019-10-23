console.log('Модуль 2, Задание 7 ----------------------------------');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
  const isValid = login.length >= 4 && login.length <= 16;
  if (isValid) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  return isValid;
}

function isLoginUnique(allLogins, login) {
  const isUnique = allLogins.includes(login);
  if (isUnique) {
    console.log('Такой логин уже используется!');
  }
  return !isUnique;
}

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    console.log('Логин успешно добавлен!');
    logins.push(login);
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
