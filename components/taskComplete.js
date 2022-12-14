const completeIcon = () => {
  const ICON = document.createElement("i");
  ICON.classList.add("far", "fa-check-square", "icon");
  ICON.addEventListener("click", taskComplete);
  return ICON;
};

const taskComplete = (e) => {
  const element = e.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
};

export default completeIcon;
