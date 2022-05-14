const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
const headingContainer = document.querySelector(".headings");
const postContainer = document.querySelector(".page");
const postUrl =
  "http://localhost/PE1/wp-json/wp/v2/destinations/" +
  id +
  "?acf_format=standard";
console.log(id);

async function getPost(url) {
  const response = await fetch(url);

  const post = await response.json();
  const postContent = post.acf;
  console.log(postContent);

  headingContainer.innerHTML = `<h1>${postContent.title}</h1>`;

  postContainer.innerHTML = `<div class="featured">
                                <img src="${postContent.mainImage}" alt="Photo of ${postContent.title}">
                                ${postContent.mainText}

                                <img src="${postContent.activity1Image}" alt="Photo of ${postContent.activity1Title}">
                                <h3>${postContent.activity1Title}</h3>
                                ${postContent.activity1Text}
                                
                                <img src="${postContent.activity2Image}" alt="${postContent.activity2Title}">
                                <h3>${postContent.activity2Title}</h3>
                                ${postContent.activity2Text}

                                <img src="${postContent.activity3Image}" alt="${postContent.activity3Title}">
                                <h3>${postContent.activity3Title}</h3>
                                ${postContent.activity3Text}
                            </div>`;
}

getPost(postUrl);
