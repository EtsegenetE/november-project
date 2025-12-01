async function loadComponent(targetSelector, filePath, callback) {
  const container = document.querySelector(targetSelector);
  if (!container) return;

  try {
    const response = await fetch(filePath);
    const html = await response.text();
    container.innerHTML = html;

    if (callback) callback();
  } catch (err) {
    console.error("Error loading component:", err);
  }
}

function loadToggleJS() {
  const loginBtn = document.getElementById("login");
  const signUpBtn = document.getElementById("signin");
  const fullNameDiv = document.getElementById("fullName");
  const nextBtn = document.getElementById("nextBtn");
  const headerTitle = document.getElementById("headerTitle");
  const headerSubtitle = document.getElementById("headerSubtitle");

  if (!loginBtn || !signUpBtn) return;

  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active-btn");
    signUpBtn.classList.remove("active-btn");

    if (fullNameDiv) fullNameDiv.classList.add("hidden-form");
    if (nextBtn) nextBtn.textContent = "Next Step";

    if (headerTitle) headerTitle.textContent = "Welcome Back!";
    if (headerSubtitle)
      headerSubtitle.textContent = "Enter your details to access your account.";
  });

  signUpBtn.addEventListener("click", () => {
    signUpBtn.classList.add("active-btn");
    loginBtn.classList.remove("active-btn");

    if (fullNameDiv) fullNameDiv.classList.remove("hidden-form");
    if (nextBtn) nextBtn.textContent = "Create Account";

    if (headerTitle) headerTitle.textContent = "Join TaskMaster";
    if (headerSubtitle)
      headerSubtitle.textContent =
        "Create an account to boost your productivity";
  });
}

function loadFooterJS() {
  const nextBtn = document.getElementById("nextBtn");
  if (!nextBtn) return;

  nextBtn.addEventListener("click", () => {
    const action = nextBtn.textContent.trim();
    const emailInput = document.getElementById("emailInput");
    const fullNameInput = document.querySelector(".fullname");

    const email = emailInput?.value.trim() || "";
    const fullName = fullNameInput?.value.trim() || "";
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|me|us|uk|info|biz)$/;

    if (action === "Next Step") {
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const name = email.split("@")[0];
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);

      window.location.href = "component/dashboard/dashboard.html";
    }

    if (action === "Create Account") {
      if (!fullName) {
        alert("Full Name is required.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", fullName);

      window.location.href = "component/dashboard/dashboard.html";
    }
  });
}

loadComponent(".header", "component/login/head/head.html");

loadComponent(".buttons", "component/buttons/toggle-btn.html", () => {
  loadToggleJS();
});

loadComponent(".inputs", "component/login/inputs/email.html");

loadComponent(".footer-container", "component/login/footer/footer.html", () => {
  loadFooterJS();
});
