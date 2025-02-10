const $todoList = document.querySelector(".todo-list");

const $input = document.querySelector(".todo-list__input");

let tasksArray = [];

let tasksLocal;

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

    if ($input.value === "") return;

    tasksArray.push($input.value);

    if (localStorage.getItem("tasks")) {
      tasksArray = JSON.parse(localStorage.getItem("tasks"));

      tasksArray.push($input.value);
    }

    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    $input.value = "";
  }
});

tasksLocal = JSON.parse(localStorage.getItem("tasks"));

console.log(tasksLocal);
