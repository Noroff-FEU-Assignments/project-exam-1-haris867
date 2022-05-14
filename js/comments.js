const commentsUrl = "http://localhost/PE1/wp-json/wp/v2/comments";
const form = document.querySelector("form");

form.addEventListener("submit", postComments);

async function postComments(event) {
  // const list = [postId, fullname, email, comment];
  // console.log(list);

  event.preventDefault();

  const data = JSON.stringify({
    post: postId.value,
    author_name: fullname.value,
    author_email: email.value,
    content: comment.value,
  });

  const response = await fetch(commentsUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  // console.log(response);
}

const commentSection = document.querySelector(".comment-section");

async function getComments() {
  const response = await fetch(commentsUrl);
  // console.log(response);
  const result = await response.json();
  // console.log(result);

  for (let i = 0; i < result.length; i++) {
    const fullName = result[i].author_name;
    const date = result[i].date + "Z";
    const comment = result[i].content.rendered;
    // console.log(date);

    const dateFormat = Date.parse(date);

    // console.log(dateFormat);

    const newDate = new Date(dateFormat);
    // console.log(newDate);

    const finalDate = newDate.toDateString();
    const finalTime = newDate.toLocaleTimeString();

    // console.log(finalDate);
    // console.log(finalTime);

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
}

getComments();
