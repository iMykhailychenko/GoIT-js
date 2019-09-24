console.log('Модуль 2, Задание 4 ----------------------------------');

function formatString(string) {
  let arrayFromString = string.split('');
  let formattedString = '';

  if (arrayFromString.length <= 40) {
    formattedString = string;
  } else {
    arrayFromString.length = 40;
    arrayFromString.push('...');
    formattedString = arrayFromString.join('');
  }

  return formattedString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
