document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (
      !targetElement.closest(".navbar") &&
      !targetElement.closest(".navbar-nav") &&
      navbarNav.classList.contains("active")
    ) {
      navbarNav.classList.remove("active");
    }
  });
});
