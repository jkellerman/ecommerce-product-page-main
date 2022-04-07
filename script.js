import { carousel } from "./carousel.js";
import { shoppingcart } from "./shoppingcart.js";
import { track } from "./carousel.js";

const mobileNav = document.querySelector(".mobile__nav");
const closeBtn = document.querySelector(".mobile__nav--close-btn");
const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
// const carouselTrack = document.querySelector(".carousel__image");
const modalCloseBtn = document.querySelector(".modal__close-btn");

hamburger.addEventListener("click", () => {
  mobileNav.showModal();
});

closeBtn.addEventListener("click", () => {
  mobileNav.close();
});

track.addEventListener("click", () => {
  modal.showModal();
});

modalCloseBtn.addEventListener("click", () => {
  modal.close();
});
