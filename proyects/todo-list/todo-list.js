const $todoList = document.querySelector(".todo-list");

const $input = document.querySelector(".todo-list__input");

const $list = document.querySelector(".todo-list__list");

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

function createTask() {
  if ($input.value === "") return;

  tasksArray.push($input.value);

  localStorage.setItem("tasks", JSON.stringify(tasksArray));

  $input.value = "";

  if (!tasksArray.length) {
    return;
  }

  printElement();
}

function printElement() {
  console.log($list.innerHTML);
  $list.innerHTML = "";

  tasksArray.forEach((element, id) => {
    taskElement(element, id);
  });
  deleteTaskElement();

  // tasksArray.forEach((element) => {
  //   taskElement(element);
  // });
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
    createTask();
  }

  if (todoEdit) {
    console.log("Edited");
  }

  if (todoDelete) {
    console.log("Deleted");
  }
});
// console.log(countTask);

// let countTaskID = 0;
// console.log(`Outside: ${countTaskID}`);

function taskElement(taskName, countTaskID) {
  const $element = document.createElement("div");

  const $checkTask = document.createElement("div");

  const $check = document.createElement("input");

  const $task = document.createElement("label");

  const $editDelete = document.createElement("div");

  const $editOption = document.createElement("button");

  const $editSvg = document.createElement("svg");

  const $editPath = document.createElement("path");

  const $deleteOption = document.createElement("button");

  $element.className = "todo-list__element";
  $element.id = `task-element${countTaskID}`;

  $checkTask.className = "todo-list__check-task";

  $check.className = "todo-list__check";
  $check.type = "checkbox";
  $check.id = `task${countTaskID}`;

  $task.className = "todo-list__task";
  $task.htmlFor = `task${countTaskID}`;
  $task.textContent = taskName;
  countTaskID++;
  console.log(`Inside: ${countTaskID}`);

  $editDelete.className = "todo-list__edit-delete";

  $editOption.className = "todo-list__option todo-list__option--edit";
  $editOption.innerText = `1`;

  $deleteOption.className = "todo-list__option todo-list__option--delete";
  $deleteOption.innerHTML = `<svg
                class="todo-list__icon todo-list__icon--delete"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg>`;

  $list.appendChild($element);
  $element.appendChild($checkTask);
  $element.appendChild($editDelete);

  $checkTask.appendChild($check);
  $checkTask.appendChild($task);

  $editDelete.appendChild($editOption);
  $editDelete.appendChild($editSvg);
  $editSvg.appendChild($editPath);
  $editDelete.appendChild($deleteOption);
}

printElement();

function deleteTaskElement() {
  $list.addEventListener("click", (event) => {
    const $deleteOption = event.target.classList.contains(
      "todo-list__option--delete"
    );
    console.log(event.target);

    console.log($deleteOption);
  });
}
