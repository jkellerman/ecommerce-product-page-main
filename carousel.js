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

// when click left move slides to left
// when click right move slides to right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  // move to the slide
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});
// when click nav indicators move to that slide
