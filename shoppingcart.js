const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const addToCartBtn = document.querySelector(".addtocart__btn");
const cartBubble = document.querySelector(".cart__bubble");
const cart = document.querySelector(".cart");
const cartWindow = document.querySelector(".cart__window");
const emptyCart = document.querySelector(".empty-cart__container");
const cartTotal = cartBubble;
const cartContainer = document.querySelector(".cart__container");
const deleteBtn = document.querySelector(".cart__delete");

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
  const currentAmount = amount.innerText;
  const itemTotal = document.querySelector(".item__total");
  const itemPrice = document.querySelector(".cart__price");
  const totalPrice = document.querySelector(".cart__total");
  if (currentAmount > "0") {
    cartTotal.innerText = currentAmount;
    cartBubble.style.animation =
      "appear 0.45s cubic-bezier(0.52, -0.07, 0.42, 0.83) 1 normal backwards";
    cartBubble.style.display = "block";
    emptyCart.classList.add("hide");
    cartContainer.classList.remove("hide");
    itemTotal.innerText = `x${currentAmount}`;
    const removeSign = itemPrice.innerText.replace(/\£/g, "");
    const convertToInt = parseInt(removeSign);
    const newTotal = convertToInt * currentAmount;
    totalPrice.innerText = `£${newTotal.toFixed(2)}`;
  } else {
    removeItems();
  }
});

// open cart window when cart is clicked

cart.addEventListener("click", () => {
  cartWindow.classList.toggle("hide__cart");
});

// remove items when delete button is clicked

deleteBtn.addEventListener("click", () => {
  removeItems();
});

// remove items from cart

export function removeItems() {
  cartTotal.innerText = "0";
  emptyCart.classList.remove("hide");
  cartContainer.classList.add("hide");
  cartBubble.style.animation =
    "disappear 0.45s cubic-bezier(0.52, -0.07, 0.42, 0.83) 1 normal forwards";
}
