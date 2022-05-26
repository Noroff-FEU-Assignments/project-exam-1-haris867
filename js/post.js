import { menuToggle } from "./utils/menuFunction.js";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
const headingContainer = document.querySelector(".headings");
const postContainer = document.querySelector(".page");
const postUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/destinations/" +
  id +
  "?acf_format=standard";

async function getPost(url) {
  try {
    const response = await fetch(url);

    const post = await response.json();
    const postContent = post.acf;
    document.title = "Travel Destinations | " + postContent.title;

    headingContainer.innerHTML = `<h1>${postContent.title}</h1>`;

    postContainer.innerHTML = `<div class="page-content">
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

    const commentForm = document.querySelector(".comment-form");
    commentForm.style.display = "block";
    displayModal();
    getComments();
  } catch (error) {
    postContainer.innerHTML = `<h3>An error occurred</h3>`;
  }
}

getPost(postUrl);

function displayModal() {
  const postImage = document.querySelectorAll(".page-content img");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-button i");
  const modalImageContainer = document.querySelector(".modal-image");
  const nav = document.querySelector("nav");

  postImage.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      nav.style.zIndex = "-1";
      modalImageContainer.innerHTML = image.outerHTML;
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    nav.style.zIndex = "0";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      nav.style.zIndex = "0";
    }
  });
}

// Post comment

const commentsUrl =
  "https://haris13.site/Traveldestinations/wp-json/wp/v2/comments?post=";
const form = document.querySelector("form");

form.addEventListener("submit", postComments);

async function postComments(event) {
  event.preventDefault();

  const data = JSON.stringify({
    post: id,
    author_name: fullname.value,
    author_email: email.value,
    content: comment.value,
  });

  const response = await fetch(commentsUrl + id, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  form.reset();
  getComments();
  setTimeout(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);
}

// Display comments for this post

const commentSection = document.querySelector(".comment-section");

async function getComments() {
  try {
    const response = await fetch(commentsUrl + id);
    const result = await response.json();

    commentSection.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      const fullName = result[i].author_name;
      const date = result[i].date + "Z";
      const comment = result[i].content.rendered;

      const dateFormat = Date.parse(date);

      const newDate = new Date(dateFormat);

      const finalDate = newDate.toDateString();
      const finalTime = newDate.toLocaleTimeString();

      commentSection.innerHTML += `<div class="comment">
                                <div class="comment-author">
                                    <h4>${fullName}</h4>
                                    <div class="comment-date">
                                        <h5>${finalDate}</h5>
                                        <h5>${finalTime}</h5>
                                    </div>
                                    </div>
                                    <div>
                                        ${comment}
                                    </div>
                                    </div>`;
    }
  } catch (error) {
    commentSection.innerHTML = `<div><h4>Couldn't display comments.</h4></div>`;
  }
}
