const hamburger = document.querySelector(".hamburger");
const mobile_nav_links = document.querySelector(".mobile-nav-links");
const overlay = document.querySelector(".overlay");

hamburger.onclick = () => {
  hamburger.classList.toggle("show");
  mobile_nav_links.classList.toggle("show-links");
  overlay.classList.toggle("active");
};
