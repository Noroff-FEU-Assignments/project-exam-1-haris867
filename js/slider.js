const apiUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/?acf_format=standard&per_page=12";

async function getPostsforSlider(url) {
  const slidesContainer = document.querySelector(".slides-container");

  const response = await fetch(url);
  console.log(response);
  const posts = await response.json();
  console.log(posts);

  posts.forEach(function (post) {
    const singlePost = post.acf;
    const id = posts.id;

    const mainImage = singlePost.mainImage;
    const title = singlePost.title;
    console.log(mainImage);

    slidesContainer.innerHTML += `<div class="slide">
                                          <div class="slide-post">
                                              <a href="post.html?id=${post.id}">
                                              <img src="${mainImage}" alt="Photo of ${title}" />
                                              </a>
                                              <h4>${title}</h4>
                                              <a href="post.html?id=${post.id}" class="button">
                                              READ NOW
                                              </a>
                                          </div>
                                          </div>`;

    slideShow();
  });
}

function slideShow() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(function (slide, index) {
    if (window.innerWidth > 1000) {
      slide.style.left = `${index * 33.3}%`;
    }
    if (window.innerWidth < 1000) {
      slide.style.left = `${index * 100}%`;
      console.log("100");
    }
  });

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
    console.log(counter);
    slideShow();
    dotsChange();
  });
  previousButton.addEventListener("click", function () {
    counter--;
    console.log(counter);
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
      console.log(i);
      console.log(counter);
    }
  }
}

getPostsforSlider(apiUrl);

const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");
