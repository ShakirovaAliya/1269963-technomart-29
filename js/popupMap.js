  const map = document.querySelector(".contacts__link--map");
  const mapPopup = document.querySelector(".modal-map");
  const buttonCloseMap = mapPopup.querySelector(".modal-close");

  map.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  buttonCloseMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
      if(mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  })

