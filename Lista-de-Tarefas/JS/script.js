document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#tasks-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target[0].value.trim() === "") return;

    const list = document.querySelector("#task-list");

    const task = document.createElement("li");

    const taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = event.target[0].value;
    taskText.style.margin = "5px";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent = "X";
    taskDeleteButton.addEventListener("click", (e) => {
      console.log(e.target.parentElement.remove());
    });

    task.appendChild(taskCheckBox);
    task.appendChild(taskText);
    task.appendChild(taskDeleteButton);

    list.appendChild(task);

    event.target[0].value = "";
  });
});
