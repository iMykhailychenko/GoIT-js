const elements = {
  body: document.querySelector('body'),
  main: document.querySelector('.homework__main'),
  backEl: document.querySelector('.homework__btn'),
  listEl: document.querySelector('.homework__list'),
};

document
  .querySelectorAll('.homework__task')
  .forEach((item) => (item.hidden = true));
elements.backEl.hidden = true;

class Page {
  constructor({
    body, main, backEl, listEl,
  }) {
    this.body = body;
    this.main = main;
    this.backEl = backEl;
    this.listEl = listEl;
  }

  unhiddeHtm(element) {
    if (event.target.dataset.item === element.dataset.task) {
      element.hidden = false;
      this.backEl.hidden = false;
      this.main.hidden = true;
    }
  }

  unhiddeMenu(element) {
    element.hidden = true;
    this.backEl.hidden = true;
    this.main.hidden = false;
  }

  openTask(element) {
    const unhiddeHtmBounded = this.unhiddeHtm.bind(this, element);
    this.listEl.addEventListener('click', unhiddeHtmBounded);
  }

  openMain(element) {
    const unhiddeMenuBounded = this.unhiddeMenu.bind(this, element);
    this.backEl.addEventListener('click', unhiddeMenuBounded);
  }
}

const tasks = document.querySelectorAll('.homework__task');

tasks.forEach((item) => {
  const taskPage = new Page(elements);
  taskPage.openTask(item);
  taskPage.openMain(item);
});

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
