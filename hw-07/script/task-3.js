console.log('task 3 --------------------------------------------');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = {
  list: document.getElementById('gallery'),

  createItem({ url, alt }) {
	  const item = `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`;
	  return item;
  },

  createGallery(arr) {
	  return arr.map((img) => this.createItem(img)).join('');
  },
};

const insert = gallery.createGallery(images);
gallery.list.insertAdjacentHTML('beforeend', insert);
