let productListModal = document.querySelector(".product-list");
let cartNumber = 0;
let cartCount = document.querySelector(".menu-item__link--cart span");
let markNumber = 0;
let marksCount = document.querySelector(".menu-item__link--marks span");


productListModal.addEventListener("click", function(evt) {
  let target = evt.target;
  if(target.classList.contains("product__action--buy")) {
    cartNumber++;
    cartCount.innerHTML = cartNumber;
  } else if(target.classList.contains("product__action--add-to-bookmarks")) {
    markNumber++;
    marksCount.innerHTML = markNumber;
  };
});

