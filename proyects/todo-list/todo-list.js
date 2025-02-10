const $todoList = document.querySelector(".todo-list");

const $input = document.querySelector(".todo-list__input");

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

let tasksLocal;

let countTask = 0;

function createElement() {
  if ($input.value === "") return;

  tasksArray.push($input.value);

  localStorage.setItem("tasks", JSON.stringify(tasksArray));

  $input.value = "";

  printElement();
}

function printElement() {
  tasksLocal = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasksLocal == "") {
    return;
  }
  tasksLocal.forEach((element) => {
    console.log(element);
  });
  // console.log(tasksLocal[countTask]);
  // countTask++;
}

$todoList.addEventListener("click", (event) => {
  const todoInput = event.target.classList.contains("todo-list__input");

  const todoButton = event.target.classList.contains("todo-list__button");

  const todoEdit = event.target.classList.contains("todo-list__option--edit");

  const todoDelete = event.target.classList.contains(
    "todo-list__option--delete"
  );

  const valueTarget = event.target.textContent.trim();

  if (todoButton) {
    event.preventDefault();

    createElement();
  }
});
// console.log(countTask);

printElement();
