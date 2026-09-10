let index = 0;

const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

function update() {
  const pageWidth = document.querySelector(".wrapper").clientWidth;

  slider.style.transform = `translateX(-${index * pageWidth}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function next() {
  if (index < 5) {
    index++;
    update();
  }
}

function prev() {
  if (index > 0) {
    index--;
    update();
  }
}

window.onload = update;