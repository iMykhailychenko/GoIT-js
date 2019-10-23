const log = function (a) {
  console.log(a);
};

const formatString = function (string) {
  return string.length > 40 ? `${string.slice(0, 40)}...` : string;
};

log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
