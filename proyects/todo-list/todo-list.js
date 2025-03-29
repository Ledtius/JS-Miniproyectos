const $todoListButton = document.querySelector(".todo-list__button");

const $todoListInput = document.querySelector(".todo-list__input");

const $todoListList = document.querySelector(".todo-list__list");

let arrayTasks = JSON.parse(localStorage.getItem("arrayTasks")) || [];

printElement();

console.log(arrayTasks);

$todoListButton.addEventListener("click", (e) => {
  e.preventDefault();
  extractInputValue();
});

let extractInputValue = () => {
  let taskValue = $todoListInput.value.trim();

  if (taskValue === "") return;

  let task = {
    name: taskValue,
    state: false,
  };

  $todoListInput.value = "";

  arrayTasks.push(task);
  saveLocalStorage();
  printElement();
};

function printElement() {
  $todoListList.style.animation = "none";
  $todoListList.style.animation = "appear-scale-element 2s ease";
  $todoListList.innerHTML = "";

  arrayTasks = callLocalStorage();

  // if (!arrayTasks) return;

  console.log(arrayTasks);

  arrayTasks.forEach((task, id) => {
    DOMElement(task.name, id, task.state);

    const $check = document.querySelector(`#task${id}`);

    console.log(arrayTasks.length);
    console.log(id);
    if (Number(arrayTasks.length - 1) === id) {
      const $element = $check.parentElement.parentElement;

      console.log($element);

      $element.style.animation = "appear-scale-element 1s ease-in-out";
    }
    setTimeout(() => {
      $element.style.animation = "none";
    }, 100);
  });

  deleteTask();

  editTask();

  checkTask();
}

function DOMElement(taskName, id, taskState) {
  const $element = document.createElement("div");

  $element.className = "todo-list__element";
  $element.id = `element${id}`;

  $element.style.animation = "none";
  const $checkTask = document.createElement("div");

  $checkTask.className = "todo-list__check-task";

  $element.appendChild($checkTask);

  const $input = document.createElement("input");

  $input.className = "todo-list__check";
  $input.type = "checkbox";
  $input.id = `task${id}`;
  $input.checked = taskState;

  $checkTask.appendChild($input);

  const $label = document.createElement("label");

  $label.className = "todo-list__task";
  $label.htmlFor = `task${id}`;
  $label.textContent = taskName;

  if (taskState) {
    $label.style.setProperty("text-decoration", "line-through");

    $element.style.setProperty("opacity", "0.5");

    $element.style.setProperty("opacity", "0.5");
  } else {
    $label.style = "text-decoration:dashed";
  }

  $checkTask.appendChild($label);

  const $editDelete = document.createElement("div");

  $editDelete.className = "todo-list__edit-delete";

  $element.appendChild($editDelete);

  const $editOption = document.createElement("button");

  $editOption.className = "todo-list__option todo-list__option--edit";

  const $editSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  $editSVG.className = "todo-list__icon todo-list__icon--edit";

  $editSVG.setAttribute("viewBox", "0 0 512 512");

  const $editPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  $editPath.setAttribute(
    "d",
    "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"
  );

  $editSVG.setAttribute("height", "20");
  $editSVG.setAttribute("width", "20");

  $editSVG.appendChild($editPath);

  $editOption.appendChild($editSVG);

  const $deleteOption = document.createElement("button");

  $deleteOption.className = "todo-list__option todo-list__option--delete";

  const $deleteSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  $deleteSVG.className = "todo-list__icon todo-list__icon--delete";

  $deleteSVG.setAttribute("viewBox", "0 0 448 512");

  const $deletePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  $deletePath.setAttribute(
    "d",
    "M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
  );

  $deleteSVG.setAttribute("width", "20");
  $deleteSVG.setAttribute("height", "20");

  $deleteSVG.appendChild($deletePath);

  $deleteOption.appendChild($deleteSVG);

  $editDelete.appendChild($editOption);
  $editDelete.appendChild($deleteOption);

  $todoListList.append($element);
}

let saveLocalStorage = () => {
  const arrayTaskJSON = JSON.stringify(arrayTasks);

  localStorage.setItem("arrayTasks", arrayTaskJSON);
};

function callLocalStorage() {
  arrayTasks = JSON.parse(localStorage.getItem("arrayTasks"));

  return arrayTasks || [];
}

function deleteTask() {
  const $tasks = document.querySelectorAll(".todo-list__element");
  $tasks.forEach((task, index) => {
    let deleteBtns = task.lastChild.lastChild;

    console.log($tasks.length);

    deleteBtns.addEventListener("click", () => {
      task.style.animation = "disappear-scale-element 2s ease";
      arrayTasks = callLocalStorage();
      arrayTasks = arrayTasks.filter((_, index2) => index2 !== index);
      console.log($tasks);

      if (Number($tasks.length - 1) === index) {
        const $element = document.querySelector(`#element${index}`);
        console.log(index);
        console.log($element);
      }
      saveLocalStorage();
      setTimeout(() => {
        printElement();
      }, 1000);
    });
  });
}

function editTask() {
  const $tasks = document.querySelectorAll(".todo-list__element");
  $tasks.forEach((task, index) => {
    const editBtnBar = task.lastChild.firstChild;

    editBtnBar.addEventListener("click", () => {
      console.log(editBtnBar);

      arrayTasks = callLocalStorage();

      const $editBtnBar = createEditBtnBar();

      editValueBar();
      // task.style = "display:none";
      setTimeout(() => {
        $todoListList.style = "display:none";
      }, 200);

      $todoListInput.value = task.textContent;

      $editBtnBar.addEventListener("click", (e) => {
        e.preventDefault();

        if ($todoListInput.value.trim() === "") {
          return;
        }

        arrayTasks[index].name = $todoListInput.value.trim();

        $todoListInput.value = "";

        // task.style = "display:flex";
        $todoListList.style = "display:flex";

        normalBar($editBtnBar);

        saveLocalStorage();
        printElement();
      });

      // task.name = $todoListInput.value.trim();
    });

    console.log(editBtnBar);
  });
}

function createEditBtnBar() {
  const $bar = document.querySelector(".todo-list__bar");

  const $editBtnBar = document.createElement("button");

  $editBtnBar.className = "todo-list__edit-button";

  $editBtnBar.textContent = "Editar";

  $bar.append($editBtnBar);

  return $editBtnBar;
}

function editValueBar() {
  $todoListButton.style = "display:none";

  $todoListInput.placeholder = "Editando tarea...";
}

function normalBar($editBtnBar) {
  $editBtnBar.style = "display: none";

  $todoListButton.style = "display:flex";

  $todoListInput.placeholder = "Digita tus tareas del dia";
}

function checkTask() {
  const $tasks = document.querySelectorAll(".todo-list__element");

  $tasks.forEach((task, index) => {
    const taskCheckBox = task.firstChild.firstChild;

    taskCheckBox.addEventListener("change", () => {
      console.log(taskCheckBox.checked);

      arrayTasks = callLocalStorage();
      console.log(index);

      arrayTasks[index].state = taskCheckBox.checked;

      saveLocalStorage();
      printElement();
      console.log("a");
    });
  });
}
