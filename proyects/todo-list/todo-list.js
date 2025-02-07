const $todoListContainer = document.querySelector(".todo-list");

const $todoListInput = document.querySelector(".todo-list__input");

const $todoListForm = document.querySelector(".todo-list__bar");

console.log($todoListForm);

let inputValue;

$todoListForm.addEventListener("submit", (event) => {
  event.preventDefault();

  inputValue = $todoListInput.value;

  console.log(inputValue);
});

function createListElement(inputValue) {
  const $listContainer = document.querySelector(".todo-list__list");

  /* 1 area */
  const $checkTask = document.createElement("div");

  $check.classList.add("todo-list__check-task");

  const $check = document.createElement("input");

  $check.classList.add("todo-list__check");
  $check.type = "checkbox";
  $check.id = "task";

  const $task = document.createElement("label");
  $task.classList.add("todo-list__task");
  $task.for = "task";
  $task.textContent = inputValue;
  /* 1 area */

  /*  */
  const $editDelete = document.createElement("div");
  $editDelete.classList.add("todo-list__edit-delete");

  const $option1 = document.createElement("buttom");
  $option1.classList.add("todo-list__option");
}
