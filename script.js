function submitForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const msg = document.getElementById("msg");

  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const msgErr = document.getElementById("msgErr");
  const successMsg = document.getElementById("successMsg");

  nameErr.textContent = "";
  emailErr.textContent = "";
  msgErr.textContent = "";
  successMsg.textContent = "";

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
    name.value = "";
    email.value = "";
    msg.value = "";
  }
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">X</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
