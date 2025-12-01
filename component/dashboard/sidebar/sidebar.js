document.addEventListener("DOMContentLoaded", () => {
  const emailDisplay = document.querySelector(".email-display");

  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  if (emailDisplay && userName && userEmail) {
    const initial = userName.charAt(0).toUpperCase();

    emailDisplay.innerHTML = `
      <div class="user-container">
        <div class="user-initial">${initial}</div>
        <div class="user-info">
          <h3>${userName}</h3>
          <p>${userEmail}</p>
        </div>
      </div>
    `;
  }
});
