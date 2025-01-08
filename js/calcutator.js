/* Elementos del DOM*/
const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

/* Creamos el array que guarde las operaciones */

let operations = [];

/* Escuchamos los eventos */

$calculator.addEventListener("click", (event) => {
  const target = event.target.classList.contains("calculator__btn");

  const valueTarget = event.target.textContent.trim();

  operations.push(valueTarget);
  let operationsText = operations.join("");
  console.log(operations);
  $display.innerText = operationsText;

  if (valueTarget === "AC") {
    operations = [];
    $display.innerText = "";
  }

  if (valueTarget === "C") {
    operations.pop();
    operations.pop();

    operationsText = operations.join("");

    $display.innerText = operationsText;
  }
  console.log(operations);
});
