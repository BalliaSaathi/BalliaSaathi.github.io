let cartCount = 0;

document.querySelectorAll(".product-card").forEach(card => {
  const plusBtn = card.querySelector(".plus");
  const minusBtn = card.querySelector(".minus");
  const qtySpan = card.querySelector(".qty");
  const addBtn = card.querySelector(".add-to-cart");

  let quantity = 1;

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtySpan.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtySpan.textContent = quantity;
    }
  });

  addBtn.addEventListener("click", () => {
    cartCount += quantity;
    document.getElementById("cart-count").textContent = cartCount;
    alert(quantity + " item(s) added to cart");
  });
});
