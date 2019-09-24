console.log('Модуль 2, Задание 1 ----------------------------------');

function logItems(array) {
  for (const item of array) {
    console.log(`${array.indexOf(item) + 1} - ${item}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
