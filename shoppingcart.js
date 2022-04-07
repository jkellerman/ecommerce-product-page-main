const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const addToCartBtn = document.querySelector(".addtocart__btn");
const cartBubble = document.querySelector(".cart__bubble");
const cart = document.querySelector(".cart");
const cartWindow = document.querySelector(".cart__window");

// add amount with 10 as max
plus.addEventListener("click", () => {
  if (amount.innerText === "10") return;
  if (amount >= "0") {
    amount.innerText++;
  }
});
// minus amount
minus.addEventListener("click", () => {
  if (amount.innerText === "0") return;
  if (amount > "0") {
    amount.innerText--;
  }
});
// add amount to cart
addToCartBtn.addEventListener("click", () => {
  let cartTotal = cartBubble;
  let currentAmount = amount.innerText;
  if (currentAmount > "0") {
    cartTotal.innerText = currentAmount;
    cartBubble.style.display = "block";
  } else {
    cartTotal.innerText = "0";
    cartBubble.style.display = "none";
  }
});

// open cart window when cart is clicked

cart.addEventListener("click", () => {
  cartWindow.classList.toggle("hide__cart");
});
