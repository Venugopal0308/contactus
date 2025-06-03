document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(el => el.textContent = "");

  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name === "") {
    errorMessages[0].textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    errorMessages[1].textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errorMessages[1].textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (message === "") {
    errorMessages[2].textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
