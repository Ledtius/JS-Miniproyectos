const $todoList = document.querySelector(".todo-list");

// $element = document.querySelector(".todo-list__element");

const $input = document.querySelector(".todo-list__input");

const $list = document.querySelector(".todo-list__list");

let arrayObjects = [];
// console.log(task1);

function CreateTask() {}

let taskObject = {
  id: Math.floor(Math.random() * 100),
  name: "Lavar la letrina",
};

console.log(taskObject.id);

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

console.log(tasksArray);

function createTask() {
  if ($input.value === "") return;

  tasksArray.push($input.value);

  localStorage.setItem("tasks", JSON.stringify(tasksArray));

  function Task() {
    this.id = "";
    this.name = "";
    this.printValue = function () {
      return `Id: ${this.id}\nTask name: ${this.name}`;
    };
  }

  let task1 = new Task();
  task1.id = Math.floor(Math.random() * 1000);
  task1.name = $input.value;
  console.log(task1.printValue());

  arrayObjects.push(task1);
  console.log(arrayObjects);
  localStorage.setItem("objectsTask", JSON.stringify(arrayObjects));

  $input.value = "";

  if (!tasksArray.length) {
    return;
  }

  printElement();
}

function printElement() {
  $list.innerHTML = "";

  tasksArray.forEach((element, id) => {
    taskElement(element, id);
    deleteFuntion();
  });
}

$todoList.addEventListener("click", (event) => {
  const todoButton = event.target.classList.contains("todo-list__button");

  if (todoButton) {
    event.preventDefault();
    createTask();
  }
});

function taskElement(taskName, countTaskID) {
  const $element = document.createElement("div");

  const $checkTask = document.createElement("div");

  const $check = document.createElement("input");

  const $task = document.createElement("label");

  const $editDelete = document.createElement("div");

  const $editOption = document.createElement("button");

  const $editSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  const $editPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const $deleteOption = document.createElement("button");

  const $deleteSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  const $deletePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  $element.className = "todo-list__element";
  $element.id = `task-element${countTaskID}`;

  $checkTask.className = "todo-list__check-task";

  $check.className = "todo-list__check";
  $check.type = "checkbox";
  $check.id = `task${countTaskID}`;

  $task.className = "todo-list__task";
  $task.htmlFor = `task${countTaskID}`;
  $task.textContent = taskName;
  // taskIndex(countTaskID);

  countTaskID++;
  // console.log(`Inside: ${countTaskID}`);

  $editDelete.className = "todo-list__edit-delete";

  $editOption.className = "todo-list__option todo-list__option--edit";
  $editSvg.className = "todo-list__icon todo-list__icon--edit";
  $editSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  $editSvg.setAttribute("viewBox", "0 0 512 512");
  $editPath.setAttribute(
    "d",
    "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"
  );
  $editSvg.setAttribute("width", "20");
  $editSvg.setAttribute("height", "20");

  $deleteOption.className = "todo-list__option todo-list__option--delete";
  $deleteSvg.className = "todo-list__icon todo-list__icon--delete";

  $deleteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  $deleteSvg.setAttribute("viewBox", "0 0 448 512");

  $deletePath.setAttribute(
    "d",
    "M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
  );

  $deleteSvg.setAttribute("height", "20");
  $deleteSvg.setAttribute("wight", "20");

  $list.appendChild($element);
  $element.appendChild($checkTask);
  $element.appendChild($editDelete);

  $checkTask.appendChild($check);
  $checkTask.appendChild($task);

  $editDelete.appendChild($editOption);
  $editOption.appendChild($editSvg);
  $editSvg.appendChild($editPath);
  $editDelete.appendChild($deleteOption);
  $deleteOption.appendChild($deleteSvg);
  $deleteSvg.appendChild($deletePath);
  // deleteFuntion();
}

const $element = document.querySelector(".todo-list__element");

function deleteFuntion() {
  const $delete = document.querySelectorAll(".todo-list__option--delete");
  $delete.forEach((element) => {
    let knowArray = JSON.parse(localStorage.getItem("tasks") || []);
    element.addEventListener("click", () => {
      console.clear();
      const elementID = element.parentNode.parentNode.id;
      const regex = /\d+/g;

      console.log(elementID);
      const onlyID = elementID.match(regex);

      console.log(onlyID);

      knowArray.splice(onlyID, 1);

      console.log(knowArray);

      localStorage.setItem("tasks", JSON.stringify(knowArray));

      console.log(knowArray[onlyID]);
      console.log(elementID);

      element.parentNode.parentNode.remove();
      document.location.reload();
    });
  });
}

let arrayObLocal = JSON.parse(localStorage.getItem("objectsTask")) || [];

console.log(arrayObLocal);
// deleteFuntion();
printElement();
