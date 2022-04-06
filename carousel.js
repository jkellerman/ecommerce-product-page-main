const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const carouselNav = document.querySelector(".carousel__nav");
const carouselNavImgs = Array.from(carouselNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateNavImgs = (currentImg, targetImg) => {
  currentImg.classList.remove("current-slide");
  targetImg.classList.add("current-slide");
};

// when click left move slides to left
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentNavImage = carouselNav.querySelector(".current-slide");
  const prevNavImage = currentNavImage.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  updateNavImgs(currentNavImage, prevNavImage);
});
// when click right move slides to right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentNavImage = carouselNav.querySelector(".current-slide");
  const nextNavImage = currentNavImage.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  updateNavImgs(currentNavImage, nextNavImage);
});
// when click nav indicators move to that slide

carouselNav.addEventListener("click", (e) => {
  // what indicator was clicked on
  const targetImage = e.target.closest("button");
  if (!targetImage) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentNavImage = carouselNav.querySelector(".current-slide");
  const targetIndex = carouselNavImgs.findIndex((img) => img === targetImage);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateNavImgs(currentNavImage, targetImage);
});
