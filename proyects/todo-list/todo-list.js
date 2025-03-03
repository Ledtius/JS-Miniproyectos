const $todoList = document.querySelector(".todo-list");

const $input = document.querySelector(".todo-list__input");

const $list = document.querySelector(".todo-list__list");

let arrayTaskObjects =
  JSON.parse(localStorage.getItem("arrayTaskObjects")) || [];

let arrayTaskIDs = JSON.parse(localStorage.getItem("arrayTaskIDs")) || [];

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

const countOfIDs = 30;

if (arrayTaskIDs.length === 0) {
  for (let i = 0; i <= countOfIDs; i++) {
    arrayTaskIDs.push(i);
  }
}

function createTask() {
  if ($input.value === "") return;

  let task = {
    id: "",
    name: "",
    state: false,
  };

  let randomIndex = Math.floor(Math.random() * arrayTaskIDs.length);

  if (arrayTaskIDs.length !== 0) {
    task.id = arrayTaskIDs.splice(randomIndex, 1).join("");

    localStorage.setItem("arrayTaskIDs", JSON.stringify(arrayTaskIDs));

    task.name = $input.value;
    task.state = false;

    console.log(task);
    console.log(arrayTaskObjects);

    arrayTaskObjects.push(task);

    localStorage.setItem("arrayTaskObjects", JSON.stringify(arrayTaskObjects));
  }

  $input.value = "";

  location.reload(); /* No move please */
  printElement();
  // deleteElement();
}

let count = 0;
function printElement() {
  arrayTaskObjects = JSON.parse(localStorage.getItem("arrayTaskObjects")) || [];

  arrayTaskIDs;

  do {
    if (arrayTaskObjects.length === 0) return;
    // if (
    //   arrayTaskObjects[count].id === undefined &&
    //   arrayTaskObjects[count].name === undefined
    // )
    //   return;
    console.log(arrayTaskObjects[count].name);
    createElement(
      arrayTaskObjects[count].name,
      arrayTaskObjects[count].id,
      arrayTaskObjects[count].state
    );
    count++;
  } while (arrayTaskObjects.length > count);

  // arrayTaskObjects.forEach((element) => {
  //   if (!document.getElementById(`task-element${element.id}`)) {
  //     deleteElement();
  //   }
  // });
}

$todoList.addEventListener("click", (event) => {
  const todoButton = event.target.classList.contains("todo-list__button");

  if (todoButton) {
    event.preventDefault();
    createTask();
    // location.reload();
  }
});

function createElement(taskName, taskID, state) {
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
  $element.id = `task-element${taskID}`;

  $checkTask.className = "todo-list__check-task";

  $check.className = "todo-list__check";
  $check.type = "checkbox";
  $check.checked = state;

  console.log(state);

  $check.id = `task${taskID}`;

  $task.className = "todo-list__task";
  $task.htmlFor = `task${taskID}`;
  $task.textContent = taskName;
  // taskIndex(taskID);

  if ($check.checked === true) {
    $task.setAttribute(
      "style",
      "text-decoration:line-through; text-decoration-color:#63e6be;text-decoration-thickness:3px;"
    );
  } else {
    $task.style = "text-decoration: none";
  }
  // console.log(`Inside: ${taskID}`);

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
}

printElement();
let indexValue;

