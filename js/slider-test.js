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

//TEST

const slidesContainer = document.querySelector(".slides-container");
const postUrl =
  "http://localhost/PE1/wp-json/wp/v2/destinations/?acf_format=standard&per_page=20";

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i].acf;
    const id = posts[i].id;

    const title = post.title;
    const mainImage = post.mainImage;
    const mainText = post.mainText;
    const activity1Image = post.activity1Image;
    const activity1Title = post.activity1Title;
    const activity1Text = post.activity1Text;
    const activity2Image = post.activity2Image;
    const activity2Title = post.activity2Title;
    const activity2Text = post.activity2Text;
    const activity3Image = post.activity3Image;
    const activity3Title = post.activity3Title;
    const activity3Text = post.activity3Text;

    console.log(post);
    slidesContainer.innerHTML += `<div class="slide">
                                    <div class="slide-post">
                                        <a href="post.html?id=${id}"><img src="${mainImage}" alt="Photo of ${title}" /></a>
                                        <h4>${title}</h4>
                                        <a href="post.html?id=${id}" class="slide-button">
                                        READ NOW
                                        </a>
                                    </div>
                                    </div>`;
    const slides = document.querySelectorAll(".slide");
    const nextButton = document.querySelector(".next-button");
    const previousButton = document.querySelector(".previous-button");
    const body = document.querySelector("body");

    slides.forEach(function (slide, index) {
      if (window.innerWidth > 1050) {
        slide.style.left = `${index * 33.3}%`;
      }
      if (window.innerWidth < 1050) {
        slide.style.left = `${index * 100}%`;
        console.log("100");
      }
      //change to 50% above to make each slide take up half of available sapce in container
    });
    const dotsContainer = document.querySelector(".slider-dots");

    slides.forEach(function (slide, index) {
      window.addEventListener("resize", function () {
        if (window.innerWidth > 1000) {
          slide.style.left = `${index * 33.3}%`;
        }
        if (window.innerWidth < 1000) {
          slide.style.left = `${index * 100}%`;
          console.log("100");
        }
      });
    });

    var counter = 0;

    nextButton.addEventListener("click", function () {
      counter++;
      slideShow();
      dotsChange();
    });
    previousButton.addEventListener("click", function () {
      counter--;
      slideShow();
      dotsChange();
    });

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
      console.log(counter);

      slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
    }
  }
}

getPosts(postUrl);

//TESTING

// const slides = document.querySelectorAll(".slide");
// const nextButton = document.querySelector(".next-button");
// const previousButton = document.querySelector(".previous-button");
// const body = document.querySelector("body");

// slides.forEach(function (slide, index) {
//   if (window.innerWidth > 1050) {
//     slide.style.left = `${index * 33.3}%`;
//   }
//   if (window.innerWidth < 1050) {
//     slide.style.left = `${index * 100}%`;
//     console.log("100");
//   }
//   //change to 50% above to make each slide take up half of available sapce in container
// });

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

// const dotsContainer = document.querySelector(".slider-dots");

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

// function dotsChange(dot) {
//   const dots = document.querySelectorAll(".slider-dots div");
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].style.backgroundColor = "white";
//     dots[counter].style.backgroundColor = "#DA2F32";
//     console.log(i);
//     console.log(counter);
//   }
// }

// var counter = 0;

// nextButton.addEventListener("click", function () {
//   counter++;
//   slideShow();
//   dotsChange();
// });
// previousButton.addEventListener("click", function () {
//   counter--;
//   slideShow();
//   dotsChange();
// });

// function slideShow() {
//   var numberClick = 0;

//   if (window.innerWidth > 1050) {
//     numberClick = 4;
//   }
//   if (window.innerWidth < 1050) {
//     numberClick = 12;
//   }

//   if (counter === numberClick) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = numberClick - 1;
//   }

//   // Above code works work single slides

//   slides.forEach(function (slide) {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// }

// MENU

const menuIcon = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("visible");
});
