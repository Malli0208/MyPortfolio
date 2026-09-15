let current = 0;
const slider = document.getElementById("slider");
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

let startX = 0;
let endX = 0;

// TOUCH START
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// TOUCH END
slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  let diff = startX - endX;

  // 👉 FIRST PAGE (only left swipe allowed)
  if (current === 0) {
    if (diff > 50) current++;
  }

  // 👉 LAST PAGE (only right swipe allowed)
  else if (current === totalPages - 1) {
    if (diff < -50) current--;
  }

  // 👉 MIDDLE PAGES (both directions)
  else {
    if (diff > 50) current++;
    if (diff < -50) current--;
  }

  updateSlide();
}

function updateSlide() {
  slider.style.transform = `translateX(-${current * 100}%)`;
}

// ✅ HOME BUTTON SUPPORT
function goTo(pageIndex) {
  current = pageIndex;
  updateSlide();
}

/* OPTIONAL: Desktop drag support */
let isDown = false;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
});

slider.addEventListener("mouseup", (e) => {
  if (!isDown) return;
  endX = e.clientX;
  handleSwipe();
  isDown = false;
});
