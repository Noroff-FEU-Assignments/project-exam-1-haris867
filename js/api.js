const divContainer = document.querySelector(".div-container");
const postsUrl =
  "http://localhost/PE1/wp-json/wp/v2/destinations/?acf_format=standard";

async function getPosts(url) {
  const response = await fetch(url);
  console.log(response);
  const postsArray = await response.json();
  console.log(postsArray);

  for (let i = 0; i < postsArray.length; i++) {
    const post = postsArray[i].acf;
    const id = postsArray[i].id;
    console.log(id);

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

    console.log(mainImage);

    divContainer.innerHTML += `<div class="featured">
                                    <a href="post.html?id=${id}">
                                                <img src="${mainImage}" alt="Image of ${title}">
                                                </a>
                                                <div class="featured-text">
                                                    <a href="post.html?id=${id}" class="featured-heading">
                                                    <h3>${title}</h3>
                                                    </a>
                                                <div class="featured-icon"><i class="fa fa-heart-o" aria-hidden="true" title="Add to favourites"></i></div>
                                                </div>
                                                
                                            </div>`;

    // const slidesContainer = document.querySelector(".slides-container");
    // slidesContainer.innerHTML += `<div class="slide">
    //                                 <div class="slide-post">
    //                                     <a href="post.html?id=${id}"><img src="${mainImage}" alt="Photo of ${title}" /></a>
    //                                     <h4>${title}</h4>
    //                                     <a href="post.html?id=${id}" class="slide-button">
    //                                     READ NOW
    //                                     </a>
    //                                 </div>
    //                                 </div>`;

    const heartIcon = document.querySelectorAll(".featured-icon i");

    heartIcon.forEach(function (heart) {
      heart.addEventListener("click", function () {
        heart.classList.toggle("fa-heart-o");
        heart.classList.toggle("fa-heart");
      });
    });
  }
}

getPosts(postsUrl);

const viewMoreButton = document.querySelector(".more-button");
const viewMoreUrl =
  "http://localhost/PE1/wp-json/wp/v2/destinations/?acf_format=standard&per_page=20";

viewMoreButton.addEventListener("click", function () {
  getPosts(viewMoreUrl);
  divContainer.innerHTML = "";
  viewMoreButton.style.display = "none";
  setTimeout(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);
});

{
  /* <div class="slide">
  <div class="slide-post">
    <img src="images/maldives.jpg" alt="Photo of Maldives" />
    <h4>Maldives</h4>
    <a href="posts.html" class="slide-button">
      READ NOW
    </a>
  </div>
</div>; */
}
