let number = 0;
const markLink = document.querySelector(".product__action--add-to-bookmarks");
const markCounter = document.querySelector(".menu-item__link--marks span");

markLink.onclick = function () {
  if (number <= 100) {
    number++;
    markCounter.innerHTML = number;
    markCounter.value = number;
}
};
