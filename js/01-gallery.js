import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = addGalleryItemMurkup(galleryItems);
galleryRef.addEventListener("click", onGalleryItemClick);

function addGalleryItemMurkup(gallery) {
  return gallery
    .map((item) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
          </div>`;
    })
    .join("");
}

function onGalleryItemClick(e) {
  e.preventDefault();

  const imgRef = e.target.nodeName === "IMG";

  if (!imgRef) {
    return;
  } else {
    const largeItem = e.target.dataset.source;

    showLargeItem(largeItem);
  }
}

function showLargeItem(src) {
  const fullSizeGalleryItem = basicLightbox.create(
    `
    <img src = "${src}" width = "1200" height = "800"">
    `
  );

  fullSizeGalleryItem.show();
}
