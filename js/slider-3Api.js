// const apiUrl =
//   "http://localhost/PE1/wp-json/wp/v2/destinations/?acf_format=standard&per_page=12";

// async function getPostsforSlider(url) {
//   const slidesContainer = document.querySelector(".slides-container");

//   const response = await fetch(url);
//   console.log(response);
//   const posts = await response.json();
//   console.log(posts);

//   posts.forEach(function (post) {
//     const singlePost = post.acf;
//     const id = posts.id;

//     const mainImage = singlePost.mainImage;
//     const title = singlePost.title;
//     console.log(mainImage);

//     slidesContainer.innerHTML += `<div class="slide">
//                                           <div class="slide-post">
//                                               <a href="post.html?id=${post.id}">
//                                               <img src="${mainImage}" alt="Photo of ${title}" />
//                                               </a>
//                                               <h4>${title}</h4>
//                                               <a href="post.html?id=${post.id}" class="slide-button">
//                                               READ NOW
//                                               </a>
//                                           </div>
//                                           </div>`;
//   });
// }

// getPostsforSlider(apiUrl);

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
