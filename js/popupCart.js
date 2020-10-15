  const buy = document.querySelectorAll(".product__action--buy");
  const mark = document.querySelectorAll(".product__action--add-to-bookmarks");
  const сartPopup = document.querySelector(".modal-cart");
  const productNumber = 100;
  const buttonCloseCart = сartPopup.querySelector(".modal-close");
  const cart = document.querySelector(".menu-item__link--cart");
  const bookmark = document.querySelector(".menu-item__link--marks");

  for (i=0; i <= productNumber; i++) {
    buy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      сartPopup.classList.add("modal-show");
      cart.style.backgroundColor = "#ee3643";
    });

    buttonCloseCart.addEventListener("click", function(evt) {
      evt.preventDefault();
      сartPopup.classList.remove("modal-show");
   });

    mark[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      bookmark.style.backgroundColor = "#ee3643";
    });
  }

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (сartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        сartPopup.classList.remove("modal-show");
      }
    }
  })

