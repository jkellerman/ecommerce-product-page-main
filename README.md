# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![desktop](images/screenshots/screenshot%201.png)
![mobile](images/screenshots/screenshot%202.png)

### Links

- Solution URL: [Solution](https://github.com/jkellerman/ecommerce-product-page-main)
- Live Site URL: [Live Site](https://jkellerman.github.io/ecommerce-product-page-main/)

## My process

### Built with

- HTML5
- SCSS
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

This is my first project building a shopping cart, however there were a number of different challenges in this project, including building a carousel and a modal which took a bit of time to figure out.

I learned a quick and easy way of building a modal using the dialog tag and then adding the showmodal() and close() methods to the appropriate elements and then adding the css property backdrop to add background color behind the modal area. See snippets below. This way is much more efficient than the old the way I was doing this, which was to create a new element to use as a backdrop which can get a bit messy. One thing to point out with using dialog tags is that the modal will have some default styles that you may want to remove. However, after deploying to github and testing on safari using my iphone, i quickly discovered that this is still very new and not compatible with the browser. As a result I reverted back to the old way of doing things. I will keep an eye out to see when this will become compatible with more browsers.

I also learned how to use a media query for JavaScript. In this example, I had a click event on the carousel which would pop up a modal, however, I only wanted this to happen on tablet or desktop screens, so I created a resize event listener which would only pop up the modal in screen sizes with a min-width of 768px. See code snippet below.

```js
hamburger.addEventListener("click", () => {
  mobileNav.showModal();
});

modalCloseBtn.addEventListener("click", () => {
  modal.close();
});
```

```js
const x = window.matchMedia("(min-width: 768px)");
popUp(x);
x.addEventListener("resize", popUp);
```

### Continued development

I would like to build a larger ecommerce store where there are multiple items to choose from that can be added to cart.

### Useful resources

- [CSS Tricks](https://css-tricks.com/working-with-javascript-media-queries/) - This helped me understand how to work with JavaScript media queries
- [Kevin Powell YouTube](https://www.youtube.com/watch?v=hGRzVoaXqJI&list=PL-2rGHvBxh36Bl449sRuOjnT_WjZimeCs&index=16) - This is very quick explanation on a much simpler way to create a modal.
- [Kevin Powell YouTube](https://www.youtube.com/watch?v=VYsVOamdB0g&list=PL-2rGHvBxh36Bl449sRuOjnT_WjZimeCs&index=14&t=1133s) - Excellent demonstration on how to build a carousel.

## Author

- Frontend Mentor - [@jkellerman](https://www.frontendmentor.io/profile/jkellerman)
