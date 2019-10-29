console.log('task 1 --------------------------------------------');

const categories = document.getElementById('categories');
const items = Array(...categories.children);

console.log(`В списке ${items.length} категории.`);

items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  console.log(`Категория: ${title}`);

  const count = item.querySelector('ul').childElementCount;
  console.log(`Количество элементов: ${count}`);
});
