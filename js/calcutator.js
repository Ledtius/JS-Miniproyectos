const $calculator = document.querySelector(".calculator");

const $numberBtns = document.querySelectorAll(".calculator__btn--number");

const $symbolBtns = document.querySelectorAll(".calculator__btn--symbol");

const $parenBtns = document.querySelectorAll(".calculator__btn--paren");

const $dotBtn = document.querySelector(".calculator__btn--dot");

const $equalsBtn = document.querySelector(".calculator__btn--equals");

const $btns = document.querySelectorAll(".calculator__btn");

const $result = document.querySelector(".calculator__result");

let arrayValue = [];

// console.log($calculator);
// console.log($btns);

$calculator.addEventListener("submit", function () {
  event.preventDefault();
});

$btns.forEach((element) => {
  element.addEventListener("click", () => {
    let valueElements = element.textContent.trim();
    let TogetherElements = arrayValue.join("");
    arrayValue.push(valueElements);
    // console.log(arrayValue
    $result.innerText = Number(TogetherElements);

    console.log(arrayValue);
  });
  //   console.log(element.textContent);
});

// console.log(arrayValue);
/* Colocar un tipo de nombre de boton diferente a los numericos, los simbolos etc. */
