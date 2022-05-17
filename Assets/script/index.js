const menuBtn = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-mobile-menu");
const menuNav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".menu-container .mobile-menu");
const logoMobile = document.querySelector(".menu-container .logo-mobile");
const headerTag = document.querySelector("header");
const menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click", () => {
  menuNav.classList.add("mobile");
  hamburger.style.display = "none";
  logoMobile.style.display = "none";
  headerTag.style.backgroundColor = "transparent";
  menuContainer.style.margin = "0";
});

closeMenuBtn.addEventListener("click", () => {
  menuNav.classList.remove("mobile");
  hamburger.style.display = "block";
  logoMobile.style.display = "block";
  headerTag.style.backgroundColor = "#ffffff";
  menuContainer.style.margin = "1rem 2rem";
});
