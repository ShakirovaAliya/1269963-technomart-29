  let productList = document.querySelector(".product-list");
  var buttonBuy = document.createElement("button");
  const сartPopup = document.querySelector(".modal-cart");
  let cart = document.querySelector(".menu-item__link--cart");
  let bookmark = document.querySelector(".menu-item__link--marks");
  const buttonCloseCart = сartPopup.querySelector(".modal-close");


  productList.addEventListener("click", function(evt) {
    let target = evt.target;
    if(target.classList.contains("product__action--buy")) {
      evt.preventDefault();
      target.replaceWith(buttonBuy);
      buttonBuy.classList.add("new-button");
      сartPopup.classList.add("modal-show");
      cart.style.backgroundColor = "#ee3643";
      buttonBuy.replaceWith(target);
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
