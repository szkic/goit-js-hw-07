import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const addImages = galleryItems.map((image) => {
  const createEl = document.createElement("li");
  const createLink = document.createElement("a");
  const createImg = document.createElement("img");

  createEl.append(createLink);
  createEl.classList.add("gallery__item");

  createLink.append(createImg);
  createLink.classList.add("gallery__link");
  createLink.setAttribute("href", image.original);

  createLink.addEventListener("click", (event) => event.preventDefault());

  createImg.classList.add("gallery__image");
  createImg.setAttribute("src", image.preview);
  createImg.setAttribute("data-source", image.original);
  createImg.setAttribute("alt", image.description);

  galleryEl.append(createEl);

  createEl.querySelector(".gallery__link").onclick = () => {
    const instance = basicLightbox.create(`<img src="${image.original}">`);
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  };
});
