const signUp = document.getElementById("signin");
const passwordLockButton = document.getElementById("lockBtn");
const passwordLockImage = document.getElementById("lockImg");
const logninButton = document.getElementById("login");
const fullNameContainer = document.getElementById("fullName");
const nextButton = document.getElementById("nextBtn");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|me|us|uk|info|biz)$/;


signUp.addEventListener("click", () => {
  fullNameContainer.classList.remove("hidden-form");

  signUp.classList.add("active-btn");
  logninButton.classList.remove("active-btn");

  nextButton.textContent = "Create Account";
});

logninButton.addEventListener("click", () => {
  fullNameContainer.classList.add("hidden-form");

  logninButton.classList.add("active-btn");
  signUp.classList.remove("active-btn");

  nextButton.textContent = "Next Step";
});

const callBack = (e) => {
  e?.preventDefault();

  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  lockImg.src = isPassword ? "../images/open-lock.svg" : "../images/lock.png";
};

passwordLockButton.addEventListener("click", callBack);

const formCallBack = (e) => {
  e?.preventDefault();
  const email = emailInput.value.trim();

  const isEmailCorrect = emailPattern.test(email);

  if (!isEmailCorrect) {
    alert("Please enter a valid email address.");
    emailInput.style.borderColor = "red";
    return false;
  } else {
    alert("Account created")
    console.log("Valid email: ", email);
  }
};

nextButton.addEventListener("click", formCallBack);
