const buttonBack = document.querySelector(".back");
const buttonForward = document.querySelector(".forward");
const sliderControl= document.querySelector(".slider-control");
const currentSlider = document.querySelector(".slider__item");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const firstControl = document.querySelector(".first-control");
const secondControl = document.querySelector(".second-control");
firstControl.style.backgroundColor = "#ffffff";


buttonForward.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.remove("slide-current");
  secondSlide.classList.add("slide-current");
  firstControl.style.backgroundColor = "#ee3643";
  secondControl.style.backgroundColor = "#ffffff";
})

secondControl.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.remove("slide-current");
  secondSlide.classList.add("slide-current");
  firstControl.style.backgroundColor = "#ee3643";
  secondControl.style.backgroundColor = "#ffffff";
})

buttonBack.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.add("slide-current");
  secondSlide.classList.remove("slide-current");
  secondControl.style.backgroundColor = "#ee3643";
  firstControl.style.backgroundColor = "#ffffff";
})

firstControl.addEventListener("click", function(evt) {
  evt.preventDefault();
  firstSlide.classList.add("slide-current");
  secondSlide.classList.remove("slide-current");
  secondControl.style.backgroundColor = "#ee3643";
  firstControl.style.backgroundColor = "#ffffff";
})



