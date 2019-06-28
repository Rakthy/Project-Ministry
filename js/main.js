
const slide = document.querySelector(".hamburger-slide");
const mainNav = document.querySelector(".main-nav");

let showMenu = false;
slide.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    slide.classList.add("open");
    mainNav.classList.add("headSlide");
    showMenu = true;
  } else {
    slide.classList.remove("open");
    mainNav.classList.remove("headSlide");
    showMenu = false;
  }
}

//image slider//
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

next.addEventListener("click", e => {
  nextSlide();
});
prev.addEventListener("click", e => {
  prevSlide();
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
