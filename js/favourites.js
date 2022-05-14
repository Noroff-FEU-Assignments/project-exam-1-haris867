// HEART ICON

const heartIcon = document.querySelectorAll(".featured-icon i");

heartIcon.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-heart-o");
    heart.classList.toggle("fa-heart");
    console.log("test");
  });
});
