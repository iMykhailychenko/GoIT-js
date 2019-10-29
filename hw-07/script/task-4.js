console.log('task 4 --------------------------------------------');

let currentValue = 0;

const counter = {
  value: document.querySelector('#value'),

  speed: 80,

  decrementBtn: document.querySelector('button[data-action="decrement"]'),

  incrementBtn: document.querySelector('button[data-action="increment"]'),

  decrement() {
	  currentValue -= 1;
	  this.value.textContent = currentValue;
  },

  increment() {
	  currentValue += 1;
	  this.value.textContent = currentValue;
  },
};


counter.decrementBtn.addEventListener('mousedown', (event) => {
  intervalId = setInterval(counter.decrement, counter.speed);
});
counter.decrementBtn.addEventListener('mouseup', () => {
  clearInterval(intervalId);
});

counter.incrementBtn.addEventListener('mousedown', (event) => {
  intervalId = setInterval(counter.increment, counter.speed);
});
counter.incrementBtn.addEventListener('mouseup', () => {
  clearInterval(intervalId);
});
