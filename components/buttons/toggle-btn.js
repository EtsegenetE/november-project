const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const fullNameContainer = document.getElementById("fullName");
const nextButton = document.getElementById("nextBtn");

signupBtn.addEventListener("click", () => {
  fullNameContainer.classList.remove("hidden-form");
  signupBtn.classList.add("active-btn");
  loginBtn.classList.remove("active-btn");
  nextButton.textContent = "Create Account";
});

loginBtn.addEventListener("click", () => {
  fullNameContainer.classList.add("hidden-form");
  loginBtn.classList.add("active-btn");
  signupBtn.classList.remove("active-btn");
  nextButton.textContent = "Next Step";
});
