// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// const findBestEmployee = (employees) => {
//   let max = 0;
//   let name;
//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     if(max < employees[key]) {
//       max = employees[key];
//       name = key;
//     }
//   }
//   return name;
// };

const findBestEmployee = (employees) => {

  let max = 0;
  let employee;
  const keys = Object.entries(employees);

  for (const [name, value] of keys) {
    if (max < value) {
      max = value;
      employee = name;
    }
  }

  return employee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
