function loadFooterJS() {
  const nextButton = document.getElementById("nextBtn");

  nextButton.addEventListener("click", () => {
    const currentAction = nextButton.textContent.trim();

    if (currentAction === "Next Step") {
      window.location.href = "dashboard/dashboard.html";
    }

    if (currentAction === "Create Account") {
      const email = document.getElementById("emailInput").value.trim();
      const fullName = document.querySelector(".fullname").value.trim();

      const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|me|us|uk|info|biz)$/;

      if (!fullName) {
        alert("Full Name is required.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      
      window.location.href = "dashboard/dashboard.html";
    }
  });
}
