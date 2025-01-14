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
let result = "";
let valueN1 = "";
let answer = "";

let countDot = 0;
let countDot2 = 0;
let countSymbol = 0;
let symbolText;

// const regex = /^[0-9]$/;
const regex = /^-?\d+(\.\d+)?([+\-*/]-?\d+(\.\d+)?)*$/;

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

  const targetEquals = event.target.classList.contains(
    "calculator__btn--equals"
  );

  const targetDot = event.target.classList.contains("calculator__btn--dot");

  const valueTarget = event.target.textContent.trim();

  let operation = () => {
    if (targetNumber || targetDot || targetOperator || targetEquals) {
      if (targetNumber || targetDot || targetOperator) {
        valueN1 += valueTarget;
        $display.innerText = valueN1;

        console.log(regex.test(valueN1));
        console.log(valueN1);
      }
      if (targetEquals) {
        if (regex.test(valueN1));
        {
          answer = eval(valueN1);

          $display.innerText = answer;
        }
      }
    }

  };
  operation();
});
