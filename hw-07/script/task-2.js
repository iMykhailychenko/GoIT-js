console.log('task 2 --------------------------------------------');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = {
  list: document.querySelector('#ingredients'),

  createItemsArr(arr) {
    const items = [];
    arr.map((ingredient) => {
      const item = document.createElement('li');
      item.textContent = ingredient;
      items.push(item);
    });
    return items;
  },

  appendItems(arr) {
    const liEl = this.createItemsArr(arr);
    liEl.forEach((element) => this.list.appendChild(element));
  },
};

ingredientsList.appendItems(ingredients);
