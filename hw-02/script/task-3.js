console.log('Модуль 2, Задание 3 ----------------------------------');

function findLongestWord(string) {
  let arrayWithNumbers = [];
  const arrayFromString = string.split(' ');

  for (const word of arrayFromString) {
    arrayWithNumbers.push(word.length);
  }

  const maxNumber = Math.max(...arrayWithNumbers);
  const maxLengthIndex = arrayWithNumbers.indexOf(maxNumber);

  return arrayFromString[maxLengthIndex];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
