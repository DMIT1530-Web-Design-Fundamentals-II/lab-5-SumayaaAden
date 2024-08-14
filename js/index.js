window.addEventListener("scroll", function () {
  const stickyNav = document.querySelector(".sticky-nav");
  const stickyPoint = 88;

  if (window.scrollY > stickyPoint) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
});
