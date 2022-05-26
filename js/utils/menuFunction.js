export function menuToggle() {
  const menuIcon = document.querySelector(".fa-bars");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", function () {
    nav.classList.toggle("visible");
  });
}

menuToggle();
