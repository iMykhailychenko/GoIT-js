console.log('task 1 --------------------------------------------');

const categories = document.getElementById('categories');
const items = [...categories.children];

console.log(`В списке ${items.length} категории.`);

const log = items.map((item) => {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelector('ul').childElementCount;

  return `Категория: ${title}\nКоличество элементов: ${count}`;
});

console.log(log.join('\n'));
