

const log = function (a) {
  console.log(a);
};

const logItems = function (array) {
  let num = 0;
  for (const element of array) {
    log(`${(num += 1)}  - ${element}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
