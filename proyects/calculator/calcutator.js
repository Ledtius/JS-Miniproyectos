const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result-text");

const $history = document.querySelector(".history__box");

const $equals = document.querySelector(".calculator__btn--equals");

let stringOperation = "";

let arrayOperation = getLocalStorage() || [];

$calculator.addEventListener("click", (e) => {
  let operationObject = {
    result: "",
    operation: "",
  };

  e.preventDefault();

  const textValueBtn = e.target.textContent.trim();

  const entries = e.target.classList.contains("calculator__btn--entry");

  const clear = e.target.classList.contains("calculator__btn--clear");

  const allClear = e.target.classList.contains("calculator__btn--all-clear");

  const equals = e.target.classList.contains("calculator__btn--equals");

  if (entries) {
    $display.style.animation = "none";

    if (stringOperation === "ERROR" || stringOperation === "0")
      stringOperation = "";

    stringOperation += textValueBtn;
  }

  if (clear) {
    console.log("");
    stringOperation = stringOperation.slice(0, -1);
  }

  if (allClear) {
    $display.style.animation = "disappear-scale-element 0.4s";

    stringOperation = "0";
    setTimeout(() => {
      $display.style.animation = "appear-scale-element 0.5s";
    }, 400);
  }

  if (equals) {
    try {
      operationObject.operation = stringOperation;

      stringOperation = stringOperation.replace("÷", "/");

      stringOperation = stringOperation.replace("×", "*");

      if (stringOperation === "") return;

      stringOperation = eval(stringOperation);

      $display.style.animation = "disappear-scale-element 0.4s";

      setTimeout(() => {
        operationObject.result = stringOperation;

        arrayOperation.push(operationObject);

        saveLocalStorage(arrayOperation);
        printHistoryElement();

        $display.style.animation = "appear-scale-element 0.5s";
      }, 400);
    } catch {
      $display.style.animation = "disappear-scale-element 0.4s";

      setTimeout(() => {
        stringOperation = "ERROR";

        $display.style.animation = "appear-scale-element 0.5s";
      }, 400);

      // operationObject.result = operationObject;

      // arrayOperation.push(operationObject);

      // saveLocalStorage(arrayOperation);
    }
  }

  $display.innerText = stringOperation;
});

function saveLocalStorage(arrayOperation) {
  let JSONArrayObject = JSON.stringify(arrayOperation);

  localStorage.setItem("arrayOperationObject", JSONArrayObject);
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("arrayOperationObject")) || [];
}

function createHistoryElement(operation, result, index) {
  const $element = document.createElement("div");

  $element.className = `history__element`;
  $element.id = `element${index}`;

  const $strong = document.createElement("strong");

  $strong.className = "history__operation";

  $strong.textContent = `${operation} = ${result}`;

  $element.append($strong);

  const $historyBtnMessage = document.createElement("div");

  $historyBtnMessage.className = "history__btns-message";

  $element.append($historyBtnMessage);

  const $historyBtns = document.createElement("div");

  $historyBtns.className = "history__btns";

  $historyBtnMessage.append($historyBtns);

  const $copyBtn = document.createElement("button");

  $copyBtn.className = "history__btn history__btn--copy";

  $copyBtn.innerHTML = ` <svg
                    class="history__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
                    />
                  </svg>`;

  $historyBtns.append($copyBtn);

  const $deleteBtn = document.createElement("button");

  $deleteBtn.className = "history__btn history__btn--delete";

  $deleteBtn.innerHTML = `                  <svg
                    class="history__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                    />
                  </svg>
`;

  $historyBtns.append($deleteBtn);

  const $btnsMessage = document.createElement("div");

  $btnsMessage.className = "btns__message";

  $historyBtnMessage.append($btnsMessage);

  $history.append($element);

  $history.style.transition = "min-height 1s ease";
  // $element.style.transform = "scale(1)";

  deleteHistoryElement($deleteBtn, $element, $btnsMessage);

  copyHistoryElement($copyBtn, $element, $btnsMessage);
}

function printHistoryElement() {
  $history.innerHTML = "";

  arrayOperation = getLocalStorage();

  if (arrayOperation.length === 0) return;

  console.log(arrayOperation);

  arrayOperation.forEach((element, index) => {
    createHistoryElement(element.operation, element.result, index);

    // console.log($element);
  });
}

function deleteHistoryElement($deleteBtn, $element, $btnMessage) {
  $deleteBtn.addEventListener("click", () => {
    arrayOperation = getLocalStorage();

    let index = Number($element.id.match(/-?\d+/g).join(""));

    console.log(typeof index);
    // $btnMessage.style = "color: #e63946";
    // $btnMessage.innerText = "Desecho";

    $element.style.animation = "disappear-scale-element 1s";

    console.log($history);
    setTimeout(() => {
      $btnMessage.innerText = "";
      arrayOperation = arrayOperation.filter((_, index2) => index2 !== index);
      console.log(arrayOperation[index]);

      saveLocalStorage(arrayOperation);

      printHistoryElement();
    }, 600);

    // $element.id.remove();
  });
}

function copyHistoryElement($copyBtn, $element, $btnMessage) {
  $copyBtn.addEventListener("click", () => {
    const textOperation = $element.textContent.trim();

    console.log(textOperation);
    // $element.style.transition = "transform 1s ease";
    // $element.style.transform = "scale(1.1)";

    $btnMessage.style = "color: #4caf50";
    $btnMessage.innerText = "Copiado!";

    setTimeout(() => {
      $btnMessage.innerText = "";
    }, 400);

    navigator.clipboard.writeText(textOperation);
  });
}

printHistoryElement();
