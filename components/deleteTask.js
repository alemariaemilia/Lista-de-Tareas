const iconDelete = () => {
  const ICON = document.createElement("i");
  ICON.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  ICON.addEventListener("click", deleteTask);
  return ICON;
};

const deleteTask = (e) => {
  const parent = e.target.parentElement;
  parent.remove();
};

export default iconDelete;
