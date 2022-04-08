import { removeItems } from "./shoppingcart.js";
import { track } from "./carousel.js";
import { setSlidePositionModal } from "./modal.js";

const mobileNav = document.querySelector(".mobile__nav");
const closeBtn = document.querySelector(".mobile__nav--close-btn");
const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const background = document.querySelector(".bg-modal");
const backgroundNav = document.querySelector(".bg-modal-nav");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backgroundNav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
  backgroundNav.style.display = "none";
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
  background.style.display = "none";
});

track.addEventListener("click", () => {
  const x = window.matchMedia("(min-width: 768px)");
  popUp(x);
  x.addEventListener("resize", popUp);
});

function popUp(x) {
  if (x.matches) {
    modal.style.display = "block";
    background.style.display = "block";
  }
}
