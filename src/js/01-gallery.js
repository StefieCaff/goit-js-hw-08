
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);


const gallery = document.querySelector(".gallery");

//gallery markup from gallery items Array of image objects
const galleryMarkup = galleryItems.map((image) =>
  `<a class="gallery__item" href=${image.original}>
     <img class="gallery__image" src=${image.preview} alt=${image.description} />
   </a>`
).join("");

//add gallery html into dom
gallery.insertAdjacentHTML("beforeEnd", galleryMarkup);

/* function to delegate click to div through bubbling when any image 
 is clicked also method to prevent default link behavior */

function selectedImageLibraryModal(event) {
  event.preventDefault();
    
  if (event.target.nodeName !== `A`) {
    return;
  }
};

// initialize simple lightbox image library
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


//add click event for div/img delegation 
gallery.addEventListener("click", selectedImageLibraryModal);
