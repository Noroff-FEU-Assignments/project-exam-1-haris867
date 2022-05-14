const contactUrl =
  "http://localhost/PE1/wp-json/contact-form-7/v1/contact-forms/46/feedback";
const form = document.querySelector("form");

form.addEventListener("submit", postContactForm);

async function postContactForm(event) {
  const list = [fullname, email, subject, comment];
  console.log(list);
  const contact_form = document.querySelector("#contact_form");
  let formData = new FormData(contact_form);
  console.log({ formData });
  event.preventDefault();

  const body = JSON.stringify({
    "your-name": fullname.value,
    "your-email": email.value,
    "your-subject": subject.value,
    "your-message": comment.value,
  });

  console.log(body);

  const response = await fetch(contactUrl, {
    method: "post",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: formData,
  });

  console.log(response);
}
