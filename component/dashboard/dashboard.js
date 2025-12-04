// Load HTML components dynamically
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

// Get saved page or default
const savedPage = localStorage.getItem("activePage") || "mainbody/main.html";

// Load sidebar
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

  // Sidebar link click actions
  const links = document.querySelectorAll(".list-order a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const page = link.getAttribute("data-page");

      if (page) {
        // Save selected page
        localStorage.setItem("activePage", page);

        // Load the page
        loadComponent(".main", page, () => {
          // If the loaded page is the Dashboard, apply greeting
          if (page === "mainbody/main.html") {
            const mainHeading = document.querySelector(".main-head h2");
            const userName = localStorage.getItem("userName") || "User";
            if (mainHeading) {
              mainHeading.textContent = `Good morning, ${userName}!`;
            }
          }

          // If the loaded page is the Task page, load task.js
          if (page === "task/task.html") {
            const script = document.createElement("script");
            script.src = "task/task.js";
            document.body.appendChild(script);
          }
        });
      }

      // Remove active from all lists
      document.querySelectorAll(".list").forEach(li => li.classList.remove("active"));

      // Add active to clicked one
      link.parentElement.classList.add("active");
    });
  });

  // Apply active to saved page
  links.forEach((link) => {
    if (link.getAttribute("data-page") === savedPage) {
      link.parentElement.classList.add("active");
    }
  });
});

// Load saved page on refresh
loadComponent(".main", savedPage, () => {
  if (savedPage === "mainbody/main.html") {
    const mainHeading = document.querySelector(".main-head h2");
    const userName = localStorage.getItem("userName") || "User";
    if (mainHeading) {
      mainHeading.textContent = `Good morning, ${userName}!`;
    }
  }

  if (savedPage === "task/task.html") {
    const script = document.createElement("script");
    script.src = "task/task.js";
    document.body.appendChild(script);
  }
});

// Sidebar toggle (mobile)
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar-container");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show-sidebar");
    });
  }
});
