console.log('task 6 --------------------------------------------');

const input = {
  inputElement: document.getElementById('validation-input'),
  validLength: Number(
    document.getElementById('validation-input').dataset.length,
  ),
  validate() {
    if (this.inputElement.selectionEnd === this.validLength) {
      this.inputElement.classList.remove('invalid');
      this.inputElement.classList.add('valid');
    } else {
      this.inputElement.classList.remove('valid');
      this.inputElement.classList.add('invalid');
    }
  },
};

input.inputElement.addEventListener('input', input.validate.bind(input));
