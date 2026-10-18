import { Task, TaskManager } from "./taskManager.js";
import { fetchTasks } from "./api.js";

const manager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

// Render tasks dynamically using native DOM methods
function render() {
  taskList.innerHTML = "";

  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = `task ${task.completed ? "completed" : ""}`;

    const titleSpan = document.createElement("span");
    titleSpan.className = "title";
    titleSpan.textContent = task.title;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      render();
    });

    actionsDiv.appendChild(toggleBtn);
    actionsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(actionsDiv);

    taskList.appendChild(taskDiv);
  });
}
