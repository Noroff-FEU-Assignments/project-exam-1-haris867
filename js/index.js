import { menuToggle } from "./utils/menuFunction.js";

const apiUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/?acf_format=standard&per_page=12";
const slidesContainer = document.querySelector(".slides-container");

// Get posts to display in slider

async function getPostsforSlider(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(function (post) {
      const singlePost = post.acf;
      const id = posts.id;

      const mainImage = singlePost.mainImage;
      const title = singlePost.title;

      slidesContainer.innerHTML += `<div class="slide">
                                          <div class="slide-post">
                                              <a href="post.html?id=${post.id}">
                                              <img src="${mainImage}" alt="Photo of ${title}" />
                                              </a>
                                              <h4>${title}</h4>
                                              <a href="post.html?id=${post.id}" class="button button-effect">
                                              READ NOW
                                              </a>
                                          </div>
                                          </div>`;

      slideShow();
    });
  } catch (error) {
    slidesContainer.innerHTML = `<div><p>An error occured</p></div>`;
  }
}

// Slider functionality + responsiveness

function slideShow() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(function (slide, index) {
    if (window.innerWidth > 1000) {
      slide.style.left = `${index * 33.3}%`;
    }
    if (window.innerWidth < 1000) {
      slide.style.left = `${index * 100}%`;
    }
  });

  slides.forEach(function (slide, index) {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000) {
        slide.style.left = `${index * 33.3}%`;
      }
      if (window.innerWidth < 1000) {
        slide.style.left = `${index * 100}%`;
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
  function slideShow() {
    var numberClick = 0;

    if (window.innerWidth > 1000) {
      numberClick = 4;
    }
    if (window.innerWidth < 1000) {
      numberClick = 12;
    }

    if (counter === numberClick) {
      counter = 0;
    }
    if (counter < 0) {
      counter = numberClick - 1;
    }

    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  function dotsChange(dot) {
    const dots = document.querySelectorAll(".slider-dots div");
    for (var i = 0; i < dots.length; i++) {
      dots[i].style.backgroundColor = "white";
      dots[counter].style.backgroundColor = "#DA2F32";
    }
  }
}

getPostsforSlider(apiUrl);

const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");
