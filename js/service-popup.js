const serviceItem = document.querySelectorAll(".service-item");
const serviceSlider = document.querySelectorAll(".service-slider");

for (let i = 0; i < serviceItem.length; i++) {
  clickItem(serviceItem[i]);
};

function clickItem(data) {
  data.addEventListener("click", function() {
    toggleItem(data);
  });
};

function toggleItem(data) {
  if(!data.classList.contains("service-active")) {
    for (let i = 0; i < serviceItem.length; i++) {
      serviceItem[i].classList.remove('service-active');
    }
    data.classList.add('service-active');
    for (let i = 0; i < serviceItem.length; i++) {
      serviceSlider[i].classList.remove('service-show');
      if (serviceItem[i].classList.contains("service-active")) {
        serviceSlider[i].classList.add("service-show");
      }
    }
  }
};
