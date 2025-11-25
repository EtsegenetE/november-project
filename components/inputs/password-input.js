fetch("components/inputs/password-input.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("passwordComponent").innerHTML = html;

    const lockBtn = document.getElementById("lockBtn");
    const lockImg = document.getElementById("lockImg");
    const passwordInput = document.getElementById("passwordInput");

    lockBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const isHidden = passwordInput.type === "password";

      passwordInput.type = isHidden ? "text" : "password";
      lockImg.src = isHidden ? "./images/open-lock.svg" : "./images/lock.png";
    });
  });
