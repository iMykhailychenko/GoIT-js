const log = function (a) {
  console.log(a);
};

const checkForSpam = function (str) {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes('spam') || lowerCaseStr.includes('sale');
};

log(checkForSpam('Latest technology news')); // false

log(checkForSpam('JavaScript weekly newsletter')); // false

log(checkForSpam('Get best sale offers now!')); // true

log(checkForSpam('[SPAM] How to earn fast money?')); // true
