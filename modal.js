const modalTrack = document.querySelector(".carousel__track--modal");
const modalSlides = Array.from(modalTrack.children);
const modalNextButton = document.querySelector(
  ".carousel__button--right--modal"
);
const modalPrevButton = document.querySelector(
  ".carousel__button--left--modal"
);
const modalCarouselNav = document.querySelector(".carousel__nav--modal");
const modalCarouselNavImgs = Array.from(modalCarouselNav.children);

// arrange slides next to one another
const setSlidePositionModal = (slide, index) => {
  // could not use the getBoundingClientRect method so used fixed measurement instead, maybe this is something to do with it being a dialog element?
  slide.style.left = 550 * index + "px";
};
modalSlides.forEach(setSlidePositionModal);

const moveToSlideModal = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateNavImgsModal = (currentImg, targetImg) => {
  currentImg.classList.remove("current-slide");
  targetImg.classList.add("current-slide");
};

const hideShowArrowsModal = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// when click left move slides to left
modalPrevButton.addEventListener("click", () => {
  const currentSlide = modalTrack.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentNavImage = modalCarouselNav.querySelector(".current-slide");
  const prevNavImage = currentNavImage.previousElementSibling;
  const prevIndex = modalSlides.findIndex((slide) => slide === prevSlide);
  moveToSlideModal(modalTrack, currentSlide, prevSlide);
  updateNavImgsModal(currentNavImage, prevNavImage);
  hideShowArrowsModal(modalSlides, modalPrevButton, modalNextButton, prevIndex);
});
// when click right move slides to right
modalNextButton.addEventListener("click", () => {
  const currentSlide = modalTrack.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentNavImage = modalCarouselNav.querySelector(".current-slide");
  const nextNavImage = currentNavImage.nextElementSibling;
  const nextIndex = modalSlides.findIndex((slide) => slide === nextSlide);
  moveToSlideModal(modalTrack, currentSlide, nextSlide);
  updateNavImgsModal(currentNavImage, nextNavImage);
  hideShowArrowsModal(modalSlides, modalPrevButton, modalNextButton, nextIndex);
});

// when click nav indicators move to that slide
modalCarouselNav.addEventListener("click", (e) => {
  // what indicator was clicked on
  const targetImage = e.target.closest("button");
  if (!targetImage) return;

  const currentSlide = modalTrack.querySelector(".current-slide");
  const currentNavImage = modalCarouselNav.querySelector(".current-slide");
  const targetIndex = modalCarouselNavImgs.findIndex(
    (img) => img === targetImage
  );
  const targetSlide = modalSlides[targetIndex];
  moveToSlideModal(modalTrack, currentSlide, targetSlide);
  updateNavImgsModal(currentNavImage, targetImage);
  hideShowArrowsModal(
    modalSlides,
    modalPrevButton,
    modalNextButton,
    targetIndex
  );
});
