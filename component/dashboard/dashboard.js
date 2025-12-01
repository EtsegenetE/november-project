async function loadComponent(target, file, callback) {
  const container = document.querySelector(target);
  if (!container) return;

  try {
    const response = await fetch(file);
    const html = await response.text();
    container.innerHTML = html;
    if (callback) callback();
  } catch (err) {
    console.error("Error loading component:", err);
  }
}


loadComponent(".sidebar-container", "sidebar/sidebar.html", () => {
  const emailDisplay = document.querySelector(".email-display");
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "";

  if (emailDisplay) {
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


loadComponent(".main", "mainbody/main.html", () => {
 
  const mainHeading = document.querySelector(".main-head h2");
  const userName = localStorage.getItem("userName") || "User";

  if (mainHeading) {
    mainHeading.textContent = `Good morning, ${userName}!`;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar-container");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show-sidebar");
    });
  }
});
