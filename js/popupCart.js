  const buy = document.querySelectorAll(".product__action--buy");
  const mark = document.querySelectorAll(".product__action--add-to-bookmarks");
  const popupCart = document.querySelector(".modal-cart");
  const productNumber = 100;
  const buttonCloseCart = popupCart.querySelector(".modal-close");
  const cart = document.querySelector(".menu-item__link--cart");
  const bookmark = document.querySelector(".menu-item__link--marks");
  for (i=0; i <= productNumber; i++) {
    buy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popupCart.classList.add("modal-show");
      cart.style.backgroundColor = "#ee3643";
    }
  )
    mark[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      bookmark.style.backgroundColor = "#ee3643";
    }
  )

    buttonCloseCart.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupCart.classList.remove("modal-show");
     })
  }

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popupCart.classList.contains("modal-show")) {
        evt.preventDefault();
        popupCart.classList.remove("modal-show");
      }
    }
  })
