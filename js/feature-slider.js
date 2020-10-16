const featureRadio = document.querySelectorAll(".sliders > input");
const featureSlider = document.querySelectorAll(".feature-slider");

for (let i = 0; i < featureRadio.length; i++) {
  clickRadio(featureRadio[i]);
};

function clickRadio(data) {
  data.addEventListener("click", function() {
    toggleRadio(data);
  });
};

function toggleRadio(data) {
  for (let i = 0; i < featureRadio.length; i++) {
    if (data.checked == featureRadio[i].checked) {
      featureSlider[i].classList.add("slider-show");
    } else {
      featureSlider[i].classList.remove('slider-show');
    }
  }
};
