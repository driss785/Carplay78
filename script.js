document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
