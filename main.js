import completeIcon from "./components/taskComplete.js";
import iconDelete from "./components/deleteTask.js";
const ADD_BTN = document.querySelector("[data-form-btn]");

const CREATE_TASK = (e) => {
  e.preventDefault();
  const INPUT_ENTRY = document.querySelector("[data-form-input]");
  const INPUT_VALUE = INPUT_ENTRY.value;
  const TASK_LIST = document.querySelector("[data-list]");
  const TASK = document.createElement("li");
  TASK.classList.add("card");
  INPUT_ENTRY.value = "";

  const TASK_CONTENT = document.createElement("div");
  const TASK_TITLE = document.createElement("span");
  TASK_TITLE.classList.add("task");
  TASK_TITLE.innerText = INPUT_VALUE;
  TASK_CONTENT.appendChild(completeIcon());
  TASK_CONTENT.appendChild(TASK_TITLE);

  TASK.appendChild(TASK_CONTENT);
  TASK.appendChild(iconDelete());
  TASK_LIST.appendChild(TASK);
};

ADD_BTN.addEventListener("click", CREATE_TASK);
