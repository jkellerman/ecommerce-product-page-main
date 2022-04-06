import { carousel } from "./carousel.js";

const mobileNav = document.querySelector(".mobile__nav");
const closeBtn = document.querySelector(".mobile__nav--close-btn");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  mobileNav.showModal();
});

closeBtn.addEventListener("click", () => {
  mobileNav.close();
});
