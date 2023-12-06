console.log("prova");

const taskInput = document.getElementById("input");
taskInput.addEventListener("submit", function (e) {
  e.preventDefault();
  const currentTask = document.getElementById("taskName");

  console.log(currentTask.value);
  const taskListItem = document.createElement("p");
  taskListItem.innerText = currentTask.value;

  const taskListSection = document.getElementById("taskList");

  taskListSection.appendChild(taskListItem);
  currentTask.value = " ";

  taskListItem.addEventListener("click", function (e) {
    taskListItem.style.textDecoration = "line-through";
  });

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "elimina";
  taskListItem.appendChild(button);

  button.addEventListener("click", function (e) {
    taskListItem.remove();
  });
});
