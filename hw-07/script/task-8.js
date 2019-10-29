console.log('task 8 --------------------------------------------');

const boxesCreater = {
  input: document.querySelector('#controls input'),
  boxes: document.getElementById('boxes'),
  buttonCreate: document.querySelector('button[data-action="render"]'),
  buttonDestroy: document.querySelector('button[data-action="destroy"]'),
  destroyBoxes() {
    [...this.boxes.children].forEach((item) => {
      this.boxes.removeChild(item);
      this.input.value = '';
    });
  },
  changed(event) {
    [...document.querySelectorAll('.colors')].forEach((item) => item.value = '20');
    event.target.value = 258;
  },
  genetateColor() {
    const red = Math.floor(Math.random() * Number(document.querySelector('.red').value));
    const green = Math.floor(Math.random() * Number(document.querySelector('.green').value));
    const blue = Math.floor(Math.random() * Number(document.querySelector('.blue').value));
    return [red, green, blue];
  },
  createBoxes() {
    let boxSize = 0;
    for (let i = 0; i < this.input.value; i += 1) {
      const colors = this.genetateColor();

      const box = document.createElement('div');

      box.style.width = `${30 + boxSize}px`;
      box.style.height = `${30 + boxSize}px`;
      boxSize += 10;
      box.style.margin = '0 4px 8px 0';
      box.style.backgroundColor = `rgba(${colors[0]},${colors[1]},${colors[2]}, 0.2)`;

      if (document.querySelector('.red').value === '258') {
        box.style.border = '1px solid #ff2828';
      }
      if (document.querySelector('.green').value === '258') {
        box.style.border = '1px solid #32E84A';
      }
      if (document.querySelector('.blue').value === '258') {
        box.style.border = '1px solid #067ed4';
      }

      this.boxes.appendChild(box);
	  }
  },
};


boxesCreater.buttonCreate.addEventListener('click', boxesCreater.createBoxes.bind(boxesCreater));
boxesCreater.buttonDestroy.addEventListener('click', boxesCreater.destroyBoxes.bind(boxesCreater));
