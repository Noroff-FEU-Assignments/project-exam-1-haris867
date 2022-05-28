import { getAddedFavourites } from "./utils/favouriteFunctions.js";
import { menuToggle } from "./utils/menuFunction.js";

const favourites = getAddedFavourites();

const divContainer = document.querySelector(".div-container");

const emptyMessage = document.querySelector(".headings h2");

// Display favourited posts

favourites.forEach(function (favourite) {
  emptyMessage.style.display = "none";
  divContainer.innerHTML += `<div class="featured">
                                  <a href="post.html?id=${favourite.id}">
                                    <img src="${favourite.image}" alt="Image of ${favourite.title}">
                                  </a>
                                    <div class="featured-text">
                                      <a href="post.html?id=${favourite.id}" class="featured-heading">
                                        <h3>${favourite.title}</h3>
                                      </a>
                                      </div>
                                                
                                </div>`;
});
