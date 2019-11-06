'use strict'
class Page {
  constructor({
    body, main, backEl, listEl, tasks,
  }) {
    this._body = body;
    this._main = main;
    this._backEl = backEl;
    this._listEl = listEl;
    this._tasks = tasks;
    this._hidde();
    this._runOpenFn(this._tasks);
  }

  _hidde() {
    document.querySelectorAll('.homework__task').forEach((item) => (item.hidden = true));
    this._backEl.hidden = true;
  }


  _unhiddeHtm(element) {
    if (event.target.dataset.item === element.dataset.task) {
      element.hidden = false;
      this._backEl.hidden = false;
      this._main.hidden = true;
    }
  }

  _unhiddeMenu(element) {
    element.hidden = true;
    this._backEl.hidden = true;
    this._main.hidden = false;
  }

  _openTask(element) {
    const unhiddeHtmBounded = this._unhiddeHtm.bind(this, element);
    this._listEl.addEventListener('click', unhiddeHtmBounded);
  }

  _openMain(element) {
    const unhiddeMenuBounded = this._unhiddeMenu.bind(this, element);
    this._backEl.addEventListener('click', unhiddeMenuBounded);
  }

  _runOpenFn(tasks) {
    tasks.forEach((item) => {
	  this._openTask(item);
	  this._openMain(item);
    });
  }
}


const elements = {
  body: document.querySelector('body'),
  main: document.querySelector('.homework__main'),
  backEl: document.querySelector('.homework__btn'),
  listEl: document.querySelector('.homework__list'),
  tasks: document.querySelectorAll('.homework__task'),
};

const taskPage = new Page(elements);

const scroll = {
  link: document.getElementById('to-top'),
  unhiddeLink() {
    if (window.pageYOffset > 300) {
      this.link.style.bottom = '60px';
      this.link.style.opacity = '1';
    } else if (window.pageYOffset < 300) {
      this.link.style.bottom = '-60px';
      this.link.style.opacity = '0';
    }
  },
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
};

window.addEventListener('scroll', scroll.unhiddeLink.bind(scroll));
scroll.link.addEventListener('click', scroll.scrollToTop.bind(scroll));
