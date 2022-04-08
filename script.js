import { shoppingcart } from "./shoppingcart.js";
import { track } from "./carousel.js";
import { carouselModal } from "./modal.js";

const mobileNav = document.querySelector(".mobile__nav");
const closeBtn = document.querySelector(".mobile__nav--close-btn");
const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");

hamburger.addEventListener("click", () => {
  mobileNav.showModal();
});

closeBtn.addEventListener("click", () => {
  mobileNav.close();
});

modalCloseBtn.addEventListener("click", () => {
  modal.close();
});

track.addEventListener("click", () => {
  const x = window.matchMedia("(min-width: 768px)");
  popUp(x);
  x.addEventListener("resize", popUp);
});

function popUp(x) {
  if (x.matches) {
    modal.showModal();
  }
}
