  let productList = document.querySelector(".product-list");

  let catalogProductList = document.querySelector(".catalog-products__list");
  let buy = document.querySelectorAll(".product__action--buy");
  let mark = document.querySelectorAll(".product__action--add-to-bookmarks");
  const сartPopup = document.querySelector(".modal-cart");
  const productNumber = 100;
  const buttonCloseCart = сartPopup.querySelector(".modal-close");
  let cart = document.querySelector(".menu-item__link--cart");
  let bookmark = document.querySelector(".menu-item__link--marks");


  productList.addEventListener("click", function(evt) {
    let target = evt.target;
    if(target.classList.contains("product__action--buy")) {
      сartPopup.classList.add("modal-show");
      cart.style.backgroundColor = "#ee3643";
    } else if(target.classList.contains("product__action--add-to-bookmarks")) {
      bookmark.style.backgroundColor = "#ee3643";
    };
  });


  buttonCloseCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    сartPopup.classList.remove("modal-show");
  });


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (сartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      сartPopup.classList.remove("modal-show");
    }
  }
})
