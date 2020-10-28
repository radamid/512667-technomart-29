/* Basket PopUp */

const basketPopup = document.querySelector(".modal-basket");
const basketClose = basketPopup.querySelector(".modal-close");
const basketLink = document.querySelector(".basket-link");
const basketSpan = document.querySelectorAll(".basket-link span")[1];

let basketButton = document.querySelectorAll(".basket-button");
let basket = 0;

for (let i = 0; i < basketButton.length; i++) {
  basketButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basket = parseInt(basketSpan.textContent) + 1;
    basketSpan.textContent = basket;
    if (!basketLink.classList.contains("basket-link-active")) {
      basketLink.classList.add("basket-link-active");
    }
    basketPopup.classList.add("modal-basket-show");
  });
}

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-basket-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-basket-show");
    }
  }
});

/* Stop PopUp */

const stopPopup = document.querySelector(".modal-stop");
const stopClose = stopPopup.querySelector(".modal-close");

let currentPage = window.location.href;
let pageLink = document.querySelectorAll("a[href]");

for (let i = 0; i < pageLink.length; i++) {
  if(pageLink[i].href === currentPage) {
    pageLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      stopPopup.classList.add("modal-stop-show");
    });
  }
}

stopClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  stopPopup.classList.remove("modal-stop-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (stopPopup.classList.contains("modal-stop-show")) {
      evt.preventDefault();
      stopPopup.classList.remove("modal-stop-show");
    }
  }
});
