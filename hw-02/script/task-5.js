console.log('Модуль 2, Задание 5 ----------------------------------');

function checkForSpam(str) {
  const formattedString = str.toLowerCase();
  const hasSpam =
    formattedString.includes('spam') || formattedString.includes('sale');

  const boolean = hasSpam ? true : false;
  return boolean;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
