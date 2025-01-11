/* Elementos del DOM*/
const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

/* Creamos el array que guarde las operaciones */

let operations = [];
let operation1 = ["0"];
let operation2 = [];
let symbols = [];
let dot = [];
let minus = [];
let cero = ["0"];
let result;
let countDot = 0;
/* Escuchamos los eventos */
let operation1Text = operation1.join("");
$display.innerText = operation1Text;

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

  const targetDot = event.target.classList.contains("calculator__btn--dot");

  const valueTarget = event.target.textContent.trim();

  let operationsText;
  console.log();

  if (targetNumber || targetDot) {
    if (countDot > 1) {
      countDot++;
      console.log(countDot);
    }

    const regex = /^[0-9]$/;

    operation1.push(valueTarget);
    console.log(operation1);
    if (regex.test(operation1[1])) {
      console.log(operation1);
      if (operation1[0] === "0" && regex.test(operation1[1])) {
        operation1.shift();
        console.log(operation1);
      }
      console.log(operation1);
    }

    if (targetDot) {
      countDot++;
      console.log(countDot);

      if (countDot > 1) {
        console.log(countDot);
        operation1.pop();
      }
    }
    // operation1.push(valueTarget);
    operation1Text = operation1.join("");

    $display.innerText = operation1Text;
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
