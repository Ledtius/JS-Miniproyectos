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

/* Recorre los elementos operables */
$entries.forEach((element) => {
  element.addEventListener("click", () => {
    let textElement = element.textContent.trim();

    arrayElements.push(textElement);

    console.log(arrayElements);
    
    let expretion = arrayElements.join("");
    
    // console.log(expretion);
    
    
    
  });
});

/* Igual */
$equalsBtn.addEventListener("subit", () => {
  event.defaultPrevented();
});
