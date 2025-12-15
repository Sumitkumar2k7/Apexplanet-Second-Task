/* CONTACT FORM */
function submitForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const msg = document.getElementById("msg");

  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const msgErr = document.getElementById("msgErr");
  const successMsg = document.getElementById("successMsg");

  nameErr.textContent =
    emailErr.textContent =
    msgErr.textContent =
    successMsg.textContent =
      "";

  let valid = true;

  if (name.value.trim() === "") {
    nameErr.textContent = "Name required";
    valid = false;
  }
  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailErr.textContent = "Valid email required";
    valid = false;
  }
  if (msg.value.trim() === "") {
    msgErr.textContent = "Message required";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    name.value = email.value = msg.value = "";
  }
}

/* TODO LIST */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
        <div class="todo-left">
          <input type="checkbox" ${
            task.completed ? "checked" : ""
          } onclick="toggleTask(${index})">
          <span>${task.text}</span>
        </div>
        <div class="todo-actions">
          <button class="edit" onclick="editTask(${index})">Edit</button>
          <button class="delete" onclick="deleteTask(${index})">X</button>
        </div>
      `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const updated = prompt("Edit task", tasks[index].text);
  if (updated && updated.trim() !== "") {
    tasks[index].text = updated;
    renderTasks();
  }
}

renderTasks();
