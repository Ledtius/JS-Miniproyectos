const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

let operationGeneral = "";
let operationSpecialSymbolsGeneral = "";
let resultGeneral;

const operationObject = {
  operation: "",
  operationSpecialSymbols: "",
  result: 0,
};

let arrayObjects = [];

$calculator.addEventListener("click", (e) => {
  e.preventDefault();

  const entries = e.target.classList.contains("calculator__btn--entry");

  const equals = e.target.classList.contains("calculator__btn--equals");

  const targetValue = e.target.value;

  const targetTextContent = e.target.textContent.trim();

  if (entries) {
    operationGeneral += targetValue;

    operationSpecialSymbolsGeneral += targetTextContent;

    $display.innerText = operationSpecialSymbolsGeneral;
  }

  if (equals) {
    try {
      resultGeneral = eval(operationGeneral);

      operationObject.operation = operationGeneral;

      operationObject.operationSpecialSymbols = operationSpecialSymbolsGeneral;

      operationObject.result = resultGeneral;

      arrayObjects.push(operationObject);

      saveLocalStorage(arrayObjects);

      $display.innerText = resultGeneral;
    } catch (e) {
      $display.innerText = "Error";
    }
  }
});

function saveLocalStorage(arrayObjects) {
  let arrayObjectsJSON = JSON.stringify(arrayObjects);

  localStorage.setItem("arrayObjects", arrayObjectsJSON);
}
