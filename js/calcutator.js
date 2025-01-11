/* Elementos del DOM*/
const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

/* Creamos el array que guarde las operaciones */

let operations = [];
let operation1 = [];
let operation2 = [];
let symbols = [];
let dot = [];
let minus = [];
let cero = ["0"];
let result;
let count = 0;
/* Escuchamos los eventos */

$calculator.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target.classList.contains("calculator__btn");

  const targetNumber = event.target.classList.contains(
    "calculator__btn--number"
  );

  const targetOperator = event.target.classList.contains(
    "calculator__btn--symbol"
  );

  const targetSpecial = event.target.classList.contains(
    "calculator__btn--special"
  );

  const targetEquals = event.target.classList.contains(
    "calculator__btn--equals"
  );

  const valueTarget = event.target.textContent.trim();

  let operationsText;

  let operation1Text;

  if (targetNumber || targetOperator || targetSpecial) {
    operation1.push(valueTarget);

    if (operation1[operation1.lenght] === "") {
      operation1[operation1.lenght] = "0";
    }
    count++;
    console.log(count);
    console.log(operation1[operation1.lenght]);
    console.log(operation1.length);

    operationsText = operation1.join("");

    // result = evaluate(operationsText);
    // console.log(result);
    // const parts = operationsText.split(/([+\-*/])/); // Divide por operadores

    result = eval(operationsText);

    $display.innerText = operationsText;
  }

  if (targetEquals) {
    console.log(result);
    console.log("equals");
    operationsText = operation1.join("");
    $display.innerText = result;
    operations = [];

    operations.push(result);
  }
});

/* 
  if (targetNumber || targetOperator) {
    operations.push(valueTargetNumber);
    operationsText = operations.join("");
    $display.innerText = operationsText;
  }

  if (targetOperator) {
    operations.push(valueTargetOperator);
    return;
  }

  let count = 0;

  if (targetOperator) {
    symbols.push(valueTargetOperator);
    console.log(symbols);
    console.log(symbols.length);
    if (symbols.length < 2) {
      operations.push(valueTargetOperator);
      operationsText = operations.join("");
      $display.innerText = operationsText;
    }
  } */

// $calculator.addEventListener("click", (event) => {
//   const target = event.target.classList.contains("calculator__btn");

//   const valueTarget = event.target.textContent.trim();

//   operations.push(valueTarget);
//   let operationsText = operations.join("");
//   console.log(operations);
//   $display.innerText = operationsText;

//   if (valueTarget === "AC") {
//     operations = [];
//     $display.innerText = "";
//   }

//   if (valueTarget === "C") {
//     operations.pop();
//     operations.pop();

//     operationsText = operations.join("");

//     $display.innerText = operationsText;
//   }
//   console.log(operations);

//   console.log(operationsText);
// });
