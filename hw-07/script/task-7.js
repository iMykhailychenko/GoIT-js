console.log('task 7 --------------------------------------------');

const fontSize = {
  inputSlider: document.getElementById('font-size-control'),
  text: document.getElementById('text'),
  changeFontSize() {
	  const rangeValue = Number(this.inputSlider.valueAsNumber);
	  this.text.style.fontSize = `${rangeValue * 0.5}px`;
  },
};

fontSize.inputSlider.addEventListener('input', fontSize.changeFontSize.bind(fontSize));
