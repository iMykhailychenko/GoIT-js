import imgSrc from './gallery-items.js';

class Galery {
  constructor({
    list, modal, originalImg, modalBoxContent, closeBtn,
  }, imgArr) {
    this._list = list;
    this._modal = modal;
    this._originalImg = originalImg;
    this._modalBoxContent = modalBoxContent;
    this._closeBtn = closeBtn;
    this._imgArr = imgArr;
    this._imgIndex = 0;
    this.handlItems();
    this.open();
    this.close();
    this.slider();
  }

  generateHTML(original, preview, description, index) {
    const itemElements = `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"
          data-source="${original}" alt="${description}" data-index="${index}"/>
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
    `;
    return itemElements;
  }

  handlItems() {
    const tags = this._imgArr.map((item, index) => this.generateHTML(item.original, item.preview, item.description, index)).join('\n');
    this._list.insertAdjacentHTML('beforeend', tags);
  }

  open() {
    this._list.addEventListener('click', (event) => {
      if (event.target !== event.currentTarget) {
        event.preventDefault();
        this._originalImg.src = event.target.dataset.source;
        this._modal.classList.toggle('is-open');
        this._imgIndex = +event.target.dataset.index;
      }
    });
  }

  close() {
    this._modal.addEventListener('click', (event) => {
      if (event.target !== this._originalImg) {
        this._modal.classList.toggle('is-open');
      }
    });

    window.addEventListener('keydown', (event) => {
      if (
        this._modal.classList.contains('is-open')
        && event.code === 'Escape'
      ) {
        this._modal.classList.toggle('is-open');
      }
    });
  }

  slider() {
    window.addEventListener('keydown', (event) => {
      const isOpen = this._modal.classList.contains('is-open');

      if (isOpen && event.code === 'ArrowRight') {
        if (this._imgIndex < (this._imgArr.length - 1)) {
          this._imgIndex += 1;
          this._originalImg.src = this._imgArr[this._imgIndex].original;
        } else {
          this._imgIndex = 0;
          this._originalImg.src = this._imgArr[this._imgIndex].original;
        }
      }

      if (isOpen && event.code === 'ArrowLeft') {
        if (this._imgIndex > 0) {
          this._imgIndex -= 1;
          this._originalImg.src = this._imgArr[this._imgIndex].original;
        } else {
          this._imgIndex = this._imgArr.length - 1;
          this._originalImg.src = this._imgArr[this._imgIndex].original;
        }
      }
    });
  }
}
const galeryElements = {
  list: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  originalImg: document.querySelector('.lightbox__image'),
  modalBoxContent: document.querySelector('.lightbox__content'),
  closeBtn: document.querySelector('.lightbox__button'),
};
const galery = new Galery(galeryElements, imgSrc);
