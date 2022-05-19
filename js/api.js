import { getAddedFavourites } from "./utils/favouriteFunctions.js";
const divContainer = document.querySelector(".div-container");
const postsUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/?acf_format=standard";

const menuIcon = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("visible");
});

async function getPosts(url) {
  const response = await fetch(url);
  const postsArray = await response.json();

  const favourites = getAddedFavourites();

  for (let i = 0; i < postsArray.length; i++) {
    const post = postsArray[i].acf;
    const id = postsArray[i].id;

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

    const favourites = getAddedFavourites();

    var favouriteClass = "fa-heart";

    const isFavouriteAdded = favourites.find(function (fav) {
      return fav.title === title;
    });
    console.log(isFavouriteAdded);

    if (!isFavouriteAdded) {
      favouriteClass = "fa-heart-o";
    }

    divContainer.innerHTML += `<div class="featured">
                                  <a href="post.html?id=${id}">
                                    <img src="${mainImage}" alt="Image of ${title}">
                                  </a>
                                    <div class="featured-text">
                                      <a href="post.html?id=${id}" class="featured-heading">
                                        <h3>${title}</h3>
                                      </a>
                                        <div class="featured-icon">
                                        <i class="fa ${favouriteClass}" aria-hidden="true" title="Add to favourites" data-id="${id}" data-image="${mainImage}" data-title="${title}"></i>
                                        </div>
                                      </div>
                                                
                                </div>`;

    divContainer.classList.remove("loading");
    const viewMoreButtonContainer = document.querySelector(
      ".more-button-container"
    );
    viewMoreButtonContainer.style.display = "flex";
    handleClick();
  }
}

getPosts(postsUrl);

function handleClick() {
  const favouriteButton = document.querySelectorAll(".featured-icon i");

  favouriteButton.forEach(function (heart) {
    heart.addEventListener("click", function () {
      heart.classList.toggle("fa-heart-o");
      heart.classList.toggle("fa-heart");

      const image = this.dataset.image;
      const title = this.dataset.title;
      const id = this.dataset.id;

      const currentFavourites = getAddedFavourites();

      const alreadyAdded = currentFavourites.find(function (fav) {
        return fav.title === title;
      });

      console.log(alreadyAdded);

      if (!alreadyAdded) {
        const post = { title: title, id: id, image: image };
        currentFavourites.push(post);
        addFavourites(currentFavourites);
      } else {
        const newFavourites = currentFavourites.filter(function (fav) {
          return fav.title !== title;
        });
        addFavourites(newFavourites);
      }
    });
  });
}

function addFavourites(fav) {
  localStorage.setItem("favourites", JSON.stringify(fav));
}

//View more-button

const viewMoreButton = document.querySelector(".more-button");
const viewMoreUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/?acf_format=standard&per_page=20";

viewMoreButton.addEventListener("click", function () {
  getPosts(viewMoreUrl);
  divContainer.innerHTML = "";
  viewMoreButton.style.display = "none";
  setTimeout(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);
});

// Search function

const searchButton = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");

searchButton.addEventListener("click", function () {
  const searchUrl =
    "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/?acf_format=standard&per_page=20&search=" +
    searchInput.value;
  console.log(searchInput.value);
  divContainer.classList.add("loading");
  viewMoreButton.style.display = "none";
  getPosts(searchUrl);
  divContainer.innerHTML = "";
});

searchInput.onkeyup = function (event) {
  console.log(event);
  if (event.keyCode === 13) {
    searchButton.click();
  }
};
