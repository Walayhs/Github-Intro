document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "Thanks for reaching out! We’ll get in touch shortly.";
  this.reset();
});
