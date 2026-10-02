let current = 0;

const container = document.querySelector(".container");
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

// ✅ BUTTON NAVIGATION (FIXED)
function goTo(index) {
  if (index < 0 || index >= totalPages) return;

  current = index;

  container.scrollTo({
    top: pages[index].offsetTop,
    behavior: "smooth"
  });
}

// ✅ TOUCH SWIPE (VERTICAL)
let startY = 0;
let endY = 0;

container.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

container.addEventListener("touchend", (e) => {
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  let diff = startY - endY;

  if (diff > 50 && current < totalPages - 1) {
    current++;
    goTo(current);
  }

  if (diff < -50 && current > 0) {
    current--;
    goTo(current);
  }
}

// ✅ SCROLL TRACKING (FIXED)
container.addEventListener("scroll", () => {
  let scrollPos = container.scrollTop;

  pages.forEach((page, index) => {
    if (page.offsetTop <= scrollPos + 100) {
      current = index;
    }
  });
});

// 🔥 ANALOG CLOCK
function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  document.querySelector(".second").style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

  document.querySelector(".minute").style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

  document.querySelector(".hour").style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
