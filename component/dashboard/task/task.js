document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const activeTasksList = document.getElementById("active-tasks");
  const completedTasksList = document.getElementById("completed-tasks");
  const activeCount = document.getElementById("active-count");
  const completedCount = document.getElementById("completed-count");

  let tasks = []; // store tasks

  // Toggle buttons
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Add Task button
  addTaskBtn.addEventListener("click", () => {
    const taskName = prompt("Enter task name:");
    if (!taskName) return;

    const task = { name: taskName, completed: false };
    tasks.push(task);
    renderTasks();
  });

  // Render tasks
  function renderTasks() {
    activeTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    let active = 0;
    let completed = 0;

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.name;

      if (task.completed) {
        completedTasksList.appendChild(li);
        completed++;
      } else {
        activeTasksList.appendChild(li);
        active++;
        // Click to mark completed
        li.addEventListener("click", () => {
          task.completed = true;
          renderTasks();
        });
      }
    });

    activeCount.textContent = active;
    completedCount.textContent = completed;
  }

  // Initial render
  renderTasks();
});
