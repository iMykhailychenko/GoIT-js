import users from './users.js';

console.log('task 10 --------------------------------------------');

const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, current) => {
      allSkills.push(...current.skills);
      return allSkills;
    }, [])
    .filter((elem, index, array) => index === array.indexOf(elem))
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa',
// 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
// 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
