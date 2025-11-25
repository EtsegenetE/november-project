document.getElementById("nextBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|me|us|uk|info|biz)$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    document.getElementById("emailInput").style.borderColor = "red";
    return;
  }

  alert("Form submitted successfully");
});
