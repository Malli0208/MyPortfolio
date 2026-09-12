let index = 0;

function goTo(page) {
  index = page;
  updateSlider();
}

function updateSlider() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
  index++;
  updateSlider();
}

function prev() {
  index--;
  updateSlider();
}
