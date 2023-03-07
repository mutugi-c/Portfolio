const hamburgerIcon = document.querySelector(".hamburger-icon");
const pageMenu = document.querySelector(".nav__list");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    pageMenu.classList.toggle("active");
});

