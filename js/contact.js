import { menuToggle } from "./utils/menuFunction.js";

const contactUrl =
  "https://haris13.site/Traveldestinations/wp-json/contact-form-7/v1/contact-forms/46/feedback";
const form = document.querySelector("form");

// form.addEventListener("submit", postContactForm);

async function postContactForm(event) {
  const contact_form = document.querySelector("#contact_form");
  let formData = new FormData(contact_form);
  event.preventDefault();

  const body = JSON.stringify({
    "your-name": fullname.value,
    "your-email": email.value,
    "your-subject": subject.value,
    "your-message": comment.value,
  });

  const response = await fetch(contactUrl, {
    method: "post",
    body: formData,
  });
}

// Form validation

const errorMessage = document.querySelector(".error-message");

const nameError = document.querySelector(".name-error");
const nameInput = document.querySelector(".form-name");

const emailError = document.querySelector(".email-error");
const emailInput = document.querySelector(".form-email");

const subjectError = document.querySelector(".subject-error");
const subjectInput = document.querySelector(".form-subject");

const messageError = document.querySelector(".message-error");
const messageInput = document.querySelector(".form-message");

const successMessage = document.querySelector(".success-message");

function validateForm(event) {
  event.preventDefault();

  if (validateLength(nameInput.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateLength(subjectInput.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateLength(messageInput.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (checkEmail(emailInput.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    validateLength(nameInput.value, 5) &&
    validateLength(subjectInput.value, 15) &&
    validateLength(messageInput.value, 25) &&
    checkEmail(emailInput.value)
  ) {
    postContactForm(event);
    successMessage.innerHTML = `<span>The form has been submitted!</span>`;
    form.reset();
  } else {
    successMessage.innerHTML = ``;
  }
}

form.addEventListener("submit", validateForm);

function validateLength(input, length) {
  if (input.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const validEmail = regEx.test(email);
  return validEmail;
}
