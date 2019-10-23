const log = function (a) {
  console.log(a);
};

const findLongestWord = function (string) {
  let maxWord = ' ';
  const array = string.split(' ');
  for (const item of array) {
    if (maxWord.length < item.length) {
      maxWord = item;
    }
  }
  return maxWord;
};

log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

log(findLongestWord('Google do a roll')); // 'Google'

log(findLongestWord('May the force be with you')); // 'force'
