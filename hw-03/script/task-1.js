// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const log = (a) => {
  console.log(a);
};

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const changeProperty = (key, value) => {
  user[key] = value;
};

const showProperty = (obj) => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    log(`${key}: ${user[key]}`);
  }
};

changeProperty('mood', 'happy');
changeProperty('hobby', 'javascript');
changeProperty('premium', false);
log(user);

showProperty(user);
