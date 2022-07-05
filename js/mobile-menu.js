const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".hamburger__menu");
const closeMenu = document.querySelector(".hamburger__close-btn");

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hamburger__menu--active");
});

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("hamburger__menu--active");
});
