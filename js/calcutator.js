const $calculator = document.querySelector(".calculator");

const $numberBtns = document.querySelectorAll(".calculator__btn--number");

const $symbolBtns = document.querySelectorAll(".calculator__btn--symbol");

const $parenBtns = document.querySelectorAll(".calculator__btn--paren");

const $dotBtn = document.querySelector(".calculator__btn--dot");

const $equalsBtn = document.querySelector(".calculator__btn--equals");

const $entries = document.querySelectorAll(".calculator__btn--entry");

const $btns = document.querySelectorAll(".calculator__btn");

const $result = document.querySelector(".calculator__result");

let arrayElements = [];

/* asdsaasdf */
$entries.forEach((element) => {
  element.addEventListener("click", () => {
    let textElement = element.textContent.trim();

    arrayElements.push(textElement);

    console.log();
    if (
      arrayElements[0] === "+" ||
      arrayElements[0] === "/" ||
      arrayElements[0] === "*" ||
      arrayElements[0] === ")"
    ) {
      arrayElements.shift();
      console.log(arrayElements);
    }



    let operation = arrayElements.join("");
    console.log(7 * 2);
  });

  console.log(arrayElements);
});

/* Added commennt */

// $numberBtns.forEach((element) => {
//   element.addEventListener(
//     "click",
//     (amor = () => {
//       let textValue = element.textContent.trim();
//       arrayValue.push(textValue)
//       console.log(arrayValue);

//       // console.log(arrayFull);
//       // if (arrayFull.length < 2) return;

//       // return 220;
//       // return arrayFull
//       // return element.textContent.trim();
//     })
//   );

// });

// console.log($calculator);
// console.log($btns);

$calculator.addEventListener("submit", function () {
  event.preventDefault();
});

// $btns.forEach((element) => {

//   element.addEventListener("click", () => {
//     let valueElements = element.textContent.trim();
//     let TogetherElements = arrayValue.join("");
//     arrayValue.push(valueElements);
//     // console.log(arrayValue
//     $result.innerText = Number(TogetherElements);

//     console.log(arrayValue);
//   });
//     console.log(element.textContent);
// });

// console.log(arrayValue);
/* Colocar un tipo de nombre de boton diferente a los numericos, los simbolos etc. */
