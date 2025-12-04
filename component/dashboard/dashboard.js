
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


const savedPage = localStorage.getItem("activePage") || "mainbody/main.html";


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

  
  const links = document.querySelectorAll(".list-order a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const page = link.getAttribute("data-page");

      if (page) {
     
        localStorage.setItem("activePage", page);


        loadComponent(".main", page, () => {
          
          if (page === "mainbody/main.html") {
            const mainHeading = document.querySelector(".main-head h2");
            const userName = localStorage.getItem("userName") || "User";
            if (mainHeading) {
              mainHeading.textContent = `Good morning, ${userName}!`;
            }
          }

        
          if (page === "task/task.html") {
            const script = document.createElement("script");
            script.src = "task/task.js";
            document.body.appendChild(script);
          }
        });
      }

      
      document.querySelectorAll(".list").forEach(li => li.classList.remove("active"));

  
      link.parentElement.classList.add("active");
    });
  });


  links.forEach((link) => {
    if (link.getAttribute("data-page") === savedPage) {
      link.parentElement.classList.add("active");
    }
  });
});


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


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar-container");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show-sidebar");
    });
  }
});
