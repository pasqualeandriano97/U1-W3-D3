console.log("prova");

const taskInput = document.getElementById("input");
taskInput.addEventListener("submit", function (e) {
  e.preventDefault();
  const currentTask = document.getElementById("taskName");

  console.log(currentTask.value);
  const taskListItem = document.createElement("li");
  taskListItem.innerText = currentTask.value;
  if (currentTask.value === " ") {
    alert("Inserisci un task prima di salvarlo");
  } else {
    const taskListSection = document.getElementById("taskList");

    taskListSection.appendChild(taskListItem);
    currentTask.value = " ";

    taskListItem.addEventListener("click", function (e) {
      taskListItem.classList.toggle("barred");
    });
  }

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Elimina";

  taskListItem.appendChild(button);

  button.addEventListener("click", function (e) {
    taskListItem.remove();
  });
});
