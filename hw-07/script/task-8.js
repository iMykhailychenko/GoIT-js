
console.log('task 8 --------------------------------------------');
const log = (a) => console.log(a);

const boxesCreator = {
  input: document.querySelector('#controls input'),
  boxes: document.getElementById('boxes'),
  buttonCreate: document.querySelector('button[data-action="render"]'),
  buttonDestroy: document.querySelector('button[data-action="destroy"]'),
  redRadio: document.querySelector('.red'),
  greenRadio: document.querySelector('.green'),
  blueRadio: document.querySelector('.blue'),
  combinedRadio: document.querySelector('.combined'),

  destroyBoxes() {
    [...this.boxes.children].map((item) => this.boxes.removeChild(item));
  },

  red() {
    let color = 0;
    if (this.redRadio.checked) {
      color = 255;
    } else {
      color = 10;
    }
    return color;
  },

  green() {
    let color = 0;
    if (this.greenRadio.checked) {
      color = 255;
    } else {
      color = 10;
    }
    return color;
  },

  blue() {
    let color = 0;
    if (this.blueRadio.checked) {
      color = 255;
    } else {
      color = 10;
    }
    return color;
  },

  genetateColor() {
    const colors = [0, 0, 0];

    if (this.combinedRadio.checked) {
      colors[0] = Math.round(Math.random() * 255);
      colors[1] = Math.round(Math.random() * 255);
      colors[2] = Math.round(Math.random() * 255);
    } else {
      colors[0] = Math.round(Math.random() * this.red());
      colors[1] = Math.round(Math.random() * this.green());
      colors[2] = Math.round(Math.random() * this.blue());
    }

    return colors;
  },

  borderColor() {
    let border = '';

    if (this.redRadio.checked) {
      border = '#f63737';
    } else if (this.greenRadio.checked) {
      border = '#37f677';
    } else {
      border = '#3a73be';
    }

    return border;
  },

  createBoxes() {
    let param = 20;
    const boxesArray = [];
    const countOfBoxes = this.input.valueAsNumber;

    boxesArray.length = countOfBoxes;

    const boxesElemArray = [...boxesArray].map((item) => {
      param += 10;
      item = `<div style="width: ${param}px; height: ${param}px; border: 1px solid ${this.borderColor()}; background: rgba(${this.genetateColor().join(',')},0.2)"></div>`;
      return item;
    });

    const boxeSstring = boxesElemArray.reduce((acc, elem) => acc + elem, '');

    this.boxes.insertAdjacentHTML('beforeend', boxeSstring);
  },

  createClick() {
    this.buttonCreate.addEventListener('click', this.createBoxes.bind(this));
  },

  destroyClick() {
    this.buttonDestroy.addEventListener('click', this.destroyBoxes.bind(this));
  },
};

boxesCreator.createClick();
boxesCreator.destroyClick();
