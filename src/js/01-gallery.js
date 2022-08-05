// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const containerGallery = document.querySelector('div.gallery');

const itemsTemplate = ({ original, preview, description }) =>
  `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        alt="${description}">
    </a>`;
const сreateList = () => {
  const galleryItem = galleryItems.map(itemsTemplate).join('');
  containerGallery.insertAdjacentHTML('beforeend', galleryItem);
};

сreateList();

const gallery = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
