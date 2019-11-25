import imgSrc from "./gallery-items.js";

class Galery {
  constructor({ list, modal, originalImg, modalBoxContent, closeBtn }, imgArr) {
    this._list = list;
    this._modal = modal;
    this._originalImg = originalImg;
    this._modalBoxContent = modalBoxContent;
    this._closeBtn = closeBtn;
    this._imgArr = imgArr;
    this.handlItems();
    this.open();
    this.close();
  }
  generateHTML(original, preview, description) {
    const itemElements = `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"
          data-source="${original}" alt="${description}" />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
    `;
    this._list.insertAdjacentHTML("beforeend", itemElements);
  }
  handlItems() {
    this._imgArr.forEach(item =>
      this.generateHTML(item.original, item.preview, item.description)
    );
  }
  open() {
    this._list.addEventListener("click", event => {
      if (event.target !== event.currentTarget) {
        event.preventDefault();
        this._originalImg.src = event.target.dataset.source;
        this._modal.classList.toggle("is-open");
      }
    });
  }
  close() {
    this._modal.addEventListener("click", event => {
      if (event.target !== this._originalImg) {
        this._modal.classList.toggle("is-open");
      }
    });

    window.addEventListener("keydown", event => {
      if (
        this._modal.classList.contains("is-open") &&
        event.code === "Escape"
      ) {
        this._modal.classList.toggle("is-open");
      }
    });
  }
}
const galeryElements = {
  list: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  originalImg: document.querySelector(".lightbox__image"),
  modalBoxContent: document.querySelector(".lightbox__content"),
  closeBtn: document.querySelector(".lightbox__button")
};
const galery = new Galery(galeryElements, imgSrc);
