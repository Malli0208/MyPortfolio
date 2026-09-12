let current = 0;
const slider = document.getElementById("slider");
const totalPages = document.querySelectorAll(".page").length;

function updateSlide() {
  slider.style.transform = `translateX(-${current * 100}%)`;
}

function next() {
  if (current < totalPages - 1) {
    current++;
    updateSlide();
  }
}

function prev() {
  if (current > 0) {
    current--;
    updateSlide();
  }
}

function goTo(page) {
  current = page;
  updateSlide();
}
