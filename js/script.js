/* Radio Sliders */

const galleryMainSlider = document.querySelector(".gallery-sliders");
let galleryRadio = document.querySelectorAll(".gallery-filter input");
let gallerySlider = document.querySelectorAll(".gallery-slider");
let galleryItem = document.querySelectorAll(".gallery-radio-button");

const serviceMainSlider = document.querySelector(".service-sliders");
let serviceRadio = document.querySelectorAll(".service-filter input");
let serviceSlider = document.querySelectorAll(".service-slider");
let serviceItem = document.querySelectorAll(".service-item");

for (let i = 0; i < galleryRadio.length; i++) {
  clickRadio(galleryRadio[i]);
};

for (let i = 0; i < serviceRadio.length; i++) {
  clickRadio(serviceRadio[i]);
};

function clickRadio(data) {
  data.addEventListener("click", function() {
    toggleRadio(data);
  });
};

function toggleRadio(data) {

  if(data.name === "gallery-group") {
    galleryMainSlider.classList.remove("gallery-perforator");
    galleryMainSlider.classList.remove("gallery-drill");

    for (let i = 0; i < galleryRadio.length; i++) {
      if (data.checked === galleryRadio[i].checked) {
        galleryMainSlider.classList.toggle(data.value);
        gallerySlider[i].classList.add("gallery-slider-active");
        galleryItem[i].classList.add("gallery-radio-active");
      } else {
        gallerySlider[i].classList.remove('gallery-slider-active');
        galleryItem[i].classList.remove("gallery-radio-active");
      }
    }
  }

  if(data.name === "service-group") {
    serviceMainSlider.classList.remove("service-delivery");
    serviceMainSlider.classList.remove("service-guarantee");
    serviceMainSlider.classList.remove("service-discount");

    for (let i = 0; i < serviceRadio.length; i++) {
      if (data.checked === serviceRadio[i].checked) {
        serviceMainSlider.classList.toggle(data.value);
        serviceSlider[i].classList.add("service-slider-active");
        serviceItem[i].classList.add("service-item-active");
      } else {
        serviceSlider[i].classList.remove('service-slider-active');
        serviceItem[i].classList.remove("service-item-active");
      }
    }
  }

};

/* Map PopUp */

const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    }
  }
});

/* FeedBack PopUp */

const feedbackLink = document.querySelector(".contact-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

const feedbackForm = feedbackPopup.querySelector(".modal-feedback-form");
let feedbackName = feedbackPopup.querySelector(".modal-feedback-name");
let feedbackEmail = feedbackPopup.querySelector(".modal-feedback-email");
let feedbackMessage = feedbackPopup.querySelector(".modal-feedback-message");

let isNameSupport = true;
let name = "";

try {
  name = localStorage.getItem("name");
} catch (err) {
  isNameSupport = false;
}

let isEmailSupport = true;
let email = "";

try {
  email = localStorage.getItem("email");
} catch (err) {
  isEmailSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-feedback-show");
  
  if (name && email) {
    feedbackName.value = name;
    feedbackEmail.value = email;
    feedbackMessage.focus();
  } else if (name && !email) {
    feedbackName.value = name;
    feedbackEmail.focus();
  }else if (email && !name) {
    feedbackEmail.value = email;
    feedbackName.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-feedback-show");
  feedbackPopup.classList.remove("modal-feedback-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if ( (!feedbackName.value || !feedbackEmail.value) || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-feedback-error");
  } else {
    if (isNameSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
    if (isEmailSupport) {
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-feedback-show");
      feedbackPopup.classList.remove("modal-feedback-error");
    }
  }
});

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