function deleteElement() {
  const $delete = document.querySelectorAll(".todo-list__option--delete");

  $delete.forEach((element) => {
    element.addEventListener("click", () => {
      const idElementDOM = element.parentNode.parentNode.id;
      const parentElementDOM = element.parentNode.parentNode;

      const regex = /\d+/g;

      let idEDNumber = Number(idElementDOM.match(regex).join(""));

      console.log(idElementDOM);
      console.log(parentElementDOM);
      console.log(idEDNumber);

      arrayTaskObjects = JSON.parse(localStorage.getItem("arrayTaskObjects"));

      console.log(arrayTaskObjects);
      arrayTaskObjects.forEach((taskObject, index) => {
        console.log(taskObject.id);
        console.log(idEDNumber);
        if (taskObject.id == idEDNumber) {
          indexValue = index;
          console.log(index);
        }
      });

      console.log(indexValue);
      arrayTaskObjects.splice(indexValue, 1);

      localStorage.setItem(
        "arrayTaskObjects",
        JSON.stringify(arrayTaskObjects)
      );
      console.log(arrayTaskObjects);
      arrayTaskIDs = JSON.parse(localStorage.getItem("arrayTaskIDs"));

      arrayTaskIDs.push(idEDNumber);
      console.log(arrayTaskIDs);

      localStorage.setItem("arrayTaskIDs", JSON.stringify(arrayTaskIDs));

      parentElementDOM.remove();
    });
  });
}

deleteElement();

function editElement() {
  const $edit = document.querySelectorAll(".todo-list__option--edit");

  $edit.forEach((element) => {
    element.addEventListener("click", () => {
      const parentElementDOM = element.parentNode.parentNode;
      const idElementDOM = parentElementDOM.id;

      const regex = /\d+/g;

      let idEDNumber = Number(idElementDOM.match(regex).join());

      // arrayTaskIDs = JSON.parse(localStorage.getItem("arrayTaskIDs"));

      arrayTaskObjects = JSON.parse(localStorage.getItem("arrayTaskObjects")) || [];

      console.log(arrayTaskObjects);
      arrayTaskObjects.forEach((taskObject, index) => {
        if (taskObject.id == idEDNumber) {
          console.log(index);
          const $form = document.querySelector(".todo-list__bar");

          const $button = document.querySelector(".todo-list__button");

          console.log($button);
          const $editButton = document.createElement("button");

          $editButton.className = "todo-list__edit-button";

          $editButton.textContent = "Editar";

          $button.className = "todo-list__button-disable";

          $form.appendChild($editButton);

          $editButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("aaa");
            if ($input.value === "") return;

            taskObject.name = $input.value;
            $input.value = "";

            console.log(taskObject);
            localStorage.setItem(
              "arrayTaskObjects",
              JSON.stringify(arrayTaskObjects)
            );

            $editButton.className = "todo-list__edit-button-disable";

            $button.className = "todo-list__button";

            location.reload();
          });
        }
      });
    });
  });
}

editElement();

function checkTasks() {
  const $checkBox = document.querySelectorAll(".todo-list__check");

  const $checkTask = document.querySelectorAll(".todo-list__task");

  arrayTaskObjects = JSON.parse(localStorage.getItem("arrayTaskObjects")) || [];

  console.log(arrayTaskObjects);

  $checkBox.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.checked);

      location.reload();

      parentElementDOM = element.parentNode;
      parentElementDOM2ID = element.parentNode.parentNode.id;

      const regex = /\d+/g;

      let idEDNumber = parentElementDOM2ID.match(regex).join("");

      let taskObject;

      arrayTaskObjects.forEach((task) => {
        if (task.id == idEDNumber) {
          taskObject = task;
        }
      });
      console.log(taskObject);
      if (element.checked === true) {
        taskObject.state = true;
        arrayTaskObjects.forEach((task, index) => {
          if (taskObject.id === task) {
            arrayTaskObjects.splice(index, 1, taskObject);
            /*  */
          }
        });
        console.log(arrayTaskObjects);

        localStorage.setItem(
          "arrayTaskObjects",
          JSON.stringify(arrayTaskObjects)
        );

        console.log(parentElementDOM2ID);
      } else {
        taskObject.state = false;

        arrayTaskObjects.forEach((task, index) => {
          if (taskObject.id === index) {
            arrayTaskObjects.splice(index, 1, taskObject);
          }
        });
        console.log(arrayTaskObjects);

        localStorage.setItem(
          "arrayTaskObjects",
          JSON.stringify(arrayTaskObjects)
        );

        /*  */
      }
    });
  });
}

checkTasks();

// function
// console.log($element);
