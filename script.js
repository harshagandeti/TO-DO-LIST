let todoListContainer = document.getElementById("todo-list-container");
let addBtn = document.getElementById("add-btn");
let closePopup = document.getElementById("close");
let popup = document.getElementById("popup");
let createTask = document.getElementById("create-task");
let inputField = document.getElementById("add-todo-input");
let strike = false;

console.log(document)

addBtn.addEventListener("click", () => {
  popup.classList.add("add-popup");
  popup.classList.remove("disable");
});
closePopup.addEventListener("click", () => {
  popup.classList.remove("add-popup");
  popup.classList.add("disable");
});

createTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputField.value !== "") {
    let span = document.createElement("span");
    span.innerHTML = "X";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = inputField.value;
    paragraph.classList.add("paragraph");
    paragraph.appendChild(span);
    todoListContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", () => {
      strike = !strike;
      if (!strike) {
        paragraph.style.textDecoration = "line-through";
      } else {
        paragraph.style.textDecoration = "none";
      }
    });
    span.addEventListener("dblclick", () => {
      todoListContainer.removeChild(paragraph);
    });
  } else {
    alert("please enter task");
  }
});
