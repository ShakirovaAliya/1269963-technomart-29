const buttonDelivery = document.querySelector(".services-button-delivery");
const buttonGuarantee = document.querySelector(".services-button-guarantee");
const buttonCredit = document.querySelector(".services-button-credit");

const slideDelivery = document.querySelector(".service-slide__item--delivery");
const slideGuarantee = document.querySelector(".service-slide__item--guarantee");
const slideCredit = document.querySelector(".service-slide__item--credit");


buttonGuarantee.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonGuarantee.classList.add("services-button-current");
  buttonDelivery.classList.remove("services-button-current");
  buttonCredit.classList.remove("services-button-current");
  slideDelivery.classList.remove("services-slide-current");
  slideCredit.classList.remove("services-slide-current");
  slideGuarantee.classList.add("services-slide-current");
})

buttonCredit.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonCredit.classList.add("services-button-current");
  buttonGuarantee.classList.remove("services-button-current");
  buttonDelivery.classList.remove("services-button-current");
  slideDelivery.classList.remove("services-slide-current");
  slideGuarantee.classList.remove("services-slide-current");
  slideCredit.classList.add("services-slide-current");
})

buttonDelivery.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonDelivery.classList.add("services-button-current");
  buttonGuarantee.classList.remove("services-button-current");
  buttonCredit.classList.remove("services-button-current");
  slideCredit.classList.remove("services-slide-current");
  slideGuarantee.classList.remove("services-slide-current");
  slideDelivery.classList.add("services-slide-current");
})
