  const map = document.querySelector(".contacts__link--map");
  const popupMap = document.querySelector(".modal-map");
  const buttonCloseMap = popupMap.querySelector(".modal-close");

  map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });

  buttonCloseMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
      if(popupMap.classList.contains("modal-show")) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
      }
    }
  })

