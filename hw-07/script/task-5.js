console.log('task 5 --------------------------------------------');

const userName = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
  insertInputText({ target }) {
	  if (target.value === '') {
      this.output.textContent = 'незнакомец';
	  } else {
      this.output.textContent = target.value;
	  }
	},
};

userName.input.addEventListener('input', userName.insertInputText.bind(userName));
