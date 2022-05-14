// function percent() {
//   if (window.innerWidth > 1040) {
//     var percentage = 25;
//   } else {
//     var percentage = 100;
//   }
//   console.log(percentage);
// }

// var percentage = percent();

// function checkWidth() {
//   if (window.innerWidth < 1040) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var width = checkWidth();

// TEST

// slides.forEach(function (slide, index) {
//   if (window.innerWidth > 1050) {
//     slide.style.left = `${index * 33.3}%`;
//   }
//   if (window.innerWidth < 1050) {
//     slide.style.left = `${index * 100}%`;
//     console.log("100");
//   }
//
// });

//TEST

// function changeColor() {
//   if (body.style.vW > "1050px") {
//     nextButton.style.backgroundColor = "red";
//   }
// }
// changeColor();

// slides.forEach(function (slide, index) {
//   slide.style.left = `${index * 25}%`;
//   //change to 50% above to make each slide take up half of available sapce in container
// });

// THIS MIGHT BE IT

const dotsContainer = document.querySelector(".slider-dots");

//TEST

// slides.forEach(function (slide, index) {
//   window.addEventListener("resize", function () {
//     if (window.innerWidth > 1000) {
//       slide.style.left = `${index * 33.3}%`;
//     }
//     if (window.innerWidth < 1000) {
//       slide.style.left = `${index * 100}%`;
//       console.log("100");
//     }
//   });
// });

//TEST

function dotsChange(dot) {
  const dots = document.querySelectorAll(".slider-dots div");
  for (var i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
    dots[counter].style.backgroundColor = "#DA2F32";
  }
}

function slideShow() {
  var numberClick = 0;

  if (window.innerWidth > 1050) {
    numberClick = 4;
  }
  if (window.innerWidth < 1050) {
    numberClick = 12;
  }

  if (counter === numberClick) {
    counter = 0;
  }
  if (counter < 0) {
    counter = numberClick - 1;
  }

  // Above code works work single slides

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
