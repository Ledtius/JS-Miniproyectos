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

/* Escuchamos los eventos */

$calculator.addEventListener("click", (event) => {
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

  const valueTarget = event.target.textContent.trim();

  let operationsText;

  let operation1Text;
  const regex = /^-?\d+(\.\d+)?$/;

  if (targetNumber || targetSpecial) {
     operation1.push(valueTarget);
    operation1Text = operation1.join("");
    
    console.log(regex.test(operation1Text));

     console.log(.43 *2)
     console.log(1. *2)
    if (regex.test(operation1Text)) {
      $display.innerText = operation1Text;
    } else {
    }
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
