/* Elementos del DOM*/
const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

/* Creamos el array que guarde las operaciones */

let operations = [];
let operation1 = ["0"];
let operation2 = ["0"];
let symbol = [];
let dot = [];
let minus = [];
let cero = ["0"];
let result = 0;

let countDot = 0;
let countDot2 = 0;
let countSymbol = 0;
let symbolText;

const regex = /^[0-9]$/;
let operation1Text = operation1.join("");
let operation2Text = operation2.join("");
$display.innerText = operation1Text;

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

  const targetDot = event.target.classList.contains("calculator__btn--dot");

  const valueTarget = event.target.textContent.trim();

  let operationsText;
  console.log();

  function operation(arrayValue) {
    if (targetNumber || targetDot || targetOperator || targetEquals) {
      if (targetNumber || targetDot) {
        if (countSymbol < 1) {
          operation1.push(valueTarget);
          console.log(operation1);
        }
      }

      function deleteZeros(operation) {
        if (regex.test(operation[1])) {
          console.log(operation);
          if (operation[0] === "0" && regex.test(operation[1])) {
            operation.shift();
            console.log(operation);
          }
          console.log(operation);
        }
      }

      deleteZeros(operation1);

      function controlDot(operation) {
        if (targetDot) {
          countDot++;
          console.log(countDot);

          if (countDot > 1) {
            console.log(countDot);
            operation.pop();
          }
        }
      }
      function controlDot2(operation) {
        if (targetDot) {
          countDot2++;
          console.log(countDot2);

          if (countDot2 > 1) {
            console.log(countDot2);
            operation.pop();
          }
        }
      }

      controlDot(operation1);
      if (countSymbol < 1) {
        operation1Text = operation1.join("");

        $display.innerText = operation1Text;
      }

      console.log(countSymbol);
      if (targetOperator) {
        if (countSymbol < 1) {
          countSymbol++;
          symbol.push(valueTarget);
          console.log(valueTarget);
          symbolText = symbol.join("");

          $display.innerText = symbolText;
        }
      }

      if (countSymbol === 1) {
        if (targetNumber || targetDot) {
          operation2.push(valueTarget);
          console.log(operation2);
          deleteZeros(operation2);
          controlDot2(operation2);
          console.log(operation2);
          operation2Text = operation2.join("");
          $display.innerText = operation2Text;
        }
      }

      if (targetEquals) {
        console.log("I'm enter");
        switch (symbolText) {
          case "+":
            console.log("I'm enter");
            result = eval(operation1Text + "+" + operation2Text);
            console.log(result);
            $display.innerText = result;
            break;

          case "-":
            result = eval(operation1Text + "-" + operation2Text);
            $display.innerText = result;
            break;

          case "*":
            result = eval(operation1Text + "*" + operation2Text);
            $display.innerText = result;
            break;

          case "/":
            result = eval(operation1Text + "/" + operation2Text);
            $display.innerText = result;
            break;
          default:
            result = 0;
            $display.innerText = result;
        }
      }
    }
  }
  operation();
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
