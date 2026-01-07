document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);
    form.reset();
  });
});
