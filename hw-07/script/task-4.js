console.log('task 4 --------------------------------------------');

class Counter {
  constructor({
    value, speed, decrementBtn, incrementBtn,
  }) {
    this._value = value;
    this._speed = speed;
    this._decrementBtn = decrementBtn;
    this._incrementBtn = incrementBtn;
    this._clickDecrement();
    this._clickIncrement();
  }

  _decrement() {
    let curentNum = Number(this._value.textContent);
    curentNum -= 1;
    this._value.textContent = curentNum;
  }

  _clickDecrement() {
    let interval;
    this._decrementBtn.addEventListener('mousedown', (event) => {
	  interval = setInterval(this._decrement.bind(this), this._speed);
    });
    this._decrementBtn.addEventListener('mouseup', () => {
	  clearInterval(interval);
    });
  }

  _increment() {
    let curentNum = Number(this._value.textContent);
    curentNum += 1;
    this._value.textContent = curentNum;
  }

  _clickIncrement() {
    let interval;
    this._incrementBtn.addEventListener('mousedown', (event) => {
	  interval = setInterval(this._increment.bind(this), this._speed);
    });
    this._incrementBtn.addEventListener('mouseup', () => {
	  clearInterval(interval);
    });
  }
}

const counterEl = {
  value: document.querySelector('#value'),
  speed: 80,
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

const counter = new Counter(counterEl);
