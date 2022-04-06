const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const addToCartBtn = document.querySelector(".addtocart__btn");
const cartBubble = document.querySelector(".cart__bubble");

plus.addEventListener("click", () => {
  // add amount with 10 as max
  if (amount.innerText === "10") return;
  if (amount >= "0") {
    amount.innerText++;
  }
});

minus.addEventListener("click", () => {
  // minus amount
  if (amount.innerText === "0") return;
  if (amount > "0") {
    amount.innerText--;
  }
});

addToCartBtn.addEventListener("click", () => {
  // add amount to cart
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
