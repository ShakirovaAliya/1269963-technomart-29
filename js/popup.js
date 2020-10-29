/* cart popup */

let productList = document.querySelector(".product-list");
var buttonBuy = document.createElement("button");
const сartPopup = document.querySelector(".modal-cart");
let cart = document.querySelector(".menu-item__link--cart");
let bookmark = document.querySelector(".menu-item__link--marks");
const buttonCloseCart = сartPopup.querySelector(".modal-close");


productList.addEventListener("click", function (evt) {
  let target = evt.target;
  if (target.classList.contains("product__action--buy")) {
    evt.preventDefault();
    сartPopup.classList.add("modal-show");
    cart.style.backgroundColor = "#ee3643";
  } else if (target.classList.contains("product__action--add-to-bookmarks")) {
    evt.preventDefault();
    bookmark.style.backgroundColor = "#ee3643";
  };
});

buttonCloseCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  сartPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (сartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      сartPopup.classList.remove("modal-show");
    }
  }
})

/* counter */

let productListModal = document.querySelector(".product-list");
let cartNumber = 0;
let cartCount = document.querySelector(".menu-item__link--cart span");
let markNumber = 0;
let marksCount = document.querySelector(".menu-item__link--marks span");


productListModal.addEventListener("click", function (evt) {
  let target = evt.target;
  if (target.classList.contains("product__action--buy")) {
    cartNumber++;
    cartCount.innerHTML = cartNumber;
  } else if (target.classList.contains("product__action--add-to-bookmarks")) {
    markNumber++;
    marksCount.innerHTML = markNumber;
  };
});

/* menu slider */

const buttonBack = document.querySelector(".back");
const buttonForward = document.querySelector(".forward");
const sliderControl = document.querySelector(".slider-control");
const currentSlider = document.querySelector(".slider__item");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const firstControl = document.querySelector(".first-control");
const secondControl = document.querySelector(".second-control");
firstControl.style.backgroundColor = "#ffffff";


buttonForward.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove("slide-current");
  secondSlide.classList.add("slide-current");
  firstControl.style.backgroundColor = "#ee3643";
  secondControl.style.backgroundColor = "#ffffff";
})

secondControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove("slide-current");
  secondSlide.classList.add("slide-current");
  firstControl.style.backgroundColor = "#ee3643";
  secondControl.style.backgroundColor = "#ffffff";
})

buttonBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlide.classList.add("slide-current");
  secondSlide.classList.remove("slide-current");
  secondControl.style.backgroundColor = "#ee3643";
  firstControl.style.backgroundColor = "#ffffff";
})

firstControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlide.classList.add("slide-current");
  secondSlide.classList.remove("slide-current");
  secondControl.style.backgroundColor = "#ee3643";
  firstControl.style.backgroundColor = "#ffffff";
})


/* services slider */

const buttonDelivery = document.querySelector(".services-button-delivery");
const buttonGuarantee = document.querySelector(".services-button-guarantee");
const buttonCredit = document.querySelector(".services-button-credit");
const slideDelivery = document.querySelector(".service-slide__item--delivery");
const slideGuarantee = document.querySelector(".service-slide__item--guarantee");
const slideCredit = document.querySelector(".service-slide__item--credit");


buttonGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonGuarantee.classList.add("services-button-current");
  buttonDelivery.classList.remove("services-button-current");
  buttonCredit.classList.remove("services-button-current");
  slideDelivery.classList.remove("services-slide-current");
  slideCredit.classList.remove("services-slide-current");
  slideGuarantee.classList.add("services-slide-current");
})

buttonGuarantee.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    buttonGuarantee.classList.add("services-button-current");
    buttonDelivery.classList.remove("services-button-current");
    buttonCredit.classList.remove("services-button-current");
    slideDelivery.classList.remove("services-slide-current");
    slideCredit.classList.remove("services-slide-current");
    slideGuarantee.classList.add("services-slide-current");
  }
})

buttonCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonCredit.classList.add("services-button-current");
  buttonGuarantee.classList.remove("services-button-current");
  buttonDelivery.classList.remove("services-button-current");
  slideDelivery.classList.remove("services-slide-current");
  slideGuarantee.classList.remove("services-slide-current");
  slideCredit.classList.add("services-slide-current");
})

buttonCredit.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    buttonCredit.classList.add("services-button-current");
    buttonGuarantee.classList.remove("services-button-current");
    buttonDelivery.classList.remove("services-button-current");
    slideDelivery.classList.remove("services-slide-current");
    slideGuarantee.classList.remove("services-slide-current");
    slideCredit.classList.add("services-slide-current");
  }
})

buttonDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonDelivery.classList.add("services-button-current");
  buttonGuarantee.classList.remove("services-button-current");
  buttonCredit.classList.remove("services-button-current");
  slideCredit.classList.remove("services-slide-current");
  slideGuarantee.classList.remove("services-slide-current");
  slideDelivery.classList.add("services-slide-current");
})

buttonDelivery.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    buttonDelivery.classList.add("services-button-current");
    buttonGuarantee.classList.remove("services-button-current");
    buttonCredit.classList.remove("services-button-current");
    slideCredit.classList.remove("services-slide-current");
    slideGuarantee.classList.remove("services-slide-current");
    slideDelivery.classList.add("services-slide-current");
  }
})


/* map popup */

const map = document.querySelector(".contacts__link--map");
const mapPopup = document.querySelector(".modal-map");
const buttonCloseMap = mapPopup.querySelector(".modal-close");
const bigMap = map.querySelector(".contacts__link-big-map");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.style.display = "none";
  mapPopup.classList.add("modal-show");
});

map.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13)
    evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

buttonCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})

/* message map */

const writeUs = document.querySelector(".contacts__link--help");
const messagePopup = document.querySelector(".modal-message");
const form = messagePopup.querySelector("form");
const buttonClose = messagePopup.querySelector(".modal-close");
const client = messagePopup.querySelector("[name=client]");
const messageMail = messagePopup.querySelector("[name=message-email]");
const messageText = messagePopup.querySelector("[name=message-text]");
let clientStorage = "";
let messageStorage = "";
let isStorageSupport = true;

try {
  clientStorage = localStorage.getItem("client");
  messageStorage = localStorage.getItem("messageMail");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  client.focus();
   if(clientStorage) {
    client.value = clientStorage;
  } else if(messageStorage) {
    messageMail.value = messageStorage;
  }
});

form.addEventListener("submit", function (evt) {
  if (!client.value || !messageMail.value || !messageText.value) {
    evt.preventDefault();
    messagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("client", client.value);
      localStorage.setItem("messageMail", messageMail.value);
    }
  }
})

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
    }
  }
})
